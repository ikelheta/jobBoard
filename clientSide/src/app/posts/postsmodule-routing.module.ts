import { MyjobsComponent } from './myjobs/myjobs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'myjobs',
    component: MyjobsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostsmoduleRoutingModule { }