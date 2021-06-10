import { User } from '../shared/classes/user';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CategorieService } from '../shared/services/categorie.service';
import {DataTableDirective, DataTablesModule} from 'angular-datatables';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  dtElement: DataTableDirective;

  isDtInitialized:boolean = false;
  dtOptions: DataTables.Settings = {};
  categories: User[] = [];
  categorieForm: FormGroup;
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();
  submitted: boolean;

  constructor(private categorieservice: CategorieService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.categorieForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: [''],
  });
  
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.categorieservice.getCategories().subscribe(admin => {
      this.categories = admin.map(item => {
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
       
      console.log(this.categories);           
    });
    
  }

  get f() { return this.categorieForm.controls; }


  onSubmit() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.categorieForm.invalid) {
            return;
        }

        // display form values on success
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.categorieForm.value, null, 4));
        this.categorieservice.addCategories(this.categorieForm.value);
        this.categorieForm.reset();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  supp(uid){
    this.categorieservice.deleteCategorie(uid);
    this.router.navigate(['/categories']);
  }

}
