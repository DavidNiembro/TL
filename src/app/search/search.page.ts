import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  stations: any;

  constructor(public api: RestApiService, public loadingController: LoadingController,private modalController: ModalController) { 
  }

  ngOnInit() {
    this.search(null);
  }


  async search(event) {
    if(event!= null || event.srcElement.value!=""){
      const loading = await this.loadingController.create();
      //await loading.present();
      await this.api.getBusStationById(event.srcElement.value)
        .subscribe(res => {
          this.stations = res.stations;
          //loading.dismiss();
        }, err => {
          console.log(err);
          //loading.dismiss();
        });
    }
  }
  add(station){
       this.modalController.dismiss(station);
  }
}
