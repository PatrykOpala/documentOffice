import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  @ViewChild('nm') searchButton!: ElementRef;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
  }

}
