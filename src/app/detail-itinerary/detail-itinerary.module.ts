import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailItineraryPage } from './detail-itinerary.page';

const routes: Routes = [
  {
    path: '',
    component: DetailItineraryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailItineraryPage]
})
export class DetailItineraryPageModule {}
