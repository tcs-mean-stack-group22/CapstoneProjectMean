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
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { ViewRequestsComponent } from './view-requests/view-requests.component';
import { LockUserComponent } from './lock-user/lock-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { AddProductCartComponent } from './add-product-cart/add-product-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FundsComponent } from './funds/funds.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ViewProductCartComponent } from './view-product-cart/view-product-cart.component';

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
		ViewRequestsComponent ,
		LockUserComponent,

  NavbarComponent,
  FooterComponent,

  OrderStatusComponent,
    AddProductCartComponent,
    CheckoutComponent,
    FundsComponent,
    RaiseTicketComponent,
    UserPanelComponent,
    ViewProductCartComponent

	],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
