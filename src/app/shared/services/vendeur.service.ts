import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FireSQL } from 'firesql';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class VendeurService {

   dbq = new FireSQL(firebase.firestore());

  constructor(private firestore: AngularFirestore) {
    const citiesPromise = this.dbq.query(`
      SELECT *
      FROM users
      WHERE type = 'vendeur' 
      LIMIT 10
    `);
    console.log(citiesPromise);
  }

  getVendeurs() {
    return this.firestore.collection("users").snapshotChanges();
  }

  deleteVendeur(uid) {
    return this.firestore.collection('users').doc(uid).delete();
  }

  modifierVendeur(record) {
    return this.firestore.collection('users').doc(record.id).set(record);
  }

}
