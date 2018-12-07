import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MAWSService } from '../../../../../services/maws.service';
@Component({
  selector: 'app-msw-share-object-popup',
  templateUrl: './msw-share-object-popup.component.html',
  styleUrls: ['./msw-share-object-popup.component.scss']
})
export class MswShareObjectPopupComponent implements OnInit {
  @Input() sharePopUpDisplay: boolean;
  @Input() selectedObjectData: any;
  @Output() sharePopUpDisplayClose = new EventEmitter();
  invitePeople: boolean = true;
  isSharing: boolean;
  isSharingDone: boolean;

  constructor(private MAWSService: MAWSService) { }

  ngOnInit() {
  }

  cancelSharing() {
    this.sharePopUpDisplay = false;
    this.sharePopUpDisplayClose.emit(false);
  }

  copyUrl(inputUrl){
    inputUrl.select();
    document.execCommand('copy');
    inputUrl.setSelectionRange(0, 0);
    alert(inputUrl.value +" copied successfully")
  }

  shareTheSelectedObject(userMail) {
    this.isSharing = true;
    this.MAWSService.shareSelectedObject().subscribe((data) => {
      if (data.status) {
        this.isSharingDone = true;
        this.isSharing = false;
        this.invitePeople = false;
      }
      else {
        this.isSharingDone = false;
        this.isSharing = true;
        this.invitePeople = false;
      }
    }
    )
  }

  doneWithSharing() {
    if(this.isSharingDone==true){
    this.isSharingDone = false;
    this.isSharing = false;
    this.invitePeople = true;
    }
    else{
      this.sharePopUpDisplay = false;
    this.sharePopUpDisplayClose.emit(false);
    }
  }

}