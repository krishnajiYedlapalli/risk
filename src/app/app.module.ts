import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// For angular elements
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';
import { Injector } from '@angular/core';

import { UsersService } from './services/users.service';
import { AppComponent } from './app.component';




//import statements for workspace menu
import { RouterModule, Routes } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';
import { HttpModule } from '@angular/http';
import { WorkSpacesPipe } from './pipes/workspaces.pipe';
import { MemberPipe } from './pipes/members.pipe';
import {ObjectPipe} from './pipes/objects.pipe';
// create new workspace related imports.


import { MAWSComponent } from './components/workspace/maws/maws.component';
import { MSWComponent } from './components/workspace/msw/msw.component';
import { MSWActivityComponent } from './components/workspace/msw/msw-activity/msw-activity.component';
import { MSWObjectComponent } from './components/workspace/msw/msw-objects/msw-objects.component';
import { WorkspaceMenuComponent } from './components/workspace/workspace-menu/workspace-menu.component';
import { UserConfirmationComponent } from './components/generic/user-confirmation/user-confirmation.component';
import { ManageWorkspaceComponent } from './components/workspace/manage-workspace/manage-workspace.component';
import { CreateWorkspaceButtonComponent } from './components/generic/create-workspace-button/create-workspace-button.component';
import { SearchBoxComponent } from './components/generic/search-box/search-box.component';
import { CreateNewWorkspaceComponent } from './components/workspace/create-new-workspace/create-new-workspace.component';
import { AddWsMembersComponent } from './components/workspace/add-ws-members/add-ws-members.component';
import { ArchiveWorkspaceComponent } from './components/workspace/archive-workspace/archive-workspace.component';
import { InviteViaMailComponent } from './components/generic/invite-via-mail/invite-via-mail.component';
import { MswObjectHandlePopupComponent } from './components/workspace/msw/msw-objects/msw-object-handle-popup/msw-object-handle-popup.component';
import { MswShareObjectPopupComponent } from './components/workspace/msw/msw-objects/msw-share-object-popup/msw-share-object-popup.component';
import { EigenExposureComponent } from './components/eigen-exposure/eigen-exposure.component';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TopnavBarComponent } from './components/topnav-bar/topnav-bar.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { LogoutSuccessComponent } from './components/logout-success/logout-success.component';
import {ButtonModule} from 'primeng/button';
import { MswMakeCopyPopupComponent } from './components/workspace/msw/msw-objects/msw-make-copy-popup/msw-make-copy-popup.component';
import { MswSettingsComponent } from './components/workspace/msw/msw-settings/msw-settings.component';
import {CardModule} from 'primeng/card';
import { TransferOwernshipComponent } from './components/workspace/transfer-owernship/transfer-owernship.component';
import { MawsControlComponent } from './components/workspace/maws/maws-control/maws-control.component';



import {DataViewModule} from 'primeng/dataview';
import{MswMembersComponent} from './components/workspace/msw/msw-members/msw-members.component' 
import {InputTextareaModule} from 'primeng/inputtextarea';
const routes: Routes = [
  {
    path: 'eigen',
    component: HomePageComponent,
    children: [
      { path: '', redirectTo: 'accountManager', pathMatch: 'full' },
      { path: 'eigenExposure', component: EigenExposureComponent },

    ]
  },
  {
    path: 'auth/login', component: LoginComponent
  },
  { path: 'manage-all-your-workspaces', 
    component: MAWSComponent ,
    children:[
      { path: '', redirectTo: 'maws-controls', pathMatch: 'full' },
      {path:'maws-controls',component:MawsControlComponent},
      {path:'msw',component:MSWComponent}
  ]
},
  { path: 'manage-workspace', component: ManageWorkspaceComponent },
  { path: 'create-new-workspace', component: CreateNewWorkspaceComponent },
  { path: 'add-ws-members', component: AddWsMembersComponent },
  { path: 'invite-via-mail', component: InviteViaMailComponent },
  { path:'archive-this',component:ArchiveWorkspaceComponent}
  // { path: 'mws-activity', component:ManageSpecificWorkspaceComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EigenExposureComponent,
    LoginComponent,
    HomePageComponent,
    WorkspaceMenuComponent,
    MAWSComponent,
    UserConfirmationComponent,
    TopnavBarComponent,
    SideNavBarComponent,
    ManageWorkspaceComponent,
    LogoutSuccessComponent,
    CreateWorkspaceButtonComponent,
    WorkSpacesPipe,
    SearchBoxComponent,
    CreateNewWorkspaceComponent,
    AddWsMembersComponent,
    MSWComponent,
    MSWActivityComponent,
    MSWObjectComponent,
    ArchiveWorkspaceComponent,
    InviteViaMailComponent,
    MswObjectHandlePopupComponent,
    MswShareObjectPopupComponent,
    MemberPipe,
    MswMakeCopyPopupComponent,
    ObjectPipe,
    MswSettingsComponent,
    TransferOwernshipComponent,
    MawsControlComponent,
    

    MswMembersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    PanelModule,
    ToastModule,
    DialogModule,
    BrowserAnimationsModule,
    ScrollPanelModule,
    DropdownModule,
    TabViewModule,
    ButtonModule,
    CardModule,

    DataViewModule,
    InputTextareaModule
  ],
  providers: [UsersService, MessageService],
  bootstrap: [AppComponent]
  //entryComponents: [WorkspaceMenuComponent]
})
export class AppModule {

  // constructor(private injector: Injector) {
  // // Way 1, which is not actually supporting two way binding
  // // const workspaceModel = createCustomElement(WorkspaceModelComponent, { injector });
  // // customElements.define('app-workspace-menu', workspaceModel);

  // // Way 2, which is actually supporting two way binding
  //  const strategyFactory = new ElementZoneStrategyFactory(WorkspaceMenuComponent, this.injector);
  //  const customButton = createCustomElement(WorkspaceMenuComponent, { injector, strategyFactory });
  //  customElements.define('app-workspace-menu', customButton);
  // }
  // ngDoBootstrap() {}

}
