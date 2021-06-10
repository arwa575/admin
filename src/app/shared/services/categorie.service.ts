import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private firestore: AngularFirestore) {
    
  }

  addCategories(record) {
    return this.firestore.collection("categories").add(record);
  }
  
  getCategories() {
    return this.firestore.collection("categories").snapshotChanges();
  }

  deleteCategorie(uid) {
    return this.firestore.collection('categories').doc(uid).delete();
  }

  modifierCategorie(record) {
    return this.firestore.collection('categories').doc(record.id).set(record);
  }
}
