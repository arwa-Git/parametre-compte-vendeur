import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordVendeurComponent } from './dashbord-vendeur/dashbord-vendeur.component';

const routes: Routes = [
  {path: "dashvend", component: DashbordVendeurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
