import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DialogueComponent } from './dialogue/dialogue.component';
import { AfterViewInit, Component, ViewChild, Inject, OnInit, AfterContentChecked, OnChanges } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, AfterContentChecked, OnChanges {


  jobs: any[] = []
  id: any = localStorage.getItem("id")
  type: boolean = localStorage.getItem("type") === "employee"

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  title = 'crud-reactive-form';


  constructor(public dialog: MatDialog, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/jobs/all/1").subscribe({
      next: (r: any) => {
        this.jobs = r.data
        console.log(r)
      },
      error: (e: any) => {
        console.log("some thing went wrong")
      }
    })

  }
  ngAfterContentChecked(): void {
    // this.http.get("http://localhost:3000/jobs/all/1").subscribe({
    //   next: (r: any) => {
    //     this.jobs = r.data
    //     console.log(r)
    //   },
    //   error: (e: any) => {
    //     console.log("some thing went wrong")
    //   }
    // })
  }
  ngOnChanges() {

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
  onApply(id: string) {
    this.http.post(`http://localhost:3000/jobs/apply/${id}`, {}, { headers: { authorization: `Bearer ${localStorage.getItem("token")}` || "" } }).subscribe({
      next: (r: any) => {
        console.log(r)
        this.http.get("http://localhost:3000/jobs/all/1").subscribe({
          next: (r: any) => {
            this.jobs = r.data
            console.log(r)
          },
          error: (e: any) => {
            console.log("some thing went wrong")
          }
        })
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


