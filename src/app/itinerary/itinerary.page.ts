import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProvider } from '../../providers/data';
import { RestApiService } from '../rest-api.service';
import { Router } from '@angular/router';

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

  constructor(public api: RestApiService, activatedRoute: ActivatedRoute, data: DataProvider, private router :Router) { 
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
          console.log(res.connections[0].sections)
        }, err => {
          console.log(err);
        });
    
  }
  doRefresh(event) {
    let id = this.route.snapshot.paramMap.get('id');
    this.data.find(id).then((itinerary) => {
      this.itinerary = itinerary
      this.search(itinerary);
      event.target.complete();
    });
    
   }
   swapDirections(){
     
   }
   remove(){
    let id = this.route.snapshot.paramMap.get('id');
    this.data.delete(id);
    this.router.navigateByUrl('/');

    }
    goToDetails(data){
        this.router.navigate(['/detail'], {
            queryParams: data,
        });
    }
}
