import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpService } from '../../sign-up.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, DoCheck {
  signUpForm!: FormGroup;
  signUpEmployeerForm!: FormGroup;
  signInForm!: FormGroup;
  signInEmployeerForm!: FormGroup;
  toppingList = ['junior', 'midlevel', 'senior']





  constructor(private fb: FormBuilder, private router: Router, private signUpservice: SignUpService, private http: HttpClient) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['',],
      email: ['',],
      city: [''],
      national: [''],
      password: [''],
      level: [''],
      bio: [''],
      proglang: [''],
    });
    this.signUpEmployeerForm = this.fb.group({
      name: ['',],
      email: ['',],
      city: [''],
      password: [''],
      company: ['']
    });
    this.signInForm = this.fb.group({
      email: [''],
      password: ['']
    })
    this.signInEmployeerForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  signUpEmployee(): void {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json')
    console.log(this.signUpForm)
    this.http.post(`http://localhost:3000/employee/register`, this.signUpForm.value).subscribe(
      (res: any) => {
        localStorage.setItem("token", res.token)
        localStorage.setItem("id", res.id)
        localStorage.setItem("type", res.type)
        this.router.navigate(['/posts']);
      },
      err => {
        this.router.navigate(['/home'])
      }
    )

  }
  signUpEmployeer() {
    this.http.post(`http://localhost:3000/employeer/register`, this.signUpEmployeerForm.value).subscribe(
      (res: any) => {
        console.log(res.token)
        localStorage.setItem("token", res.token)
        localStorage.setItem("id", res.id)
        localStorage.setItem("type", res.type)
        this.router.navigate(['/posts']);
      },
      err => {
        this.router.navigate(['/home'])
      }
    )
  }

  signInEmployee() {
    this.http.post(`http://localhost:3000/login/employee`, this.signInForm.value).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem("token", res.token)
        localStorage.setItem("id", res.id)
        localStorage.setItem("type", res.type)
        this.router.navigate(['/posts']);
      },
      err => {
        this.router.navigate(['/home'])
      }
    )
  }

  signInEmployeer() {
    this.http.post(`http://localhost:3000/login/employeer`, this.signInEmployeerForm.value).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem("token", res.token)
        localStorage.setItem("id", res.id)
        localStorage.setItem("type", res.type)
        this.router.navigate(['/posts']);
      },
      err => {
        this.router.navigate(['/home'])
      }
    )
  }


  ngDoCheck(): void {
    //this.signUpservice.getuserName().subscribe((user)=> console.log(user));
  }


}
