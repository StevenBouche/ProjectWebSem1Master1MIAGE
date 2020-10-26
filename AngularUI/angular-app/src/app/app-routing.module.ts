import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {UserProfileService} from './login/user-profile.service';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'forum'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule],
  providers: [UserProfileService]
})

export class AppRoutingModule { }
