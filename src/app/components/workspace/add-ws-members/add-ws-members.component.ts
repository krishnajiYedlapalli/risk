import { Component, OnInit } from '@angular/core';
import {MembersService} from '../../../services/members.service';
import {Router } from '@angular/router';
import { MessagesService } from '../../../services/messages.service';
// import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-add-ws-members',
  templateUrl: './add-ws-members.component.html',
  styleUrls: ['./add-ws-members.component.scss']
})
export class AddWsMembersComponent implements OnInit {
  
  moreDetailsPopup:boolean=false;
  popupDetails:any;
  members:any;
  workspaceMembers:any=[];
  loginUserData:any={}
  userInput:any = '';
  display: boolean;
  userConfirmation: any = {};
 imagePath:any= "erassets/Images/ic_addperson_white.svg";
  constructor(private membersService: MembersService,
    private route: Router,
    private messagesService:MessagesService) {

    //   this.popupDetails=[
    //     {label:"Remove",value:'Remove'},
    //     {label:"Change Role",value:'Change Role'},
    //     {label:"View Activity",value:'View Activity'}
    //   ]
     }

  ngOnInit() {
    this.userConfirmation = this.messagesService.getInviteViaMailObject();
console.log(this.userConfirmation);
    let me = this;
    if (me.popupDetails){
    document.addEventListener('click',function (event) {
      me.popupDetails= null;
 
      // if (!event.target.closest('.more-details-popup') && !event.target.closest('app-add-ws-members')) {
        console.log("hdfghdfhds");
     
      });// }
    }
  
    this.loginUserData.MemberName = "Name";
    this.loginUserData.Designation = "Name";
    this.loginUserData.ImageUrl = "erassets/Images/MembersImages/kiwi.svg";
    this.loginUserData.Position = "Workspace Admin";
    this.workspaceMembers.push(this.loginUserData);  
     
   
    if (!this.membersService.getMembers()) {
      this.membersService.loadMembers().subscribe(data => {
        this.membersService.setMembers(data);
        this.members = this.membersService.getMembers();
      })
    } else {
      this.members = this.membersService.membersData;
    }
  }
  
  addMember(data:any,index){
    this.workspaceMembers.push(data);
    this.members.splice(index,1);
  }
  createNewWorkspace(){
    this.route.navigate(['/create-new-workspace'])
  }
  returnUserOption(entryData) {
    this.userInput = entryData
  }
  invitePeopleViaMail(){
    this.display=true;
  }

  closePopupDisplay(event){
    this.display=event;
  }
  creationComplete(){
    this.route.navigate(['/mws-activity'])
  }

  moreDetails(data){
    this.popupDetails=data;
    console.log(data)
    this.moreDetailsPopup=!this.moreDetailsPopup
  }
}
