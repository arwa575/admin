import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private firestore: AngularFirestore) {
    
  }

  addProduits(record) {
    return this.firestore.collection("produits").add(record);
  }
  
  getProduits() {
    return this.firestore.collection("produits").snapshotChanges();
  }

  deleteProduit(uid) {
    return this.firestore.collection('produits').doc(uid).delete();
  }

  modifierProduit(record) {
    return this.firestore.collection('produits').doc(record.id).set(record);
  }
}
