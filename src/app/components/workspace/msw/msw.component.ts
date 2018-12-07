import { Component, OnInit } from '@angular/core';
import { MAWSService } from '../../../services/maws.service';
@Component({
  selector: 'app-msw',
  templateUrl: './msw.component.html',
  styleUrls: ['./msw.component.scss']
})
export class MSWComponent implements OnInit {

  specificUserData = this.MAWSService.getSpecificUserAccount();
  allAccount:any[]=this.MAWSService.getAccounts();
  editable: boolean;
  isSaveAndCancel: boolean;
  previousAccountdescription: any;
  previousAccountname: any;


  constructor(private MAWSService: MAWSService) { }

  ngOnInit() {
    this.previousAccountname = this.specificUserData.account_name;
    this.previousAccountdescription = this.specificUserData.account_description;
  }

  editUserDetails() {
    this.editable = true;
    this.isSaveAndCancel = true;
  }

  saveUserInfo(userNewData) {
    this.MAWSService.saveEditedUserInfo(userNewData).subscribe((data) => {
      if (data.status) {
        alert('Saved Successfully');
        this.previousAccountname=userNewData.account_name;
        this.previousAccountdescription=userNewData.account_description;
      } else {
        alert('not able to save the account');
      }
    },
      error => {
        //error handling
      })
    
  }

  cancelSavingUserInfo() {
    var currentAccount = {
      account_name: this.previousAccountname,
      account_description: this.previousAccountdescription
    }
    this.specificUserData = currentAccount;
    this.editable = false;
    this.isSaveAndCancel = false;
  }

}
