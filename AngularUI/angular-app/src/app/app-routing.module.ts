import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'panel', component:  ForumComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
