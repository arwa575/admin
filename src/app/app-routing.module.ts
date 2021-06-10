import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { CommandeComponent } from './commande/commande.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './login/login.component';
import { OffresComponent } from './offres/offres.component';
import { ProduitComponent } from './produit/produit.component';
import { ProfilComponent } from './profil/profil.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { VendeurComponent } from './vendeur/vendeur.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AddProduitComponent } from './produit/add-produit/add-produit.component';
import { EditProduitComponent } from './produit/edit-produit/edit-produit.component';
import { AddOffreComponent } from './offres/add-offre/add-offre.component';
import { EditOffreComponent } from './offres/edit-offre/edit-offre.component';

const routes: Routes = [
 {path:'',redirectTo: '/login', pathMatch:'full'},
 {path:'login', component: LoginComponent},
 {
   path:'',
   component: LayoutsComponent,
   children:[
     {path:'', component: HomeComponent},
     {path:'home', component: HomeComponent},
     {path:'produits', component: ProduitComponent},
     {path:'profil', component: ProfilComponent},
     {path:'reclamation', component: ReclamationComponent},
     {path:'vendeurs', component: VendeurComponent},
     {path:'categories', component: CategorieComponent},
     {path:'offres', component: OffresComponent},
     {path:'add-offre', component: AddOffreComponent},
     {path:'edit-offre', component: EditOffreComponent},
     {path:'clients', component: ClientComponent},
     {path:'commandes', component: CommandeComponent},
     {path:'contact', component: ContactComponent},
     {path:'commentaires', component: CommentaireComponent},
     {path:'add-produit', component: AddProduitComponent},
     {path:'edit-produit', component: EditProduitComponent},
   ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
