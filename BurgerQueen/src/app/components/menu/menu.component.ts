import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  allProducts:any [] = [];
  menu: any[] = [];
  cart: any[] = [];
  base: number = 1;

  constructor(private service: FirestoreService) {}
  ngOnInit(): void {
    this.getMenu();
  }
  getMenu(){
    this.service.getMenu().subscribe((data) => {
      data.forEach((item) => {
        this.allProducts.push({
          id: item.payload.doc.id,
          data: item.payload.doc.data()})
      })
    })
   }
   filteredMenu($event:any){
    this.menu = this.allProducts.filter((item) => item.data.horario == $event.target.value);
   }
   addToCart(data:Object, id:any) {
    this.cart.push({
      id,
      data,
      cantidad: 1,
    });
    console.log(this.cart)
   }
  changeAmount(base:number,item:any){
    item.cantidad+= base;
  }
  deleteCart(){
    this.cart = [];
  }
}
