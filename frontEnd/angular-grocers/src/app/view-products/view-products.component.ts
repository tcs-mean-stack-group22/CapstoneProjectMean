import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-view-products',
	templateUrl: './view-products.component.html',
	styleUrls: [ './view-products.component.css' ]
})
export class ViewProductsComponent implements OnInit {
	constructor(public productService: ProductService, private router: Router) {}

	productList: any = [];

	ngOnInit(): void {
		this.productService.retrieveProducts().subscribe((res) => (this.productList = res));
	}
	onUpdate(id: any) {
		this.router.navigate([ '/updateproduct' ], { queryParams: { id: id } });
	}

	onDelete(id: any) {
		this.productService.deleteProduct(id).subscribe((res) => console.log(res), (error) => console.log(error));
	}
}
