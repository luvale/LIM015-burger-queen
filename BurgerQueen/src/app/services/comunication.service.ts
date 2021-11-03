import { EventEmitter, Injectable, Output} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {
  // constructor() {}
 // @Output() disparador: EventEmitter<any> = new EventEmitter();
 disparador = new BehaviorSubject({});
 disparadorObservable = this.disparador.asObservable();

 sendSelectedTable(table:Object) {
  this.disparador.next(table);
 }
}
