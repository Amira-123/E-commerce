import { IProduct } from './../../models/iProducts';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:any;
  id:any=this.route.snapshot.params['id'];
  loading:boolean=false
  constructor(private productService:ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.getProduct()
  }
  getProduct(){
    this.loading=true
    this.productService.getSingleProduct(this.id).subscribe((res:any)=>{
    this.product=res;
    this.loading=false;
    },
    (error=>{
      alert(error);
      this.loading=true
    }))
  }

}
