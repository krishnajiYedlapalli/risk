import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MembersService } from 'src/app/services/members.service';
import { MAWSService } from '../../../../services/maws.service';


@Component({
  selector: 'app-msw-members',
  templateUrl: './msw-members.component.html',
  styleUrls: ['./msw-members.component.scss']
})
export class MswMembersComponent implements OnInit {
members:any;
displayPopup:boolean=false;
nonMembers:any []=[];
changeRolePopup:boolean=false;
specificMemberDetails:any;
@ViewChild('dv') el:ElementRef;
  constructor(private membersService:MembersService, private mawsService:MAWSService) {
     
   }
 display:any=null;
selectedMember:any=false;



  ngOnInit() {
    if (!this.membersService.getMembers()) {
      this.membersService.loadMembers().subscribe(data => {
        this.membersService.setMembers(data);
        this.members = this.membersService.getMembers();
        console.log(this.members)
      })
    } else {
      this.members = this.membersService.membersData;
      console.log(this.members)
    }
      
    let me = this;
    document.addEventListener('click',function (event) {
      if (event.target instanceof HTMLElement){
      if (!event.target.closest('.object-popup')) {
        if (me.displayPopup) {
               me.displayPopup = false;
               me.changeRolePopup=false;
        }
      }
    }
    });
   
    this.nonMembers=this.mawsService.membersRemovedFromWorkspace;
    
  }

  menu(member){
    this.selectedMember=!this.selectedMember;
    if(this.selectedMember)
    {
      this.display=member;
    }
    else{
      this.display=null
    }
  }
  popup(data){
     this.specificMemberDetails=data;
    console.log("hi")
    this.displayPopup=!this.displayPopup;
    console.log(this.displayPopup);
    event.stopPropagation();
  }
  changeRole(){
    this.changeRolePopup=!this.changeRolePopup;
  }
  removeFromworkspace(data){
    console.log(data);
    // data.position="non"
    // delete data["Position"];
    this.mawsService.removeFromWorkspace(data);
    this.displayPopup = false;
    this.changeRolePopup=false;
  }
}
