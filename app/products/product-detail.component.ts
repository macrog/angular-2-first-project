import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {IProduct} from './product';
import {StarComponent} from '../shared/star.component';


@Component({    
    templateUrl: 'app/products/product-detail.component.html',
    directives: [StarComponent],
    styleUrls: ['app/products/product-list.component.css']
})

export class ProductDetailComponent{
    pageTitle: string = 'Product Detail';    
    product: IProduct;
    constructor(private _routeParams: RouteParams, private _router: Router){
        debugger;
        let id = +this._routeParams.get('id');         
        this.pageTitle += `: ${id}`;        
    }
    onBack(): void{
        this._router.navigate(['Products']);
    }
    ngOnInit(): void{
       this.product = this._routeParams.get('product');
    }  
}