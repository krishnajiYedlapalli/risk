import { Component, OnInit, ViewChild } from '@angular/core';
import { MessagesService } from '../../../services/messages.service';
import { Router } from '@angular/router';
import {MAWSService} from '../../../services/maws.service';
declare var $:any;

@Component({
  selector: 'app-maws',
  templateUrl: './maws.component.html',
  styleUrls: ['./maws.component.scss']
})
export class MAWSComponent implements OnInit {
  
  workspaces: any;
  manageAllYourWorkspaces: any;
  
  constructor(
    private messagesService: MessagesService,
    private route:Router,
    private workspaceService:MAWSService) {
  }

  
  ngOnInit() {
    //messages Service Data
    if (!this.messagesService.getMessages()) {
      this.messagesService.loadMessages().subscribe(data => {
        this.messagesService.setMessages(data);
        this.workspaces = this.messagesService.getMessages().workspaces;
        this.manageAllYourWorkspaces = this.messagesService.getMessages().manageAllYourWorkspaces;
      })
    } else {
      this.workspaces = this.messagesService.getMessages().workspaces;
      this.manageAllYourWorkspaces = this.messagesService.getMessages().manageAllYourWorkspaces;
    }
  }



  createWorkSpaceButtonAlert(alertMessage) {
    alert(alertMessage);
  }

  
  backToManageWorkSpaces(){
    // this.manageSpecificWorkSpaceValue=false;
    this.route.navigate(['/manage-all-your-workspaces']);
    this.workspaceService.setBackButton(false);
  }
  createNewWorkspace(){
    this.route.navigate(['/create-new-workspace'])
  }

  
}
