import { DialogueComponent } from './posts/dialogue/dialogue.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PostsmoduleRoutingModule } from './postsmodule-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { PostsComponent } from './posts/posts.component';
import { RouterModule, Routes } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MyjobsComponent } from './myjobs/myjobs.component';



@NgModule({
  declarations: [
    PostsComponent,
    DialogueComponent,
    MyjobsComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    PostsmoduleRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatTabsModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule
  ],
  exports: [
    RouterModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    PostsmoduleRoutingModule
  ]
})
export class PostsModule { }
