import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  order:any[] = [];

  constructor(private service: FirestoreService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(){
    this.service.getOrder().subscribe((data) => {
      this.order = [];
      data.forEach((item) => {
        this.order.push({
          data: item.payload.doc.data()})
      })
    })
   }
  
}

