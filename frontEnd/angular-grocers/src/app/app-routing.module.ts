import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LockUserComponent } from './lock-user/lock-user.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'adminpanel', component: AdminPanelComponent },
	{ path: 'lockuser', component: LockUserComponent },
	{ path: 'orderstatus', component: OrderStatusComponent },
	{ path: 'editprofile', component: EditProfileComponent },
	{ path: 'updateproduct', component: UpdateProductComponent },
	{ path: '', redirectTo: 'adminpanel', pathMatch: 'full' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
