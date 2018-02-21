import { Component, OnInit, ViewChild } from '@angular/core';

// Api Service
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // ROBOT INFORMATION
  available_port: string;
  robot_status: string;
  system_uptime: string;
  total_connected_pair: number;

  // SYSTEM HEALTH
  temperature_celsius: number;
  temperature_fahrenheit: number;
  humidity: number;

  // PROTOCAL SERVICE STATUS
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
