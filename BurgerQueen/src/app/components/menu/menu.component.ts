import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  productos:any [] = [];
  desayuno: any[] = [];
  tarde: any[] = [];

  constructor(private service: FirestoreService) { }

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
