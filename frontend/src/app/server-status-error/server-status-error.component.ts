// ANGULAR MODULE
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-server-status-error',
  templateUrl: './server-status-error.component.html',
  styleUrls: ['./server-status-error.component.scss']
})
export class ServerStatusErrorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  logOut() {

    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');

  }

}
