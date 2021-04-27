import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
<<<<<<< HEAD
import { LockUserComponent } from './lock-user/lock-user.component';
@NgModule({
  declarations: [
    AppComponent,
    SendRequestComponent,
    SignupComponent,
    LoginComponent,
    EditProfileComponent,
    LockUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
=======
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';
@NgModule({
	declarations: [
		AppComponent,
		SendRequestComponent,
		SignupComponent,
		LoginComponent,
		EditProfileComponent,
		AdminPanelComponent,
		AddProductComponent,
		UpdateProductComponent,
		ViewProductsComponent,
		ViewRequestsComponent
	],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
>>>>>>> avichel
})
export class AppModule {}
