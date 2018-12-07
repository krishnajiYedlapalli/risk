import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-new-workspace',
  templateUrl: './create-new-workspace.component.html',
  styleUrls: ['./create-new-workspace.component.scss']
})
export class CreateNewWorkspaceComponent implements OnInit {
  
  WorkspaceName:any='';
  WorkspaceDescription:any='';
  cities:any[];
  addmembers: boolean =false;

  constructor( private route: Router,
    private _location: Location) { 
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
  }

  
  ngOnInit() {
  }

  addMembersToWorkspace(){
    this.route.navigate(['/add-ws-members']);
  }
  backClicked() {
    this._location.back();
  }
}
