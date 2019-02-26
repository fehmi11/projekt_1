import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SavedComponent } from './saved/saved.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'dashbord' , component : DashbordComponent},
  {path : 'saved' , component : SavedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
