import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddempComponent } from './addemp/addemp.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { DelempComponent } from './delemp/delemp.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    AddempComponent,
    AddproductComponent,
    AdminsigninComponent,
    DeleteproductComponent,
    DelempComponent,
    MainComponent,
    ProductsComponent,
    SigninComponent,
    SignupComponent,
    UpdateempComponent,
    UpdateproductComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
