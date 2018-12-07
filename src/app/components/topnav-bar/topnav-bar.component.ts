import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutSuccessComponent } from '../logout-success/logout-success.component';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-topnav-bar',
  templateUrl: './topnav-bar.component.html',
  styleUrls: ['./topnav-bar.component.scss']
})
export class TopnavBarComponent implements OnInit {

  @ViewChild(LogoutSuccessComponent) private LogoutSuccessComponent: LogoutSuccessComponent;
  baseUrl: string;
  helpCenter: string;
  logOutPopUpDisplay: boolean;
  userId:any =204;
  constructor(private router: Router,private usersService:UsersService) { }

  ngOnInit() {
    this.baseUrl=this.usersService.getBaseUrl();
    this.helpCenter=this.baseUrl+"help"
  }

  userLoggingOut() {
    this.logOutPopUpDisplay = true;
    this.LogoutSuccessComponent.logOutTimer();
    this.LogoutSuccessComponent.userLoggingOut();
  }

  simpleAlert(){
    alert('yet to be implemented')
  }
  
  selectedAccount(event){
    console.log('selected account id '+event.accountid);
 }

}
