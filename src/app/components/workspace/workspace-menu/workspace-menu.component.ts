
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MAWSService } from '../../../services/maws.service';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { MessagesService } from '../../../services/messages.service';
import { BrandLogoService } from '../../../services/brand-logo.service';
import { ClassField } from '@angular/compiler';

declare var window:any;
declare var $:any;

@Component({
  selector: 'app-workspace-menu',
  templateUrl: './workspace-menu.component.html',
  styleUrls: ['./workspace-menu.component.scss']
})
export class WorkspaceMenuComponent implements OnInit {
  @Input() userId;
  @Output() selectedAccount = new EventEmitter();
  @Input() isWebElement:boolean = false;

  actualWorkSpaces: any[];
  workSpaces: any[];
  selectedObject: any;
  showWorkSpacesOptions: boolean = false;
  workSpaceLabel: any;
  userInput: any = '';
  brandlogourl: any;
  manageAllYourWorkspacesLabel: any;
  

  constructor(private workSpaceService: MAWSService,
              private messagesService: MessagesService,
              private route: Router,
    private userService: UsersService,
    private brandLogoService: BrandLogoService) { 
      
    }

  returnUserOption(entryData) {
    this.userInput = entryData
  }

  ngOnInit() {
    if (this.userId) {
      let user = this.userService.getUser();
      user.userId = this.userId;
      this.userService.setUser(user);
    }

    this.loadWorkSpaces();
    let me = this;
    
    document.addEventListener('click',function (event) {
      if (event.target instanceof HTMLElement){
      if (!event.target.closest('.model-menu') && !event.target.closest('app-workspace-menu')) {
        me.showWorkSpacesOptions = false;
      }
    }
    });
  }

  createWorkSpaceButtonAlert(alertMessage) {
    alert(alertMessage);
  }

  showWorkSpaceMenu(event) {
    this.showWorkSpacesOptions = true;

    if (!this.messagesService.getMessages()) {
      this.messagesService.loadMessages().subscribe(data => {
        this.messagesService.setMessages(data);
    this.manageAllYourWorkspacesLabel = this.messagesService.getMessages().manageAllYourWorkspacesLabel;

      })
    } else {
      this.manageAllYourWorkspacesLabel = this.messagesService.getMessages().manageAllYourWorkspacesLabel;

    }

    this.manageAllYourWorkspacesLabel = this.messagesService.getMessages().manageAllYourWorkspacesLabel;
    // stop the next sequence of actions
    event.stopPropagation();
  }

  loadWorkSpaces() {

    this.workSpaceService.loadAccounts(this.userService.getUser().userId)
      .subscribe(data => {
        this.workSpaceService.setAccounts(data);
        // if (this.workSpaceService.getAccounts().length > 0) {
        //   //this.selectedObject = this.workSpaceService.getAccounts()[0];
        //   // this.workSpaceService.setSelectedWsAccount(this.selectedObject);
        // }
        if (!this.messagesService.getMessages()) {
          this.messagesService.loadMessages().subscribe(data => {
            this.messagesService.setMessages(data);
            
        this.workSpaceLabel = this.messagesService.getMessages().workspaceLabel;

          })
        } else {
          this.workSpaceLabel = this.messagesService.getMessages().workspaceLabel;

        }
        if (!this.brandLogoService.getLogoUrls()) {
          this.brandLogoService.loadLogoUrls().subscribe(data => {
            this.brandLogoService.setLogoUrls(data);
            this.brandlogourl = this.brandLogoService.getLogoUrls().brandlogourl;
          })
        } else {
          this.brandlogourl = this.brandLogoService.getLogoUrls().brandlogourl;

        }
      },
        error => {
          //error handling
        }
      )
  }

  userSelectedWorkSpace(selectedData) {
    this.showWorkSpacesOptions = false;
    this.workSpaceService.setSelectedAccount(selectedData);
    this.selectedAccount.emit(selectedData);
    // this.workSpaceService.setSelectedWsAccount(this.selectedObject);
  }

  manageWorkspace() {
    this.showWorkSpacesOptions = false;
    if (this.isWebElement){
      window.isFromWebElement = true;
      window.location = 'er3.0/manage-workspace';
    }else{
      this.route.navigate(['/manage-workspace']);
    }
  }
  manageAllYourWorkspace() {
    this.showWorkSpacesOptions = false;
    if (this.isWebElement){
      window.isFromWebElement = true;
      window.location = 'er3.0/manage-all-your-workspaces';
    }else{
      this.route.navigate(['/manage-all-your-workspaces']);
    }
    //window.location = 'er3.0/manage-all-your-workspaces';
  }
  createNewWorkspace(){
    this.showWorkSpacesOptions = false;
    if (this.isWebElement){
      window.isFromWebElement = true;
      window.location = 'er3.0/create-new-workspace';
    }else{
      this.route.navigate(['/create-new-workspace']);
    }
  }
}
