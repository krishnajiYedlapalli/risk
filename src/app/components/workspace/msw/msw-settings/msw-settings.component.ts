import { Component, OnInit } from '@angular/core';
import { MessagesService } from "../../../../services/messages.service";
// import { Router } from '@angular/router';
import { MAWSService } from '../../../../services/maws.service';
import { StatusService } from '../../../../services/status.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-msw-settings',
  templateUrl: './msw-settings.component.html',
  styleUrls: ['./msw-settings.component.scss']
})
export class MswSettingsComponent implements OnInit {
  userConfirmation: any;
  display: boolean = false;
  transfer: boolean;
  transferOwnerData: any;
  userChoice: any;
  archive: boolean = false;
  unArchiveStatus: any;
  constructor(private messagesService: MessagesService,
    private workspaceService: MAWSService,
    private statusservice: StatusService,
    private messageService: MessageService,
    private route:Router
    ) { }

  ngOnInit() {
    this.userConfirmation = this.messagesService.getArchiveWorkSpaceUserConfirmationObject();
    this.transferOwnerData = this.messagesService.getTransferOwnerShipObject();
    // this.userConfirmation = this.messageService.getDeleteWorkSpaceUserConfirmationObject();
  }
  archiveThisWorkspace() {
    this.display = true;
    // debugger;
    // if (this.workspaceService.getArchiveWorkspace()) {
    //   debugger;
    //   this.userConfirmation = this.messagesService.getDeleteWorkSpaceUserConfirmationObject();
    // }
  }
  unArchiveThisWorkspace() {

    if (!this.statusservice.getUnarchiveStatus()) {
      this.statusservice.loadStatus().subscribe(data => {
        this.statusservice.setUnarchiveStatus(data);
        this.unArchiveStatus = this.statusservice.getUnarchiveStatus().status1;
        this.display = false;
        this.workspaceService.setArchiveWorkspace(false);
      })
    } else {
      this.unArchiveStatus = this.statusservice.getUnarchiveStatus().status1;
      this.display = false;
      this.workspaceService.setArchiveWorkspace(false);
    }
    this.userConfirmation = this.messagesService.getArchiveWorkSpaceUserConfirmationObject();
  }
  deleteWorkspace() {
    this.userConfirmation = this.messagesService.getDeleteWorkSpaceUserConfirmationObject();
    this.display = true;
  }
  transferOwner() {
    this.transfer = true;
  }
  closePopupDisplay(event) {
    this.display = false;
    if(event == true){
      if(this.userConfirmation.title=="Delete Workspace"){
        this.showTopCenter();
        this.route.navigate(['/manage-all-your-workspaces']);
      }
      this.userConfirmation = this.messagesService.getDeleteWorkSpaceUserConfirmationObject();
      
    }
  }
  closePopupTransferDisplay(event) {
    this.transfer = event;
  }
  showTopCenter() {
    debugger;
    this.messageService.add({ key: 'tc', detail: 'You have succsessfully Deleted the Workspace', life: 20000 });
  }
}
