import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LockUserComponent } from './lock-user/lock-user.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { SendRequestComponent } from './send-request/send-request.component';

import { UserPanelComponent} from './user-panel/user-panel.component';
import { RaiseTicketComponent} from './raise-ticket/raise-ticket.component';
import { FundsComponent} from './funds/funds.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'adminpanel', component: AdminPanelComponent },
	
	{ path: 'lockuser', component: LockUserComponent },
	{ path: 'orderstatus', component: OrderStatusComponent },
	{ path: 'sendrequest', component: SendRequestComponent },
	{ path: 'orderstatus', component: OrderStatusComponent },
	{ path: 'editprofile', component: EditProfileComponent },
	{ path: 'updateproduct', component: UpdateProductComponent },
	{ path:  'sentrequest' ,component: SendRequestComponent },

	{ path: 'user-panel', component: UserPanelComponent},
	{ path: 'raise-ticket', component: RaiseTicketComponent},
	{ path: 'funds', component: FundsComponent},

	{ path: '', redirectTo: 'adminpanel', pathMatch: 'full' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
