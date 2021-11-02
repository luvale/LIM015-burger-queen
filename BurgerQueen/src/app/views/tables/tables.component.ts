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
  
  constructor(
    private service: FirestoreService
    ) {
      // this.tables.forEach((table) => console.log(table.data.status))
    }

  ngOnInit(): void {
    this.getTables();
  }

  getTables() {
   this.service.getTables().subscribe((data) => {
     // console.log(data);
     this.tables = [];
     data.forEach((mesaData) => {
       this.tables.push({
          id: mesaData.payload.doc.id,
         data: mesaData.payload.doc.data()
      })
     });
     // console.log(this.tables);
    })
  }
  updateTableStatus (id:string, status:boolean) {
   this.service.updateTableStatus(id, (status = !status))
  }

}
