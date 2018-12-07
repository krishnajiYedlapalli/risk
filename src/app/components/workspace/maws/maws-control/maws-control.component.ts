import { Component, OnInit } from '@angular/core';
import { MAWSService } from '../../../../services/maws.service';
import { MessagesService } from '../../../../services/messages.service';
import { UsersService } from '../../../../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-maws-control',
  templateUrl: './maws-control.component.html',
  styleUrls: ['./maws-control.component.scss']
})
export class MawsControlComponent implements OnInit {

  worksSpaces: any;
  selectedWorkSpace: any;
  userConfirmation: any = {};
  dialogBox: boolean = true;
  loggedInUserId: any;
  display: boolean = false;
  workspaces: any;
  manageAllYourWorkspaces: any;
  leaveWorkspace: any;
  manageSpecificWorkSpaceValue: boolean;
  userInput:any = '';
  selectedWsAccount: any;

  constructor(
    private workSpaceService: MAWSService,
    private userService: UsersService,
    private messagesService: MessagesService,
    private route:Router
  ) { }

  ngOnInit() {
    this.loggedInUserId = this.userService.getUser().userId;
    this.workSpaceService.loadAccounts(this.loggedInUserId)
      .subscribe(data => {
        this.workSpaceService.setAccounts(data);
        this.worksSpaces = data;
        
      },
        error => {
          //error handling
        }
      );
    let me = this;
    document.addEventListener('click',function (event) {
      if (event.target instanceof HTMLElement){
      if (!event.target.closest('.dialog-box')) {
        if (me.selectedWorkSpace) {
               me.selectedWorkSpace.show = false;
        }
      }
    }
    });
  }

  showLeaveWorkSpaceUserPopup() {
    this.display = true;
  }

  cancelOrDeleteWorkSpace(userConfirmation: boolean) {
    debugger;
    if (userConfirmation) {
      this.workSpaceService.deleteAccount(this.selectedWorkSpace.account_id)
        .subscribe(data => {
          if (data.status) {
            this.workSpaceService.setAccounts(this.workSpaceService.getAccounts().filter(item => item.account_id !== this.selectedWorkSpace.account_id));
            this.worksSpaces = this.workSpaceService.getAccounts();
            // this.workSpaceService.setSelectedWsAccount(this.worksSpaces[0])
          } else {
            alert('not able to delete the account');
            //toast to user
          }
        },
          error => {
            //error handling
          })
    }
    this.display = false;
  }

  leaveWorkSpace(account, event) {
    if (this.selectedWorkSpace) {
      this.selectedWorkSpace.show = false;
    }
    if (account.role_id != 0) {
      account.show = true;
      this.selectedWorkSpace = account;
      this.userConfirmation = this.messagesService.getLeaveWorkSpaceUserConfirmationObject();
    }
    this.leaveWorkspace = this.messagesService.getMessages().leaveWorkspace;
    event.stopPropagation();
  }

  hideLeaveWorkSpace() {
    if (this.selectedWorkSpace) {
      this.selectedWorkSpace.show = false;
    }
  }


  manageSpecificWorkSpace(SpecificUserData){
    this.workSpaceService.setSpecificUserAccount(SpecificUserData);
    // this.manageSpecificWorkSpaceValue=true;
    this.route.navigate(['/manage-all-your-workspaces/msw']);
    this.workSpaceService.setBackButton(true);
  }
  
  backToManageWorkSpaces(){
    this.manageSpecificWorkSpaceValue=false;
  }
  createNewWorkspace(){
    this.route.navigate(['/create-new-workspace'])
  }

  returnUserOption(entryData) {
    this.userInput = entryData
  }
}

