import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { ClientComponent } from './client/client.component';
import { VendeurComponent } from './vendeur/vendeur.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { CommandeComponent } from './commande/commande.component';
import { ContactComponent } from './contact/contact.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { OffresComponent } from './offres/offres.component';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment';

import{AngularFireDatabaseModule} from '@angular/fire/database';
import{AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import{AngularFireModule}from '@angular/fire';
import{AngularFireAuth} from '@angular/fire/auth';
import { CategorieComponent } from './categorie/categorie.component';
import { AuthService } from './shared/services/auth.service';
import { DataTablesModule } from "angular-datatables";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProduitComponent } from './produit/add-produit/add-produit.component';
import { EditProduitComponent } from './produit/edit-produit/edit-produit.component';
import { AddOffreComponent } from './offres/add-offre/add-offre.component';
import { EditOffreComponent } from './offres/edit-offre/edit-offre.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    ProduitComponent,
    ClientComponent,
    VendeurComponent,
    ReclamationComponent,
    CommandeComponent,
    ContactComponent,
    CommentaireComponent,
    OffresComponent,
    ProfilComponent,
    LoginComponent,
    CategorieComponent,
    AddProduitComponent,
    EditProduitComponent,
    AddOffreComponent,
    EditOffreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AngularFireAuth,
    AngularFirestore,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
