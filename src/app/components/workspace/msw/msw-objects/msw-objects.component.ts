import { Component, OnInit, OnChanges } from "@angular/core";
import { MAWSService } from "../../../../services/maws.service";
declare var $;
@Component({
  selector: "app-msw-objects",
  templateUrl: "./msw-objects.component.html",
  styleUrls: ["./msw-objects.component.scss"]
})
export class MSWObjectComponent implements OnInit {
  specificObjectsData: any;
  exposureArray = [];
  analysisArray = [];
  programsArray = [];
  selectedObject: any;
  selectedObjectControl: any;
  userInput: any = "";
  storingMultipleData: any[] = [];
  verticalEllipses: boolean = false;
  constructor(private MAWSService: MAWSService) {}

  ngOnInit() {
    this.getObjectsFromService();
    let me = this;

    $(document).click(function(event) {
      if (!event.target.closest(".object-popup")) {
        if (me.selectedObjectControl) {
          me.selectedObjectControl.show = false;
        }
      }
    });

    $(document).click(function(event) {
      if (!event.target.closest(".list-filter")) {
        if (me.verticalEllipses) {
          me.verticalEllipses = false;
        }
      }
    });
  }


  getObjectsFromService() {
    this.MAWSService.getManageSpecificWorkspaceObjects().subscribe(data => {
      this.MAWSService.setSpecificObjects(data);
      this.specificObjectsData = this.MAWSService.getSpecificObjects();
      this.getCustomDate(data);
      this.getObjectsArray(data);
    });
  }

  getCustomDate(specificObjectsData: any) {
    specificObjectsData.forEach(element => {
      var dateFromAPI = element.timestamp;
      var day = new Date(dateFromAPI).getDate();
      var Month = new Date(dateFromAPI).getMonth() + 1;
      var Year = new Date(dateFromAPI).getFullYear();
      element.customDate = day + "-" + Month + "-" + Year;
    });
  }

  getObjectsArray(specificObjectsData: any) {
    specificObjectsData.forEach(element => {
      if (element.title == "Exposure") {
        this.exposureArray.push(element);
      } else if (element.title == "Analysis") {
        this.analysisArray.push(element);
      } else if (element.title == "Programs") {
        this.programsArray.push(element);
      }
    });
  }

  getSelectedObjectDetails(data, ele) {
    debugger
    this.selectedObject = data;
    if (this.selectedObject.sharedWith) {
      this.selectedObject.slicedShare = this.selectedObject.sharedWith.slice(
        0,
        3
      );
      this.selectedObject.leftShare =
        this.selectedObject.sharedWith.length -
        this.selectedObject.slicedShare.length;
    }
    this.mutipleSelect(data, ele); //we have to call this method here only.
    debugger
  }

  mutipleSelect(data, ele){
   debugger
    if (ele && ele.classList.contains("clicked-object")) {
      ele.classList.remove("clicked-object");
    } else {
      ele.classList.add("clicked-object");
    }

    if (this.storingMultipleData.includes(data)) {
      let indexValue = this.storingMultipleData.indexOf(data);
      this.storingMultipleData.splice(indexValue, 1);
    } else {
      this.storingMultipleData.push(data);  
    console.log(this.storingMultipleData);
    }

    if(this.storingMultipleData.length<1)
    {
      this.selectedObject = null;
    }
  
debugger
  }


  
  selectedObjectControls(data, event) {
   
    this.selectedObjectControl = data;
    this.selectedObjectControl.show = true;
    event.stopPropagation();
  }

  returnUserOption(entryData) {
    this.userInput = entryData;
  }

 

  selectedControlHandler(control){
    this.verticalEllipses=false;
    console.log(this.storingMultipleData);
    switch(control){
          case 'remove':
          this.MAWSService.SelectedObjectsforOperations(this.storingMultipleData);
          console.log(control);
          break;
          case 'archive':
          this.MAWSService.SelectedObjectsforOperations(this.storingMultipleData);
          console.log(control);
          break;
          case 'move':
          this.MAWSService.SelectedObjectsforOperations(this.storingMultipleData);
          console.log(control);
          break;
        }
  }
}
