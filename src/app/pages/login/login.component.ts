import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GoogleSigninButtonModule} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, GoogleSigninButtonModule,],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input()
  public url!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
