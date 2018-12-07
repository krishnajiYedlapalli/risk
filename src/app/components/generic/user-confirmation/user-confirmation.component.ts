import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-confirmation',
  templateUrl: './user-confirmation.component.html',
  styleUrls: ['./user-confirmation.component.scss']
})
export class UserConfirmationComponent implements OnInit {
  @Input() display:boolean;
  @Input() showCancelIcon:boolean;
  @Output() status=new EventEmitter();
  @Input() userConfirmationData;

  constructor() { 
  }

  ngOnInit() {
  }

  hideDialog(){
    this.display=false;
    this.status.emit(false);
  }

  deleteWorkSpace(){
    this.display=false;
    this.status.emit(true)
  }
  
}
