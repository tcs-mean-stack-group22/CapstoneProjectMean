import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
	selector: 'app-add-product',
	templateUrl: './add-product.component.html',
	styleUrls: [ './add-product.component.css' ]
})
export class AddProductComponent implements OnInit {
	constructor(public productService: ProductService) {}

	productRef = new FormGroup({
		name: new FormControl(),
		price: new FormControl(),
		quantity: new FormControl(),
		discount: new FormControl()
	});

	ngOnInit(): void {}

	onAddProduct() {
		this.productService.storeProduct(this.productRef.value).subscribe((result) => console.log(result), (error) => console.log(error));
		this.productRef.reset();
	}
}
