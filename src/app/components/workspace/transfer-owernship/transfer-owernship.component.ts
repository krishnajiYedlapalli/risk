import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MembersService } from '../../../services/members.service';
import { StatusService } from '../../../services/status.service';
@Component({
  selector: 'app-transfer-owernship',
  templateUrl: './transfer-owernship.component.html',
  styleUrls: ['./transfer-owernship.component.scss']
})
export class TransferOwernshipComponent implements OnInit {

  members: any;
  userInput: any;
  selectedIndex: any;
  ownerStatus: any;
  @Input() display: boolean;
  @Input() transferOwnerData: any;
  @Output() closePopupDisplay = new EventEmitter();
  memberSelected: boolean = false;
  constructor(private membersService: MembersService,
    private statusservice: StatusService) { }

  ngOnInit() {
    if (!this.membersService.getMembers()) {
      this.membersService.loadMembers().subscribe(data => {
        this.membersService.setMembers(data);
        this.members = this.membersService.getMembers();
      })
    } else {
      this.members = this.membersService.membersData;
    }
  }
  selectMember(index) {
    this.selectedIndex = this.members.index;
    this.selectedIndex = index;
    this.memberSelected = true;
  }
  transferOwnerOfWorkspace() {
    if (!this.statusservice.getOwnerStatus()) {
      this.statusservice.loadStatus().subscribe(data => {
        this.statusservice.setOwnserStatus(data);
        this.ownerStatus = this.statusservice.getOwnerStatus().status1;
        this.closePopupDisplay.emit(false);
      })
    } else {
      this.ownerStatus = this.statusservice.getOwnerStatus().status1;
      this.closePopupDisplay.emit(false);
    }

  }
  returnUserOption(entryData) {
    this.userInput = entryData
  }

  showDialog() {
    this.display = true;
  }

  closePopup() {
    this.closePopupDisplay.emit(false);
  }
}
