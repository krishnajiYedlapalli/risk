import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-msw-object-handle-popup',
  templateUrl: './msw-object-handle-popup.component.html',
  styleUrls: ['./msw-object-handle-popup.component.scss']
})
export class MswObjectHandlePopupComponent implements OnInit {
  @Input() selectedObjectForControls:any
  @Output() selectedControl=new EventEmitter();
  sharePopUpDisplay:boolean;
  makeACopyPopupDisplay: any;

  constructor() { }

  ngOnInit() {
  }

  shareSelectedObject(){
this.sharePopUpDisplay=true;
  }

  sharePopUpDisplayClose(event){
    this.sharePopUpDisplay=event;
  }

  copySelectedObject(){
    this.makeACopyPopupDisplay=true;
  }

  makeCopyPopupClose(event){
    this.makeACopyPopupDisplay=event;
  }

  clickedControl(control){
  this.selectedControl.emit(control);
  }
}
