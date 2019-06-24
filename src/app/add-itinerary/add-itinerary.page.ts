import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import {SearchPage} from '../search/search.page';
import { OverlayEventDetail } from '@ionic/core';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data'
import { Itinerary } from '../models/itinerary';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-add-itinerary',
  templateUrl: './add-itinerary.page.html',
  styleUrls: ['./add-itinerary.page.scss'],
})
export class AddItineraryPage {

  public start : object;
  public end : object;
  public data: DataProvider;
  public navCtrl: NavController;
  public isDisable: boolean

  constructor(public modalController: ModalController,private router :Router, private storage: Storage,private httpClient: HttpClient, navCtrl: NavController) { 
    this.data = new DataProvider(storage,httpClient);
    this.navCtrl = navCtrl;
    this.isDisable=true;
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
    this.buttonShouldBeDisable()
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
    this.buttonShouldBeDisable()
    return await modal.present();

  }
  buttonShouldBeDisable(){
    this.isDisable = this.start && this.end ? true : false
  }

  saveIntinerary(){
    if(this.start&&this.end){
      this.data.getNewID().then((id)=>{
          this.data.save(new Itinerary(id,[this.start,this.end],false, new Array))
          this.router.navigateByUrl('/');
      })
    }
  }
}
