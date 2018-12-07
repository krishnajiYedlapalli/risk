import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.scss']
})
export class SideNavBarComponent implements OnInit {
  baseUrl: string;
  eigenExpress:string;
  exposureAnalytics:string;
  programBuilder:string;
  technicalPricing:string;
  eigenProfile:string;
  dashboards:string;
  reports:string;
  eventModelManager:string;
  damageModelManager:string;

  userChoiceTitle:any;

  eigenPrismHomeComingTitle:any;
  eigenExpressTitle:any;
  eigenAlertComingTitle:any;
  exposureAnalyticsTitle:any;
  programBuilderTitle:any;
  technicalPricingTitle:any;
  eigenProfileTitle:any;
  dashboardsTitle:any;
  reportsTitle:any;
  eventModelManagerTitle:any;
  damageModelManagerTitle:any;
  inLineHelp:any;


  constructor(private userService: UsersService,
    private messagesService : MessagesService ) { }

  ngOnInit() {
    this.baseUrl = this.userService.getBaseUrl();
    this.eigenExpress = this.baseUrl + "eigenExpress";
    this.exposureAnalytics = this.baseUrl + "exposureAnalytics";
    this.programBuilder = this.baseUrl + "programBuilder";
    this.technicalPricing = this.baseUrl + "technicalPricing";
    this.eigenProfile = this.baseUrl + "profiles";
    this.dashboards = this.baseUrl + "dashboards";
    this.reports = this.baseUrl + "reports";
    this.eventModelManager = this.baseUrl + "eventModelManager";
    this.damageModelManager = this.baseUrl + "damageModelManager";
    if (!this.messagesService.getMessages()){
        this.messagesService.loadMessages().subscribe(data=>{
          this.messagesService.setMessages(data);
          this.assignTitles();
         })
    }else{
      this.assignTitles();
    }
  


  }
  
  assignTitles(){
    this.eigenPrismHomeComingTitle = this.messagesService.getMessages().eigenPrismHomeComingTitle;
    this.eigenExpressTitle = this.messagesService.getMessages().eigenExpressTitle;
    this.eigenAlertComingTitle = this.messagesService.getMessages().eigenAlertComingTitle;
    this.exposureAnalyticsTitle = this.messagesService.getMessages().exposureAnalyticsTitle;
    this.programBuilderTitle = this.messagesService.getMessages().programBuilderTitle;
    this.technicalPricingTitle = this.messagesService.getMessages().technicalPricingTitle;
    this.eigenProfileTitle = this.messagesService.getMessages().eigenProfileTitle;
    this.dashboardsTitle = this.messagesService.getMessages().dashboardsTitle;
    this.reportsTitle = this.messagesService.getMessages().reportsTitle;
    this.eventModelManagerTitle = this.messagesService.getMessages().eventModelManagerTitle;
    this.damageModelManagerTitle = this.messagesService.getMessages().damageModelManagerTitle;
    this.inLineHelp = this.messagesService.getMessages().inLineHelp;
  }
  
}
