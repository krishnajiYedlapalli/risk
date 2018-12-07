import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedInUserId: any=12;
  userId: number;

  constructor(private http: Http) { }
  getUserId() {
    return this.loggedInUserId;
  }

  setUserId(userId:number) {
    this.loggedInUserId = 12;
  }
  userLogOut(){
    return this.http.get('https://prism.eigenrisk.com/auth/logout/success/0').pipe(map((res:Response) => res.json()));
  }
}
