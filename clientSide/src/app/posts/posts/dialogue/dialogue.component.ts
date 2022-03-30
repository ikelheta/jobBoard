import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit, OnDestroy {
  productForm !: FormGroup
  toppingList = ['junior', 'midlevel', 'senior']




  constructor(private fb: FormBuilder, private http: HttpClient, private dialogRef: MatDialogRef<DialogueComponent>) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      company: ['', Validators.required],
      position: ['', Validators.required],
      level: ['', Validators.required],
      requirments: ['', Validators.required],
    })

  }
  onSave() {
    if (this.productForm.valid) {
      this.http.post("http://localhost:3000/jobs/post", this.productForm.value, { headers: { authorization: `Bearer ${localStorage.getItem("token")}` || "" } }).subscribe({
        next: (r: any) => {
          alert("job added succesfully")
          this.productForm.reset()
          this.dialogRef.close()


        },
        error: (e: any) => {
          alert("some thing went wrong")
        }
      })
    }
  }


  ngOnDestroy(): void {

  }

}
