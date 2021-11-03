import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComunicationService } from 'src/app/services/comunication.service';
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
  type:string = '';
  total:number = 0;
  selectedTable:any;

  constructor(private firestore: FirestoreService,
    private comunication: ComunicationService) {}
    
  ngOnInit(): void {
    this.getMenu();
    this.comunication.disparadorObservable.subscribe((data) => {
      console.log(data);
      this.selectedTable = data;
    })
  }
  getMenu(){
    this.firestore.getMenu().subscribe((data) => {
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
   addToCart(data:Object) {
    let product = this.cart.find((item) => item.data === data);
    if (product === undefined) {
      this.cart.push({
        data,
        cantidad: 1,
      });
    }
    this.totalPrice();
   }
  changeAmount(base:number,item:any){
    if(item.cantidad + base === 0){
      this.deleteItem(item);
    } else {
      item.cantidad+= base;
      this.totalPrice();
    }
  }
  deleteCart(){
    this.cart = [];
    this.total = 0;
    this.type = '';
  }
  typeOfMenu(horario:string){
    this.type = horario;
  }
  deleteItem(item:any){
    const index = this.cart.indexOf(item);
    if (index > -1) {
      this.cart.splice(index, 1);
      this.totalPrice();
    }
    return this.cart;
  }
  totalPrice() {
    if (this.cart.length == 0) {
      this.total = 0;
      this.type = '';
    } else {
      this.total = this.cart.map((item) => item.data.precio * item.cantidad)
    .reduce((acc, item) => acc +=item);
    }
  }
  createOrder(comentario:string){
    this.firestore.createOrder(this.cart,this.total, comentario);
  }

  updateTableStatus(id:string, status:boolean) {
    this.firestore.updateTableStatus(id, (status = !status))
   }
}
