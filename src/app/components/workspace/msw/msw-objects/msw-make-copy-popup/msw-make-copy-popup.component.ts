import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MAWSService } from '../../../../../services/maws.service';
import { SelectItemGroup } from 'primeng/api';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-msw-make-copy-popup',
  templateUrl: './msw-make-copy-popup.component.html',
  styleUrls: ['./msw-make-copy-popup.component.scss']
})
export class MswMakeCopyPopupComponent implements OnInit {
  @Input() makeACopyPopupDisplay: boolean;
  @Output() makeCopyPopupClose = new EventEmitter();
  @Input() selectedObjectData;
  copiedObjectName: string;
  selectedWorkspace: string;
  dataStatus: any;
  cars: { label: string; value: string; }[];
  workspaceList = [];

  constructor(private workspaceService: MAWSService, private messageService: MessageService) {
    this.workspaceService.getAccounts().forEach(element => {
      this.workspaceList.push({
        label: element.account_name, value: element.account_name
      })
    });
  }

  ngOnInit() {
  }

  copySelectedObject(copiedObjectName, selectedWorkspace) {
    this.workspaceService.getMswCopiedObject(copiedObjectName, selectedWorkspace).subscribe((data) => {
      if (data.status == true) {
        debugger;
        this.makeACopyPopupDisplay = false;
        this.makeCopyPopupClose.emit(false);
        this.addSingle();
      }
      else {
        alert('not able to copy the object');
        //toast to user
      }
    },
      error => {
        //error handling
      }
    )
  }

  hideDialog() {
    this.makeACopyPopupDisplay = false;
    this.makeCopyPopupClose.emit(false);
  }

  addSingle() {
    this.messageService.add({ severity: 'success', summary: 'Successfully copied the object' });
  }

}
