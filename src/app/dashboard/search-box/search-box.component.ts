import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
  inputs: ['srcImageSearch', 'srcImageCancelSearch']
})
export class SearchBoxComponent implements OnInit {

  constructor() { }

  srcImageSearch: string | null = null;
  srcImageCancelSearch: string | null = null;

  ngOnInit(): void {
  }

}
