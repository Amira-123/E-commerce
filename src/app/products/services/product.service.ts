import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}
  getAllProducts(){
    return this.http.get(environment.baseApi+'products');
  }
  getAllCategories(){
    return this.http.get(environment.baseApi+'products/categories')
  }
  getProductByCategory(categoryName:string){
    return this.http.get(environment.baseApi+'products/category/'+categoryName)
  }
  getSingleProduct(id:any){
    return this.http.get(environment.baseApi+'products/'+id)
  }
}
