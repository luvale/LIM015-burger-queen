import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  // tables: any[] = [];

 //  constructor(private service: FirestoreService) { }
  constructor() {}

  ngOnInit(): void {
    // this.mesas();
  }
   alert() {
    alert('soyUnaAlerta😎');
  }
  mesas() {
   //console.log(this.service.mesas());

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
