import { User } from '../shared/classes/user';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ClientService } from '../shared/services/client.service';
import { HttpClient } from '@angular/common/http';
import {DataTableDirective, DataTablesModule} from 'angular-datatables';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  dtElement: DataTableDirective;

  isDtInitialized:boolean = false;
  dtOptions: DataTables.Settings = {};
  clients: User[] = [];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private userservice: ClientService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.userservice.getClients().subscribe(admin => {
      this.clients = admin.map(item => {
        let uid = item.payload.doc.id;
        let data = item.payload.doc.data();
        return { uid, ...(data as {}) } as User;
      });      
       this.clients = this.clients.filter(s => {
        return s.type == 'client';
      })
      console.log(this.clients);           
    });
    
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  supp(uid){
    this.userservice.deleteClient(uid);
  }

}
