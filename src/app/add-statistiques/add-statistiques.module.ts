import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddStatistiquesPage } from './add-statistiques.page';

const routes: Routes = [
  {
    path: '',
    component: AddStatistiquesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddStatistiquesPage]
})
export class AddStatistiquesPageModule {}
