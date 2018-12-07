import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StatusService } from '../../../services/status.service';
@Component({
  selector: 'app-invite-via-mail',
  templateUrl: './invite-via-mail.component.html',
  styleUrls: ['./invite-via-mail.component.scss']
})
export class InviteViaMailComponent implements OnInit {
  @Input() display: boolean;
  @Output() closePopupDisplay = new EventEmitter();
  @Input() userConfirmationData;
  warning: boolean = false;
  loader: boolean = false;
  success: boolean = false;
  mailStatus: boolean = false;
  mailFailed:boolean=false;
  memberMailId: any;
  mailAlert:boolean = false;
  reg: any;
  constructor(private statusservice: StatusService) { }

  ngOnInit() {

  }

  validateEmail(emailField) {
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (reg.test(emailField) == false) {
      this.mailAlert = true;
      return this.mailAlert;
    }
    // return true;
    if (!this.statusservice.getMailStatus()) {
      this.statusservice.loadStatus().subscribe(data => {
        this.statusservice.setMailStatus(data);
        this.warning = this.statusservice.getMailStatus().status2;
      })
    } else {
      this.warning = this.statusservice.getMailStatus().status2;
    }
  }
  
  showDialog() {
    this.display = true;
  }
  closePopup() {
    this.display = false;
    this.mailStatus = false;
    this.warning = false;
    this.closePopupDisplay.emit(false);
  }
  showWarning() {

  }
  showLoading() {
    this.loader = true;
    if (!this.statusservice.getMailStatus()) {
      this.statusservice.loadStatus().subscribe(data => {
        this.statusservice.setMailStatus(data);
        this.mailStatus = this.statusservice.getMailStatus().status1;
      })
    } else {
      this.mailStatus = this.statusservice.getMailStatus().status1;
    }
    this.loader = false;
  }


}
