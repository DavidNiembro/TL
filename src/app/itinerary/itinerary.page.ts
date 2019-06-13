import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProvider } from '../../providers/data';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.page.html',
  styleUrls: ['./itinerary.page.scss'],
})
export class ItineraryPage implements OnInit {
  
  public data: DataProvider;
  private route: ActivatedRoute
  public itinerary: any;
  public connections: any;

  constructor(public api: RestApiService, activatedRoute: ActivatedRoute, data: DataProvider) { 
    this.data = data
    this.route = activatedRoute
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.data.find(id).then((itinerary) => {
      this.itinerary = itinerary
      this.search(itinerary);
    });
    
  }
  async search(itinerary) {
      //await loading.present();
      await this.api.getConnection(itinerary.stations[0].name,itinerary.stations[1].name)
        .subscribe(res => {
          this.connections = res.connections;
          console.log(res)
        }, err => {
          console.log(err);
        });
    
  }
}
