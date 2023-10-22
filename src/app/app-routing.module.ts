import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { RegistrationComponent } from './user/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-registration',
    pathMatch: 'full',
  },
  {
    path: 'user-details',
    component: UserDetailsComponent,
  },
  {
    path: 'user-registration',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
