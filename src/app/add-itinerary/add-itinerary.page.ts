import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {SearchPage} from '../search/search.page';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-add-itinerary',
  templateUrl: './add-itinerary.page.html',
  styleUrls: ['./add-itinerary.page.scss'],
})
export class AddItineraryPage implements OnInit {

  public start : string;
  public end : string;

  constructor(public modalController: ModalController,private router :Router) { }

  ngOnInit() {
  }
  async goToSearch() {
    const modal = await this.modalController.create({
      component: SearchPage,
    });
    modal.onDidDismiss().then((detail: OverlayEventDetail) => {
      if (detail !== null) {
        this.start = detail.data.name;
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
        this.end = detail.data.name;
      }
  });
  return await modal.present();

  }
}
