import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  baseUrl = "https://prism.eigenrisk.com";
  constructor(private http: Http) { }

  getAccounts(userId) {
    var params = {
      userId: userId
    };
    return this.http.post(this.baseUrl + '/api/eigenExpress/getAccountList', params).pipe(map((res: Response) => res.json()));
  }
  
  deleteAccount(requestedAccount) {
    return this.http.delete(this.baseUrl + '/api/DeleteAccount', requestedAccount).pipe(map((res: Response) => res.json()));
  }
}
