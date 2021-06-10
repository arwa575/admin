import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private firestore: AngularFirestore) {
    
  }
  
  getClients() {
    return this.firestore.collection("users").snapshotChanges();
  }

  deleteClient(uid) {
    return this.firestore.collection('users').doc(uid).delete();
  }

  modifierClient(record) {
    return this.firestore.collection('users').doc(record.id).set(record);
  }
}
