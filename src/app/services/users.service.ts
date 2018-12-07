import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
  //Needed?
  users :Array<Object> = new Array<Object>();
  user: any = {};
  baseUrl="https://integration.eigenrisk.com/";

  constructor(private http: Http) { 
    this.users.push({"name":"abcd","id":1},{"name":"defg","id":2})
    this.user.userId=12;
  }
  
  getUser() {
    return this.user;
  }

  setUser(user: any) {
    this.user = user;
  }

  getUsers() :Array<Object>{
    return this.users;
  }

  getUsersFromServer(){
     return this.http.get('erassets/users.json').pipe(map((res:Response) => res.json()));
  }

  validateUser(userEmail, password, stateParams, scopeUid, recaptchaVerificationResponse, browserID){
    return this.http.post('https://integration.eigenrisk.com/auth/login', {
      email: userEmail,
      password: password,
      source: stateParams,
      uid: scopeUid,
      recaptchaResponse: recaptchaVerificationResponse,
      fingerprint: browserID,
      withCredentials:true
  });
  }

  getSecretKey(){
    return this.http.get('https://integration.eigenrisk.com/auth/login',{withCredentials:true}).pipe(map((res:Response) => res.json()));
  }

  getBaseUrl(){
    return this.baseUrl;
  }
  
}
