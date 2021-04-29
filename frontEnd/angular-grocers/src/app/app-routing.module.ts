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
import { ViewProductsComponent} from './view-products/view-products.component'
import { ViewRequestsComponent} from './view-requests/view-requests.component'
import { AddProductCartComponent} from './add-product-cart/add-product-cart.component'
import { ViewProductCartComponent} from './view-product-cart/view-product-cart.component'
import { CheckoutComponent} from './checkout/checkout.component';
import { EditProfileUserComponent} from './edit-profile-user/edit-profile-user.component';
import { UpdateOrderStatusComponent} from './update-order-status/update-order-status.component';

import { UserPanelComponent} from './user-panel/user-panel.component';
import { RaiseTicketComponent} from './raise-ticket/raise-ticket.component';
import { FundsComponent} from './funds/funds.component';

import { RemoveEmpComponent } from './remove-emp/remove-emp.component';

import {EmployeePanelComponent} from './employee-panel/employee-panel.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'adminpanel', component: AdminPanelComponent },
	{ path: 'lockuser', component: LockUserComponent },
	
	{ path: 'sendrequest', component: SendRequestComponent },
	{ path: 'editprofile', component: EditProfileComponent },
	{ path: 'updateproduct', component: UpdateProductComponent },

	//Admin Paths
	{ path: 'viewproduct', component: ViewProductsComponent},
	{ path: 'viewrequest', component: ViewRequestsComponent},

	//User Only Paths 
	{ path: 'addtocart', component: AddProductCartComponent},
	{ path: 'viewcart', component: ViewProductCartComponent},
	{ path: 'checkout', component: CheckoutComponent},
	{ path: 'orderstatus', component: OrderStatusComponent },
	{ path: 'editprofileuser', component: EditProfileUserComponent},
	{ path: 'funds', component: FundsComponent },

	//Employee Only Paths

	{ path: 'updateorderstatus' , component: UpdateOrderStatusComponent},
	{ path: 'sentrequest', component: SendRequestComponent },
	{ path: 'userpanel', component: UserPanelComponent },
	{ path: 'raiseticket', component: RaiseTicketComponent },
	{ path: 'funds', component: FundsComponent },

	{ path:  'sentrequest' ,component: SendRequestComponent },

	{ path: 'user-panel', component: UserPanelComponent},
	{ path: 'raise-ticket', component: RaiseTicketComponent},
	{ path: 'funds', component: FundsComponent},


	
	{ path: 'removeemp', component:RemoveEmpComponent  } ,
	
	{ path: 'employee-panel', component: EmployeePanelComponent},
	
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	
	{ path: '**', redirectTo: 'login', pathMatch: 'full' }
	
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
