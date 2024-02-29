import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  {path: '', component:DashboardComponent,
  children:[
    {path: 'header', component:HeaderComponent},
    {path: 'footer', component:FooterComponent},
    {path: 'home', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'movies',component:MoviesComponent},
    {path: 'movies/:title', component: MoviesComponent },
    {path: '', redirectTo: '/users/home', pathMatch: 'full'}
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
