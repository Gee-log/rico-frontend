import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { MdPaginator } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { ApiService } from '../services/api.service';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';
import * as $ from 'jquery';

@Component({
  selector: 'app-port-history',
  templateUrl: './port-history.component.html',
  styleUrls: ['./port-history.component.scss']
})

export class PortHistoryComponent implements OnInit {

  public pendingID = [];

  constructor(private http: Http, private ApiService: ApiService) {

  }


  ngOnInit() {
    this.fetchData();

  }

  ngAfterViewInit() {
    console.log(this.pendingID);
    $(document).ready(function () {

      $('#P' + 129).click(function () {

        let id = $(this).attr('id');
        let formatID = id.substring(1);

        // for (let i = 0; i < element.length; i++) {
        //   $('#P' + element[i]).attr('disabled', 'disabled');
        //   $('#C' + element[i]).attr('disabled', 'disabled');
        // }

        // $.ajax({
        //   type: 'POST',
        //   url: 'http://127.0.0.1:8000/pendingtask/',
        //   data: {
        //     id: formatID
        //   },
        //   success: function (data) {
        //     console.log('Sending PendingID :', data);
        //   }
        // });
      });
    })

  }

  // test() {
  //   this.pendingID.forEach(function (element) {

  //     // PENDING BUTTON CLICKED
  //     $('#P' + element).click(function () {

  //       let id = $(this).attr('id');
  //       let formatID = id.substring(1);

  //       for (let i = 0; i < element.length; i++) {
  //         $('#P' + element[i]).attr('disabled', 'disabled');
  //         $('#C' + element[i]).attr('disabled', 'disabled');
  //       }

  //       $.ajax({
  //         type: 'POST',
  //         url: 'http://127.0.0.1:8000/pendingtask/',
  //         data: {
  //           id: formatID
  //         },
  //         success: function (data) {
  //           console.log('Sending PendingID :', data);
  //         }
  //       });
  //     });
  //     // CANCEL BUTTON CLICKED
  //     $('#C' + element).click(function () {

  //       let id = $(this).attr('id');
  //       let formatID = id.substring(1);

  //       $.ajax({
  //         type: 'POST',
  //         url: 'http://127.0.0.1:8000/canceltask/',
  //         data: {
  //           id: formatID,
  //           action: 'canceled'
  //         },
  //         success: function (data) {
  //           console.log('Sending PendingID :', data);
  //           location.reload();
  //         }
  //       });
  //     })
  //   });
  // }

  fetchData() {

    let storage = [];

    this.ApiService.getConnectionHistory().then((data) => {

      var tblBody = document.getElementById("records");

      for (var i = 0; i < data.length; i++) {
        var row = document.createElement("tr");
        var objs = data[i];

        if (objs['status'] == 'pending') {
          storage.push(objs['id']);
          console.log(objs['id']);
        }

        // this.pendingID.push(storage);
        // DAY ROW
        var day = new Date(objs['timestamp']);
        var formatday = day.toString().substring(0, 15);
        var cell = document.createElement("td")
        cell.style.cssText = 'padding: 10px;';
        var cellText = document.createTextNode(formatday)
        cell.appendChild(cellText);
        row.appendChild(cell);
        // TIME ROW 
        var time = new Date(objs['timestamp']);
        var formattime = time.toString().substring(15);
        cell = document.createElement("td")
        cellText = document.createTextNode(formattime)
        cell.appendChild(cellText);
        row.appendChild(cell);
        // STATUS ROW
        var type = objs['switching_type'];
        var typeCheck = type.toString();
        cell = document.createElement("td")
        // IF switching_type == C
        if (typeCheck === 'C') {
          cellText = document.createTextNode('Connected');
          cell.style.cssText = 'color: #00C853;';
          // IF switching_type == D
        } else {
          cellText = document.createTextNode('Disconnected');
          cell.style.cssText = 'color: red;';
        }
        cell.appendChild(cellText);
        row.appendChild(cell);
        // EAST PORT ROW
        cell = document.createElement("td");
        cellText = document.createTextNode("E" + objs['east']);
        cell.appendChild(cellText);
        row.appendChild(cell);
        // WEST PORT ROW
        cell = document.createElement("td");
        cellText = document.createTextNode("W" + objs['west']);
        cell.appendChild(cellText);
        row.appendChild(cell);
        // TASK STATUS ROW
        var status = objs['status'];
        var formatstatus = status.charAt(0).toUpperCase() + status.slice(1);
        // IF STATUS == BREAK
        // CREATE BREAK BUTTON
        if (status == 'break') {
          var button = document.createElement("BUTTON");
          button.className = "button-width mat-raised-button"
          button.style.cssText = 'background: #ffee58; margin: 3px;';
          cellText = document.createTextNode(formatstatus);
          button.appendChild(cellText);
          row.appendChild(button);
          // IF STATUS == SUCCESS
        } else if (status == 'success') {
          cell = document.createElement("td");
          cellText = document.createTextNode(formatstatus);
          cell.appendChild(cellText);
          row.appendChild(cell);
          // IF STATUS == PENDING
          // CREATE PENDING BUTTON
        } else if (status == 'pending') {
          var button = document.createElement("BUTTON");
          button.className = "button-width mat-raised-button"
          button.style.cssText = 'background: red; color: white; margin: 3px;';
          button.id = 'P' + objs['id'];
          cellText = document.createTextNode("Continue");
          button.appendChild(cellText);
          row.appendChild(button);
        }
        // IF STATUS == PENDING
        // CREATE CANCEL BUTTON
        cell = document.createElement("td");
        if (status == 'pending') {
          var button = document.createElement("BUTTON");
          button.className = "button-width mat-raised-button mat-primary"
          button.style.cssText = 'margin: 3px;';
          button.id = 'C' + objs['id'];
          cellText = document.createTextNode("Cancel");
          button.appendChild(cellText);
          row.appendChild(button);
        }

        tblBody.appendChild(row);

      }
    });
  }

}
