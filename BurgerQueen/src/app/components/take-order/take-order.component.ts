import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-take-order',
  templateUrl: './take-order.component.html',
  styleUrls: ['./take-order.component.css']
})
export class TakeOrderComponent implements OnInit {
  productos:any [] = [];
  desayuno: any[] = [];
  tarde: any[] = [];

  constructor(
    private service: FirestoreService
    ) {}

  ngOnInit(): void {
    this.getMenu();
  }
  getMenu(){
    this.service.getMenu().subscribe((data) => {
      data.forEach((item) => {
        this.productos.push({
          id: item.payload.doc.id,
          data: item.payload.doc.data()})
      })
      // console.log(this.productos);
      this.desayuno = this.getDesayuno();
    })
   }
   getDesayuno() {
    return this.productos.filter((item) => item.data.horario == 'desayuno');
   }
}