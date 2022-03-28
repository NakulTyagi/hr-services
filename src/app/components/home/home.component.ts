import { Component, OnInit } from '@angular/core';
import { Partner_Associates, SERVICES_LIST } from '../data/hr.data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  partnerAssociates = Partner_Associates;
  SERVICES_LIST = SERVICES_LIST;

  constructor() { }

  ngOnInit(): void {
  }

}
