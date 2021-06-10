import { User } from '../shared/classes/user';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { VendeurService } from '../shared/services/vendeur.service';
import { HttpClient } from '@angular/common/http';
import {DataTableDirective, DataTablesModule} from 'angular-datatables';

@Component({
  selector: 'app-vendeur',
  templateUrl: './vendeur.component.html',
  styleUrls: ['./vendeur.component.css']
})
export class VendeurComponent implements OnInit {

  dtElement: DataTableDirective;

  isDtInitialized:boolean = false;
  dtOptions: DataTables.Settings = {};
  vendeurs: User[] = [];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private userservice: VendeurService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.userservice.getVendeurs().subscribe(admin => {
      this.vendeurs = admin.map(item => {
        let uid = item.payload.doc.id;
        let data = item.payload.doc.data();
        return { uid, ...(data as {}) } as User;
      });
      if (this.isDtInitialized) {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
          this.dtTrigger.next();
        });
      } else {
        this.isDtInitialized = true
        this.dtTrigger.next();
      }
       this.vendeurs = this.vendeurs.filter(s => {
        return s.type == 'vendeur';
      })
      console.log(this.vendeurs);           
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  supp(uid){
    this.userservice.deleteVendeur(uid);
  }
}