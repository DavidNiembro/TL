import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  classrooms: any;

  constructor(public api: RestApiService, public loadingController: LoadingController) { 
  }

  ngOnInit() {
    this.search('');
  }


  async search(event) {
    if(event.srcElement.value!=""){
    const loading = await this.loadingController.create();
    //await loading.present();
    await this.api.getClassroomById(event.srcElement.value)
      .subscribe(res => {
        console.log(res);
        this.classrooms = res.stations;
        //loading.dismiss();
      }, err => {
        console.log(err);
        //loading.dismiss();
      });
  }
  }
}
