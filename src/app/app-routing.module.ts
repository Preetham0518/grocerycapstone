import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { AddempComponent } from './addemp/addemp.component';
import { DelempComponent } from './delemp/delemp.component';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  {path:'', redirectTo:'main',pathMatch:"full"},
  {path:"welcome", component:WelcomeComponent},
  {path:"addproduct", component:AddproductComponent},
  {path:"updateproduct", component:UpdateproductComponent},
  {path:"addemp", component:AddempComponent},
  {path:"delemp", component:DelempComponent},
  {path:"updateemp", component:UpdateempComponent},
  {path:"signin", component:SigninComponent},
  {path:"signup", component:SignupComponent},
  {path:"adminsignin", component:AdminsigninComponent}
 
 


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 