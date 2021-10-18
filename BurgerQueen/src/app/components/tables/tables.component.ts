import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  tables: any[] = [];
  //public tables: any[] = [];
  //items: Observable<any[]>;
  
  constructor(
    private service: FirestoreService
    ) {   /*this.service.mesas().subscribe(
      table => { console.log(table) }
    ); */
  }
  // constructor() {}

  ngOnInit(): void {
    this.mesas();
    /*
    this.service.mesas().subscribe(
      table => { console.log(table) }
    );*/
  }
  // this.items = this.service.collection('items').valueChanges();
   alert() {
    alert('soyUnaAlerta😎');
  }

  mesas() {
   console.log(this.service.mesas().subscribe((data) => console.log(data)));
  } 
  /*
  mesas() {
    this.service.mesas().subscribe((data) => {
          this.tables = [];
          data.forEach((mesaData:any) => {
            this.tables.push({
            id: mesaData.payload.doc.id,
            data: mesaData.payload.doc.data()
        })
      });
      console.log(this.tables);
    });
  } */
}
