import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-logout-success',
  templateUrl: './logout-success.component.html',
  styleUrls: ['./logout-success.component.scss']
})
export class LogoutSuccessComponent implements OnInit {
  @Input() logOutPopUpDisplay: boolean;
  isloggedOut: boolean;
  timeLeft: number;
  interval;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {

  }

  logOutTimer() {
    this.timeLeft = 5;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        if (this.isloggedOut == true) {
          window.location.href = 'https://prism.eigenrisk.com/auth/login';
          this.pauseTimer();
        }
      }
    }, 3000)
  }


  pauseTimer() {
    clearInterval(this.interval);
  }

  userLoggingOut() {
    this.loginService.userLogOut()
      .subscribe((data: any) => {
        this.isloggedOut = true;
      },
        error => {
          console.log(error);
          this.isloggedOut = true;
        }
      )
  }

  logOutOnPopupLinkClick() {
    if (this.isloggedOut == true) {
      window.location.href = 'https://prism.eigenrisk.com/auth/login';
    }
  }
 
}
