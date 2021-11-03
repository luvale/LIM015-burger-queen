import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

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
  createOrder(cart:any[],precioTotal: number, comentario: string, mesa: object) {
    return this.firestore.collection('pedidos').add({
      cart,
      precioTotal,
      comentario,
      status: "Pendiente",
      hora: new Date(),
      mesa,
    })
  }
  getOrder() {
    return this.firestore.collection('pedidos').snapshotChanges();
  }
  updateOrderStatus(id: string) {
    return this.firestore.collection('pedidos').doc(id).update({status: "Listo"});
  }
}
