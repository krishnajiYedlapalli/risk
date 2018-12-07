import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
declare var window:any;

@Injectable({
  providedIn: 'root'
})
export class MAWSService {

  accounts: any = [];
  specificUserAccount: any={};
  specificObjects: any;
  selectedAccount: any;
  archive:boolean;
  wsbackButtonDisplay: any;
  membersRemovedFromWorkspace:any[]=[];
selectedObjects:any;
  constructor(private http: Http) { 
  }

getWorkspaceFromServer(){
    return this.http.get('erassets/workspace.json').pipe(map((res:Response) => res.json()));
 }

 leaveWorkspaceFromServer(data){
   return this.http.delete('erassets/workspace.json',data).pipe(map((res:Response) => res.json()));
 }

 getLeaveWorkspaceDialogText(){
   return this.http.get('erassets/workspaceDialogText.json').pipe(map((res:Response) => res.json()));
 }

 getAccounts(){
  return this.accounts;
}
getSpecificUserAccount(){
  return this.specificUserAccount;
}

deleteAccount(accountId:number){
  return this.http.get('erassets/deleteworkspace.json/?'+accountId).pipe(map((res:Response) => res.json()));
  //return this.http.post(window.origin+'/api/eigenWorkSpaces/removeAccountAccess',{'accountId':accountId}).pipe(map((res:Response) => res.json()));
}

loadAccounts(userId: number){
  return this.http.get('erassets/workspaces.json/?'+userId).pipe(map((res:Response) => res.json()));
  //return this.http.post(window.origin+'/api/eigenWorkSpaces/getAccountList',{}).pipe(map((res:Response) => res.json()));
}

setAccounts(accounts:any){
 this.accounts = accounts;
 if (this.accounts.length >0){
   this.setSelectedAccount(this.accounts[0]);
 }
}

setSpecificUserAccount(specificUser){
  this.specificUserAccount=specificUser;
}
saveEditedUserInfo(userNewData:Object){
  return this.http.get('erassets/editedUserInfo.json').pipe(map((res:Response) => res.json()));
}

getManageSpecificWorkspaceActivities(){
  return this.http.get('erassets/msw-activity.json').pipe(map((res:Response) => res.json()));
}

getManageSpecificWorkspaceObjects(){
  return this.http.get('erassets/manage-workspace-objects.json').pipe(map((res:Response) => res.json()));
}

getSpecificObjects(){
  return this.specificObjects;
  }

setSpecificObjects(objData:any){
  this.specificObjects=objData
}

shareSelectedObject(){
  return this.http.get('erassets/sharedStatus.json').pipe(map((res:Response) => res.json()));
}

setSelectedAccount(selectedAccount:any){
     this.selectedAccount=selectedAccount;
}

getSelectedAccount(){
    return this.selectedAccount;
}

setArchiveWorkspace(archive:boolean){
  this.archive = archive;
}
getMswCopiedObject(copiedObjectName:string,selectedWorkspace:string){
  return this.http.get('erassets/copyObjectStatus.json').pipe(map((res:Response) => res.json()));
}

getArchiveWorkspace(){
  return this.archive;
}

setBackButton(backButtonDisplay){
  this.wsbackButtonDisplay=backButtonDisplay
  }
  
  getBackButton(){
  return this.wsbackButtonDisplay;
  }
  
  removeFromWorkspace(data){
    this.membersRemovedFromWorkspace.push(data)
    console.log(this.membersRemovedFromWorkspace)
  }
  // msw objects
 

  SelectedObjectsforOperations(objects){
    this.selectedObjects=objects;
  }

}




