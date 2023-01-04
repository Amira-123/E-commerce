import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  length:number=0
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.getlength()
  }
  getlength(){
   this.service.getlength().subscribe((res:any)=>{
    this.length=res;
   })
  }

}
