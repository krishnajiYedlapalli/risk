import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EigenRiskHomePage';
  users :Array<Object> = new Array<Object>();
  constructor(uService : UsersService){
    //this.users.push({"name":"abc","id":1},{"name":"def","id":2})
    //this.users = uService.getUsers();
    //uService.getUsersFromServer().subscribe(data => this.users = data);
  }
}
