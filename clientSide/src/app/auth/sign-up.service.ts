import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  userNameSubject : BehaviorSubject<string> = new BehaviorSubject("");
  fullNameSubject : BehaviorSubject<string> = new BehaviorSubject("");
  passwordSubject : BehaviorSubject<string> = new BehaviorSubject("");
  

  constructor(private router : Router) { }
  getuserName() : BehaviorSubject<string>{
    return this.userNameSubject;
  }
  setUserName(userName : string) : void{
    this.userNameSubject.next(userName);
  }
  getFullName() : BehaviorSubject<string>{
    return this.fullNameSubject;
  }
  setFullName(fullName : string) : void{
    this.fullNameSubject.next(fullName);
  }
  getPassword() : BehaviorSubject<string>{
    return this.passwordSubject;
  }
  setPassword(password : string) : void{
    this.passwordSubject.next(password);
  }
  signUp(userName : string , fullName : string , password : string){
     this.setUserName(userName);
     this.setFullName(fullName);
     this.setPassword(password);
     this.router.navigate(['/profile']);
  }
}
