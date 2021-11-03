import { Component, OnInit } from '@angular/core';
import { ComunicationService } from 'src/app/services/comunication.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  tables: any[] = [];
  
  constructor(
    private firestore: FirestoreService,
    private comunication: ComunicationService
    ) {
    }

  ngOnInit(): void {
    this.getTables();
  }

  getTables() {
   this.firestore.getTables().subscribe((data) => {
     this.tables = [];
     data.forEach((mesaData) => {
       this.tables.push({
          id: mesaData.payload.doc.id,
         data: mesaData.payload.doc.data()
      })
     });
    })
  }

  selectedTable(table:object) {
    // console.log(table);
    this.comunication.sendSelectedTable(table);
  }
}
