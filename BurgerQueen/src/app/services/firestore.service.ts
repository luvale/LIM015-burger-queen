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
}
