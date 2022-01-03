import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-list-item',
  templateUrl: './file-list-item.component.html',
  styleUrls: ['./file-list-item.component.css']
})
export class FileListItemComponent implements OnInit {

  @Input() fName: string = "";
  @Input() fNameFirstLetter: string = "";

  constructor() { }

  ngOnInit(): void {
    if (this.fName !== "") {
      this.fNameFirstLetter = this.fName[0];
    }
  }

}
