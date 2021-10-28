import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Timestamp } from '@firebase/firestore-types';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }
   getTables() {
    return this.firestore.collection('mesas').snapshotChanges();
  }
  updateTableStatus(id: string, tableStatus: boolean) {
    return this.firestore.collection('mesas').doc(id).update({status: tableStatus});
  } 
  getMenu() {
    return this.firestore.collection('menu').snapshotChanges();
  }
  createOrder(cart:any[],precioTotal: number, comentario: string) {
    return this.firestore.collection('pedidos').add({
      cart,
      precioTotal,
      comentario,
      status: "pendiente",
      hora: new Date(),
    })
  }
}
