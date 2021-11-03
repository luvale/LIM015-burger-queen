import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {
  // constructor() { }
  @Output() disparador: EventEmitter<any> = new EventEmitter();
}
