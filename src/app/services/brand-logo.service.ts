import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BrandLogoService {

  logoUrls:any;
  constructor(private http: Http) {

  }

  loadLogoUrls(){
    return this.http.get('erassets/logourl.json').pipe(map((res:Response) => res.json()));
  }

 getLogoUrls(){
   return this.logoUrls;
 }

 setLogoUrls(data:any){
  this.logoUrls=data;
 }

}
