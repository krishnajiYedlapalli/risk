import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as CryptoJS from 'crypto-js';
import * as Fingerprint2 from 'fingerprintjs2';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName:string ='';
  password:string='';
  router:Router;
  secretData;
  browserId:string='';
  uService:UsersService;
  epass;
  constructor(router:Router,uService : UsersService) {
    let me = this;
    this.router = router;
    this.uService=uService;
    // login required data
    // console.log('in login',JSON.parse(decodeURI(window.location.hash.replace('#',''))));
    // this.secretData = JSON.parse(decodeURI(window.location.hash.replace('#','')));
    // this.secretData.encryption= JSON.parse(this.secretData.encryption);
    // window.location.hash = '';
    this.uService.getSecretKey().subscribe(data => {
      if( data && data.loggedinn){
        
        this.router.navigate(['/eigen']);
      }else{
        
      this.secretData = data;
      this.secretData.encryption= JSON.parse(this.secretData.encryption);
      }

    });
    new Fingerprint2().get(function(result, components) {
      me.browserId= result;
      console.log(result) // a hash, representing your device fingerprint
      console.log(components) // an array of FP components
    })
   }

  ngOnInit() {
  }
  login(){
    alert('clicked on sign in button'+this.userName+this.password);
    let formattedPassWord = this.getEPass(this.password);
    this.uService.validateUser(this.userName,formattedPassWord,null,
      this.secretData.encryption.uid,null,this.browserId).subscribe(
      data => {
          //window.sessionStorage.token = data.token;
          //window.location.href = response.redirect;
        alert('Successfully logged in'+data);
        this.router.navigate(['/eigen']);
      },
      error => {
        console.log(JSON.stringify(error.json()));
      }
      );

    
  }

  getEPass = function(pass){
    var passEKey= this.secretData.encryption.key;
    if(!passEKey) return "";
    this.epass = CryptoJS.AES.encrypt(pass, passEKey);
    var result = {
        ct: this.epass.ciphertext.toString(CryptoJS.enc.Base64),
        iv: this.epass.iv.toString(),
        s: this.epass.salt.toString()
    };
    return JSON.stringify(result);
}

}
