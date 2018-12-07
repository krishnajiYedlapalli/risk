import { Component, OnInit,DoCheck,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit,DoCheck {
  
  @Output()returnUserOption = new EventEmitter();
  oldUserOption:any='';
  userOption:any='';

  constructor() { }

  ngOnInit() {
  }
  
  ngDoCheck(){
    if ( this.oldUserOption != this.userOption ){
      this.returnUserOption.emit(this.userOption);
    }
    this.oldUserOption = this.userOption;
  }

}
