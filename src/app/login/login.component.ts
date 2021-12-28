import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  @ViewChild("tLo") loginField!: ElementRef;
  @ViewChild("tHa") passField!: ElementRef;

  ngOnInit(): void {
  }

  testLogin(): void {
    console.log(this.loginField.nativeElement);
    if (this.loginField.nativeElement.value == "test@11.pl" && this.passField.nativeElement.value == "test") {
      
      this.router.navigate(["/dashboard"]);
    }
  }

}
