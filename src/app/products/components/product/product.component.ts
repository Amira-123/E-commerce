import { SharedService } from './../../../shared/services/shared.service';
import { IProduct } from './../../models/iProducts';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() data:any={};
  @Output() item:EventEmitter<any>= new EventEmitter();
  addButton:boolean=false;
  amount:number=0;
  constructor(private service:SharedService) { }

  ngOnInit(): void {
  }
  addItem(){
    this.item.emit({item:this.data,quantity:this.amount});
    this.service.getlength()
  }

}
