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
    id: number;
    product: IProduct;
    constructor(private _routeParams: RouteParams, private _router: Router){
        debugger;
        this.id = +this._routeParams.get('id');         
        this.pageTitle += `: ${this.id}`;        
    }
    onBack(): void{
        this._router.navigate(['Products']);
    }
    ngOnInit(): void{
        this.product = {
            productId: 12312;
            productName: 'string',
            productCode: 'string',
            releaseDate: 'string',
            price: 12312,
            description: 'string',
            starRating: 3.3,
            imageUrl: 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'    
        };
    }  
}