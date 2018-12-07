import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages :any;
  constructor(private http: Http) { 
    
  }

  loadMessages(){
    return this.http.get('erassets/messages.json').pipe(map((res:Response) => res.json()));
  }

 getMessages(){
   return this.messages;
 }

 setMessages(data:any){
  this.messages=data;
 }

 getLeaveWorkSpaceUserConfirmationObject() {
  let userConfirmation:any ={};
  userConfirmation.title = this.messages.leaveWorkSpaceTitle;
  userConfirmation.primaryMessage = this.messages.leaveWorkSpacePrimaryMessage;
  userConfirmation.secondaryMessage = this.messages.leaveWorkSpaceSecondaryMessage;
  userConfirmation.primaryButton = this.messages.leaveWorkSpacePrimaryButton;
  userConfirmation.secondaryButton = this.messages.leaveWorkSpaceSecondaryButton;
  return userConfirmation;
}
getArchiveWorkSpaceUserConfirmationObject() {
  let userConfirmation:any ={};
  userConfirmation.buttonTitle = this.messages.archiveWorkSpaceButtonTitle;
  userConfirmation.title = this.messages.archiveWorkSpaceTitle;
  userConfirmation.primaryMessage = this.messages.archiveWorkSpacePrimaryMessage;
  userConfirmation.alertStart = this.messages.archiveWorkSpaceAlertStarts;
  userConfirmation.alert1 = this.messages.archiveWorkSpaceAlertMesage1;
  userConfirmation.alert2 = this.messages.archiveWorkSpaceAlertMesage2;
  userConfirmation.alert3 = this.messages.archiveWorkSpaceAlertMesage3;
  userConfirmation.alertEnd = this.messages.archiveWorkSpaceAlertEnds;
  userConfirmation.secondaryMessage = this.messages.archiveWorkSpaceSecondaryMessage;
  userConfirmation.secondaryButton = this.messages.archiveWorkSpaceSecondaryButton;
  userConfirmation.primaryButton = this.messages.archiveWorkSpacePrimaryButton;
  return userConfirmation;
}

getInviteViaMailObject() {
  let userInformation:any ={};
  userInformation.title = this.messages.inviteViaEmailTitle;
  userInformation.message = this.messages.inviteViaEmailMessage;
  userInformation.warningMessage = this.messages.inviteViaEmailWarningMessage;
  userInformation.primarySuccessButton = this.messages.inviteViaEmailPrimarySuccessButton;
  userInformation.primaryCancelButton = this.messages.inviteViaEmailPrimaryCancelButton;
  userInformation.secondarySuccessButton = this.messages.inviteViaEmailSecondarySuccessButton;
  userInformation.secondaryCancelButton = this.messages.inviteViaEmailSecondaryCancelButton;
  return userInformation;
}

getTransferOwnerShipObject() {
  let information:any ={};
  information.title = this.messages.transferOwnershiTitle;
  information.message = this.messages.transferOwnershiMessage;
  information.primaryButton = this.messages.transferOwnershipPrimaryButton;
  information.secondaryButton = this.messages.transferOwnershipSecondaryButton;
  return information;
}
getDeleteWorkSpaceUserConfirmationObject() {
  let userConfirmation:any ={};
  userConfirmation.unArchiveButtonTitle = this.messages.unArchiveWorkSpaceButtonTitle;
  userConfirmation.unArchiveMessage = this.messages.unArchiveWorkSpaceMessage;
  userConfirmation.deleteButtonTitle = this.messages.deleteWorkSpaceButtonTitle;
  userConfirmation.title = this.messages.deleteWorkSpaceTitle;
  userConfirmation.primaryMessage = this.messages.deleteWorkSpacePrimaryMessage;
  userConfirmation.alertStart = this.messages.deleteWorkSpaceAlertStarts;
  userConfirmation.alert1 = this.messages.deleteWorkSpaceAlertMesage1;
  userConfirmation.alert2 = this.messages.deleteWorkSpaceAlertMesage2;
  userConfirmation.secondaryMessage = this.messages.deleteWorkSpaceSecondaryMessage;
  userConfirmation.secondaryButton = this.messages.deleteWorkSpaceSecondaryButton;
  userConfirmation.primaryButton = this.messages.deleteWorkSpacePrimaryButton;
  return userConfirmation;
}
}
