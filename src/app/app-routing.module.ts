import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegistrationFormComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'users',canActivate:[AuthGuard] , loadChildren: () => import('./modules/users/users.module').then((m) => m.UsersModule)},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
