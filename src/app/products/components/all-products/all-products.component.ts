import { IProduct } from './../../models/iProducts';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  allProducts:IProduct[]=[];
  allCategories:string[]=[];
  cartProduct:any[]=[];
  spinnerFlag:boolean=false;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  this.getAllProducts();
  this.getAllCategories();
  }

  getAllProducts(){
    this.spinnerFlag=true
    this.productService.getAllProducts().subscribe((res:any)=>{
      this.allProducts=res;
      this.spinnerFlag=false;
      },
      (error:any)=>{
        this.spinnerFlag=false;
        alert(error)})
  }
  getAllCategories(){
    this.spinnerFlag=true
    this.productService.getAllCategories().subscribe((res:any)=>{
    this.allCategories=res;
    this.spinnerFlag=false;

      },
      (error:any)=>{
        this.spinnerFlag=false;
        alert(error)})
  }
  selectedCategoryItems(event:any){
    let value= event.target.value;
      if(value=="all"){
        this.getAllProducts();

      }
      else{
        this.getProductCategories(value)
      }

  }
  getProductCategories(category:string){
    this.spinnerFlag=true
    this.productService.getProductByCategory(category).subscribe((res:any)=>{
    this.allProducts=res;
    this.spinnerFlag=false;
    },
    (error)=>{
    this.spinnerFlag=true;
     alert(error)
    })
  }

  addToCart(event:any){

    if("cart" in localStorage){
      this.cartProduct=JSON.parse(localStorage.getItem("cart")||'[]');
      let exist=this.cartProduct.find(item=>item.item.id==event.item.id);
      if(exist){
        alert("this product is already in your cart")
      }
      else{
        this.cartProduct.push(event);
        localStorage.setItem("cart",JSON.stringify(this.cartProduct))
      }
    }
    else{
      this.cartProduct.push(event);
      localStorage.setItem("cart",JSON.stringify(this.cartProduct))
    }
  }
}
