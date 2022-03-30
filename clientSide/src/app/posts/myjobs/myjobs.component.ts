

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DialogueComponent } from '../posts/dialogue/dialogue.component';
import { AfterViewInit, Component, ViewChild, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  productName: string,
  category: string,
  freshness: string,
  price: number,
  comment: string,
  date: string,
  id: number
}

@Component({
  selector: 'app-myjobs',
  templateUrl: './myjobs.component.html',
  styleUrls: ['./myjobs.component.css']
})
export class MyjobsComponent implements OnInit {


  myjobs: any[] = []
  id: any = localStorage.getItem("id")

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  title = 'crud-reactive-form';


  constructor(public dialog: MatDialog, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/jobs/myjob/all/1", { headers: { authorization: `Bearer ${localStorage.getItem("token")}` } }).subscribe({
      next: (r: any) => {
        this.myjobs = r.data
        console.log(r)
      },
      error: (e: any) => {
        console.log("some thing went wrong")
      }
    })
  }

  openDialog() {
    this.dialog.open(DialogueComponent, {
      data: {
        animal: 'panda',
      },
      width: '30%',
      height: '60%'
    });
  }
  onReject(jobid: string, employeeid: string) {
    this.http.post(`http://localhost:3000/jobs/myjob/reject/${jobid}/${employeeid}`, {}, { headers: { authorization: `Bearer ${localStorage.getItem("token")}` || "" } }).subscribe({
      next: (r: any) => {
        console.log(r)
      },
      error: (e: any) => {
        console.log("some thing went wrong")
      }
    })
  }
  onAccept(jobid: string, employeeid: string) {
    this.http.post(`http://localhost:3000/jobs/myjob/accept/${jobid}/${employeeid}`,
      {},
      { headers: { authorization: `Bearer ${localStorage.getItem("token")}` || "" } }).subscribe({
        next: (r: any) => {
          console.log(r)
        },
        error: (e: any) => {
          console.log("some thing went wrong")
        }
      })
  }

  onMyJobs() {
    this.router.navigate(["/posts/myjobs"])
  }
  onLogOut() {
    localStorage.setItem("token", "")
    localStorage.setItem("id", "")
    localStorage.setItem("type", "")
    this.router.navigate(["/home"])
  }


}