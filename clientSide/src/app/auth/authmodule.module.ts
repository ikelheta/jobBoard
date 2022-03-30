import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthmoduleRoutingModule } from './authmodule-routing.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
// importing reactive forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// importing from angular material
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';

// flex layout
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    AuthmoduleRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatTabsModule
  ],
  exports :[
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    AuthmoduleRoutingModule
  ]
})
export class AuthmoduleModule { }
