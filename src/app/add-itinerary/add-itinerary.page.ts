import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {SearchPage} from '../search/search.page';
import { OverlayEventDetail } from '@ionic/core';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data'
import { Itinerary } from '../models/itinerary';

@Component({
  selector: 'app-add-itinerary',
  templateUrl: './add-itinerary.page.html',
  styleUrls: ['./add-itinerary.page.scss'],
})
export class AddItineraryPage {

  public start : object;
  public end : object;
  public data: DataProvider;

  constructor(public modalController: ModalController,private router :Router, private storage: Storage) { 
    this.data = new DataProvider(storage);
  }
  
  async goToSearch() {
    
    const modal = await this.modalController.create({
      component: SearchPage,
    });

    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        this.start = detail.data;
      }
    });
    return await modal.present();

  }

  async goToSearchEnd() {
    const modal = await this.modalController.create({
      component: SearchPage,
    });
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        this.end = detail.data;
      }
    });
    return await modal.present();

  }

  saveIntinerary(){
    if(this.start&&this.end){
      this.data.getNewID().then((id)=>{
          this.data.save(new Itinerary(id,[this.start,this.end],false))
          this.router.navigate(['/']);
      })
    }
  }
}
