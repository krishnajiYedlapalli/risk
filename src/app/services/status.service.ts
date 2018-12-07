import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StatusService {
  status: any;
  constructor(private http: Http) { }

  loadStatus() {
    return this.http.get('erassets/status.json').pipe(map((res: Response) => res.json()));
  }

  getMailStatus() {
    return this.status;
  }

  setMailStatus(data: any) {
    this.status = data;
  }
  setOwnserStatus(data: any) {
    this.status = data;
  }
  getOwnerStatus() {
    return this.status;
  }
  getUnarchiveStatus() {
    return this.status;
  }
  setUnarchiveStatus(data: any) {
    this.status = data;
  }
}
