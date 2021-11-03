import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {
  // constructor() {}
 disparador = new BehaviorSubject({});
 disparadorObservable = this.disparador.asObservable();

 sendSelectedTable(table:Object) {
  this.disparador.next(table);
 }
}
