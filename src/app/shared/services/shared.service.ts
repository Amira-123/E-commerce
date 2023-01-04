import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  public cartlength:any;
  public length=new BehaviorSubject([])
  getcartLength(){
    if("cart" in localStorage){
      this.cartlength=JSON.parse(localStorage.getItem("cart")||'[]');
      this.length.next(this.cartlength.length)
    }


  }
  getlength(){
    this.getcartLength();
    return this.length.asObservable()
  }
}
