import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-take-order',
  templateUrl: './take-order.component.html',
  styleUrls: ['./take-order.component.css']
})
export class TakeOrderComponent implements OnInit {
  desayuno: any[] = [];
  tarde: any[] = [];

  constructor(
    private service: FirestoreService
    ) {}

  ngOnInit(): void {
    this.getDesayuno();
    // this.getMenuTarde();
  }
  getDesayuno(){
    this.service.getDesayuno().subscribe((data) => {
      Object.entries(data).forEach(([key, value]) => {
        console.log(value);
      });
    });
  }
  // getMenuTarde(){
  //   this.service.getMenuTarde().subscribe();
  // }
}