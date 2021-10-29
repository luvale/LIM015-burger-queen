import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit {
  order:any[] = [];

  constructor(private service: FirestoreService) { }
  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(){
    this.service.getOrder().subscribe((data) => {
      data.forEach((item) => {
        this.order.push({
          id: item.payload.doc.id,
          data: item.payload.doc.data()})
      })
    })
    console.log(this.order);
   }
   updateOrderStatus (id:string) {
    console.log('updated');
    this.service.updateOrderStatus(id);
   }
}
