import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumModule } from './forum/forum.module';

const routes: Routes = [
  { path: '', component: ForumModule }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
