import { SharedService } from './../../../shared/services/shared.service';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProduct:any[]=[];
  total:number=0;
  success:boolean=false;
  constructor(private cartService:CartService,
    private route:Router,
    private service:SharedService) { }

  ngOnInit(): void {
    this.getCartItems()
  }
  getCartItems(){
    if("cart" in localStorage){
      this.cartProduct=JSON.parse(localStorage.getItem("cart")||'[]');
    }
    this.getTotalPrice()
  }
  getTotalPrice(){
    this.total=0;
    for(let x in this.cartProduct){
      this.total+=this.cartProduct[x].item.price*this.cartProduct[x].quantity
    }
  }
  minusAmount(index:number){
    this.cartProduct[index].quantity--;
    this.getTotalPrice()
    localStorage.setItem("cart",JSON.stringify(this.cartProduct))
  }
  plusAmount(index:number){
    this.cartProduct[index].quantity++;
    this.getTotalPrice()
    localStorage.setItem("cart",JSON.stringify(this.cartProduct))
  }
  detectChangeAmount(){
    localStorage.setItem("cart",JSON.stringify(this.cartProduct));
    this.getTotalPrice()
  }
  deleteProduct(index:number){
    this.cartProduct.splice(index,1);
    this.getTotalPrice()
    localStorage.setItem("cart",JSON.stringify(this.cartProduct));
    this.service.getlength()
  }
  clearAllCart(){
    this.cartProduct.splice(0);
    // this.cartProduct=[]
    this.getTotalPrice()
    localStorage.setItem("cart",JSON.stringify(this.cartProduct))
    this.service.getlength()
  }
  addCartToBack(){
    let products= this.cartProduct.map(item =>{
      return {productId:item.item.id,quantity:item.quantity}
    })
    let Model={
      userId:5,
      date:new Date(),
      products:products
    }
    this.cartService.createNewCart(Model).subscribe((res:any)=>{
      this.success=true
    },(error:any)=>{
      alert(error)
    })
  }
  goBack(){
   this.route.navigate(['/'])
  }
}
