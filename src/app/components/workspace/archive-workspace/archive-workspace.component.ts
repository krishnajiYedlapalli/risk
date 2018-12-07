import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MAWSService } from '../../../services/maws.service';
import { StatusService } from '../../../services/status.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-archive-workspace',
  templateUrl: './archive-workspace.component.html',
  styleUrls: ['./archive-workspace.component.scss']
})
export class ArchiveWorkspaceComponent implements OnInit {
  // display: boolean = false
  @Input() display: boolean;
  @Input() userConfirmationData: any;
  @Output() closePopupDisplay = new EventEmitter();
  // archiveWorkspace: boolean = false;
  unArchiveStatus: any;
  constructor(private workspaceService: MAWSService,
    private statusservice: StatusService,
    private route:Router) { }

  ngOnInit() {
  }
  archiveThisWorkspace() {
    if (this.userConfirmationData.title == "Delete Workspace") {
      // this.route.navigate(['/manage-all-your-workspaces']);
      
    }
    this.workspaceService.setArchiveWorkspace(true);
    this.closePopupDisplay.emit(true);
  }
  closePopup() {
    this.closePopupDisplay.emit(false);
  }
  

}
