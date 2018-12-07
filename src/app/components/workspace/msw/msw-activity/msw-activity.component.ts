import { Component, OnInit } from '@angular/core';
import { MAWSService } from '../../../../services/maws.service';
@Component({
  selector: 'app-msw-activity',
  templateUrl: './msw-activity.component.html',
  styleUrls: ['./msw-activity.component.scss']
})
export class MSWActivityComponent implements OnInit {
  specificWorkspaceActivities: any;
  date: Date;
  datefromAPITimeStamp: number;
  IsTodayRendered: any;
  IsYesterdayRendered: any;
  dateCategory: string;
  tempDate: any;
  constructor(private MAWSService: MAWSService) { }

  ngOnInit() {
    this.getActivitiesOfSpecificWorkspace();
  }

  getActivitiesOfSpecificWorkspace() {
    this.MAWSService.getManageSpecificWorkspaceActivities().subscribe((data) => {
      this.specificWorkspaceActivities = data;
      this.specificWorkspaceActivities.forEach(element => {
        this.CalculateDateDifferences(element);
      });
      this.specificWorkspaceActivities = this.sortWorkspaceActivities(this.specificWorkspaceActivities);
    }
    )
  }

  CalculateDateDifferences(element: any): any {
    var dateFromAPI = element.timeStamp;
    element.dateFromApi = this.getCustomDate(dateFromAPI);
    element.formattedDate = this.getFormattedDate(dateFromAPI);
    var diffObj = this.getDateDiffFromToday(new Date(dateFromAPI));
    element.daysDiff = diffObj.dateDiff;
    element.datePart = diffObj.datePart;
    element.hoursDiff = diffObj.hoursDiff;
  }


  getDateDiffFromToday(date: any) {
    var now = new Date();
    if (date.getFullYear() == now.getFullYear() && date.getMonth() == now.getMonth() && date.getDate() == now.getDate()) {
      return { hoursDiff: now.getHours() - date.getHours(), dateDiff: now.getDate() - date.getDate(), datePart: 'hours' };
    } else if (date.getFullYear() == now.getFullYear() && date.getMonth() == now.getMonth()) {
      if (now.getDate() > date.getDate()) {
        return { dateDiff: now.getDate() - date.getDate(), datePart: 'days' };
      } else {
        return { dateDiff: date.getDate() - now.getDate(), datePart: 'days' };
      }
    } else if (date.getFullYear() == now.getFullYear() && date.getMonth() != now.getMonth()) {
      if (now.getMonth() > date.getMonth()) {
        return { dateDiff: now.getMonth() - date.getMonth(), datePart: 'months' };
      } else {
        return { dateDiff: date.getMonth() - now.getMonth(), datePart: 'months' };
      }
    } else if (date.getFullYear() != now.getFullYear()) {
      return { dateDiff: now.getFullYear() - date.getFullYear(), datePart: 'years' };
    }
  }

  sortWorkspaceActivities(specificWorkspaceActivities: any): any {
    return specificWorkspaceActivities.sort(function (a, b) {
      var key1 = a.dateFromApi;
      var key2 = b.dateFromApi;

      if (key1 > key2) {
        return -1;
      } else if (key1 == key2) {
        return 0;
      } else {
        return 1;
      }
    });
  }

  getCustomDate(date: any) {
    var day = new Date(date).getDate();
    var Month = new Date(date).getMonth();
    var Year = new Date(date).getFullYear();

    return new Date(Year, Month, day);
  }

  getFormattedDate(date: any): any {
    var day = new Date(date).getDate();
    var Month = new Date(date).getMonth() + 1;
    var Year = new Date(date).getFullYear();

    return day + '-' + Month + '-' + Year;
  }
  public dateCategoryShowHide(data: any) {
    var now = new Date();
    if (data.daysDiff == 0) {
      if (this.IsTodayRendered == true) {
         false;
      }
      this.dateCategory = 'Today';
      this.IsTodayRendered = true;
      return true;
    } else if (data.daysDiff == 1) {
      if (this.IsYesterdayRendered == true) {
        return false;
      }
      this.dateCategory = 'Yesterday';
      this.IsYesterdayRendered = true;
      return true;
    } else if (data.daysDiff > 1) {
      if (this.dateCategory == data.formattedDate) {
        return false;
      }
      this.dateCategory = data.formattedDate;
      return true;
    }
  }
}
