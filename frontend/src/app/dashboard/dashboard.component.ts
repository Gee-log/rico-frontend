import { Component, OnInit, ViewChild } from '@angular/core';

// Api Service
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // ALARM LOG
  alarm_data: any = [];

  // CONNECTION LOG
  connection_data: any = [];

  // ROBOT INFORMATION
  available_port: string;
  robot_status: string;
  system_uptime: string;
  total_connected_pair: number;

  // SYSTEM HEALTH
  temperature_celsius: number;
  temperature_fahrenheit: number;
  humidity: number;

  // LATEST OPERATION
  latest_eastport: any;
  latest_westport: any;
  operation_tasktime: any;
  operation_taskcompleted: any;

  // TCP/UDP SERVICE STATUS
  http_status: string;
  https_status: string;
  snmp_status: string;

  // SOFTWARE INFORMATION
  bootloader_version: number;
  bootloader_md5: string;
  firmware_version: number;
  firmware_md5: string;
  system_locale: string;

  // SYSTEM INFORMATION
  current_time: Date;
  current_time_fix: string;
  mac_address: string;
  object_id: string;
  system_contact: string;
  system_description: string;
  system_hostname: string;
  system_location: string;

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.getSystemUptime();
    this.fetchData();
    this.getCurrentAlarm();
    this.getLatestConnection();
    this.getLatestFiveConnection();
    this.getLatestTaskTime();
    this.getOperationSequence();
  }

  fetchData() {

    this._apiService.getDashboardData().then((data => {

      this.total_connected_pair = data['total_connected_pairs'];
      this.robot_status = data['robot_status'];
      this.available_port = data['available_ports'] + ' Port(s)';
      this.snmp_status = data['system_summary']['service_status']['snmp'];
      this.http_status = data['system_summary']['service_status']['http'];
      this.https_status = data['system_summary']['service_status']['https'];
      this.bootloader_version = data['system_summary']['software_information']['bootloader_version'];
      this.system_locale = data['system_summary']['software_information']['locale'];
      this.firmware_version = data['system_summary']['software_information']['firmware_version'];
      this.firmware_md5 = data['system_summary']['software_information']['firmware_md5'];
      this.bootloader_md5 = data['system_summary']['software_information']['bootloader_md5'];
      this.current_time = new Date(data['system_summary']['system_information']['current_time']);
      this.current_time_fix = (this.current_time).toString().substring(0, 25);
      this.system_contact = data['system_summary']['system_information']['contact'];
      this.system_description = data['system_summary']['system_information']['description'];
      this.object_id = data['system_summary']['system_information']['oid'];
      this.mac_address = data['system_summary']['system_information']['mac'];
      this.system_location = data['system_summary']['system_information']['location'];
      this.system_hostname = data['system_summary']['system_information']['host_name'];
      this.temperature_celsius = data['system_health']['temperature'];
      this.temperature_fahrenheit = data['system_health']['temperature'] * 1.8000 + 32.00;
      this.humidity = data['system_health']['humidity'];

    }));

  }
  // GET CURRENT ALARM
  getCurrentAlarm() {

    this._apiService.getCurrentAlarm().then((data) => {

      for (let i = 0; i < data.length; i++) {
        const timestamp = new Date(data[i]['timestamp']);
        this.alarm_data.push([{ 'timestamp': timestamp, 'detail': data[i]['detail'] }]);
      }

    });

  }
  // GET LATEST CONNECTION
  getLatestConnection() {

    this._apiService.getLatestConnection().then((data) => {
      this.latest_eastport = data['east'];
      this.latest_westport = data['west'];
    });

  }
  // GET LATEST FIVE CONNECTION
  getLatestFiveConnection() {

    this._apiService.getLatestFiveConnection().then((data) => {

      for (let i = 0; i < data.length; i++) {
        const timestamp = new Date(data[i]['timestamp']);
        const timestamp_fix = timestamp.toString().substring(0, 25);
        this.connection_data.push([{ 'timestamp': timestamp_fix, 'pair': data[i]['east'] + ',' + data[i]['west'] }]);
      }

    });


  }
  // GET LASTEST TASK TIME
  getLatestTaskTime() {

    this._apiService.getOperationTaskTime().then((data) => {

      // SET VARIABLE OF TIMES
      const created_time: Date = new Date(data['created_time']);
      const finished_time: Date = new Date(data['finished_time']);
      const created_time_hours: number = created_time.getHours();
      const created_time_minutes: number = created_time.getMinutes();
      const created_time_seconds: number = created_time.getSeconds();
      const finished_time_hours: number = finished_time.getHours();
      const finished_time_minutes: number = finished_time.getMinutes();
      const finished_time_seconds: number = finished_time.getSeconds();

      // CALCULATION TIME
      const average_hours: number = finished_time_hours - created_time_hours;
      let average_minutes: number = finished_time_minutes - created_time_minutes;
      let average_seconds: number = finished_time_seconds - created_time_seconds;

      if (average_minutes > 0 && average_seconds < 0) {
        average_minutes = average_minutes - 1;
        average_seconds = (finished_time_seconds + 60) - created_time_seconds;

      } else if (average_minutes <= 0 && average_seconds < 0) {
        average_minutes = 0;
        average_seconds = Math.abs(average_seconds);

      } else if (average_minutes <= 0 && average_seconds < 0) {
        average_minutes = 0;
      }

      if (average_minutes === 0 && average_seconds !== 0) {
        this.operation_tasktime = average_seconds + ' sec';

      } else if ((average_minutes === 0 && average_seconds === 0)
        || ((average_minutes === undefined && average_seconds === undefined))) {

        this.operation_tasktime = 'empty task';

      } else {
        this.operation_tasktime = average_minutes + ' min ' + average_seconds + ' sec';
      }

    });

  }
  // GET OPERATION SEQUENCE
  getOperationSequence() {

    this._apiService.getOperationSequence().then((data) => {

      this.operation_taskcompleted = data['operation_task_completed'] + '%';

    });

  }
  // GET SYSTEM UPTIME
  getSystemUptime() {

    this._apiService.getSystemUptime().then((data => {

      if (data['days'] > 0) {
        this.system_uptime = data['days'] + ' day(s), ' + data['hours'] + ' hr(s), ' + data['minutes'] + ' min(s)';
      } else if (data['days'] <= 0 && data['hours'] > 0) {
        this.system_uptime = data['hours'] + ' hr(s), ' + data['minutes'] + ' min(s)';
      } else {
        this.system_uptime = data['minutes'] + ' min(s)';
      }

    }));

  }

}
