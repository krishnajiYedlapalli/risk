import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MembersService {

  membersData:any;
  constructor(private http: Http) { }
  
  loadMembers(){
    return this.http.get('erassets/members.json').pipe(map((res:Response) => res.json()));
 }
getMembers(){
  return this.membersData;
}
setMembers(data:any){
  this.membersData = data;
}
}
