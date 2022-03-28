import { Component, OnInit } from '@angular/core';
import { Partner_Associates, SERVICES_LIST } from '../data/hr.data';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent implements OnInit {
  partnerAssociates = Partner_Associates;
  SERVICES_LIST = SERVICES_LIST;
  constructor() { }

  ngOnInit(): void {
  }

}
