import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MessagesService } from '../../../services/messages.service';
@Component({
  selector: 'app-create-workspace-button',
  templateUrl: './create-workspace-button.component.html',
  styleUrls: ['./create-workspace-button.component.scss']
})
export class CreateWorkspaceButtonComponent implements OnInit {

@Output() createWorkSpaceButtonAlert=new EventEmitter();
createWorkspace:any;
  constructor(private messagesService : MessagesService ) { }

  ngOnInit() {

    if (!this.messagesService.getMessages()){
      this.messagesService.loadMessages().subscribe(data=>{
        this.messagesService.setMessages(data);
        this.createWorkspace = this.messagesService.getMessages().createWorkspace;
       })
  }else{
    this.createWorkspace = this.messagesService.getMessages().createWorkspace;
  }
    
  }

  getAlertOnClick(){
    this.createWorkSpaceButtonAlert.emit('yet to be implemented');
  }
  

}
