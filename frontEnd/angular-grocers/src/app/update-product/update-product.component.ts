import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-update-product',
	templateUrl: './update-product.component.html',
	styleUrls: [ './update-product.component.css' ]
})
export class UpdateProductComponent implements OnInit {
	constructor(public productService: ProductService, private router: Router, private route: ActivatedRoute) {}

	productRef = new FormGroup({
		name: new FormControl({ value: '', disabled: true }),
		price: new FormControl(),
		quantity: new FormControl(),
		discount: new FormControl()
	});
	id: String = '';

	ngOnInit(): void {
		this.route.queryParams.subscribe((params) => (this.id = params.id));
		this.productService.retrieveProductById(this.id).subscribe((res: any) => this.productRef.patchValue(res[0]));
	}

	onUpdateProduct() {
		let data = this.productRef.value;
		data.id = this.id;
		this.productService.updateProduct(data).subscribe((res) => {
		//	console.log(res);
			this.router.navigate([ '/admin-panel' ]);
		});
	}
}
