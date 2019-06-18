import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProvider } from '../../providers/data';
import { RestApiService } from '../rest-api.service';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';

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
  public coordonnees: Object;
  
  constructor(public api: RestApiService, private geolocation: Geolocation,
    activatedRoute: ActivatedRoute, data: DataProvider, private router :Router) { 
    this.data = data
    this.route = activatedRoute
  }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.coordonnees = resp.coords
     }).catch((error) => {
       console.log('Error getting location', error);
     });
    
  }
  ionViewWillEnter(){
    let id = this.route.snapshot.paramMap.get('id');
    this.data.find(id).then((itinerary) => {
      this.itinerary = itinerary
      this.load(itinerary).then(()=>{
        this.data.schedules.forEach(element => {
          console.log(element);
          let lat1 = element.sections[0].departure.location.coordinate.x;
          let lng1 =element.sections[0].departure.location.coordinate.y;
          element.distance=this.get_distance_m(lat1,lng1,this.coordonnees,this.coordonnees);
        });
      })
    });
    
  }

  private load(itinerary): Promise<string> {
    return new Promise<string> ((resolve, reject) => {
        this.data.loadScheduleFromAPI(itinerary.stations[0].name,itinerary.stations[1].name).then(() => {
            this.data.loadScheduleFromStorage().then(() => {
                resolve('Ok')
            })
        }).catch(() => {
            this.data.loadScheduleFromStorage()
            reject('Ko')
        })
    })
  }

  doRefresh(event) {
   
      
      this.load(this.itinerary).then(()=>{
        this.data.schedules.forEach(element => {
          let lat1 = element.sections[0].departure.location.coordinate.x;
          let lng1 =element.sections[0].departure.location.coordinate.y;
          element.distance=this.get_distance_m(lat1,lng1,this.coordonnees,this.coordonnees);
          
        });
      })
    event.target.complete();
  }

  swapDirections(){
    let temp = this.itinerary.stations[0].name
    this.itinerary.stations[0].name = this.itinerary.stations[1].name
    this.itinerary.stations[1].name = temp;
    this.load(this.itinerary).then(()=>{
      this.data.schedules.forEach(element => {
        let lat1 = element.sections[0].departure.location.coordinate.x;
        let lng1 =element.sections[0].departure.location.coordinate.y;
        element.distance=this.get_distance_m(lat1,lng1,this.coordonnees,this.coordonnees);
      });
    })
    
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
  get_distance_m(lat1, lng1, lat2, lng2) {
    let earth_radius = 6378137;   // Terre = sphère de 6378km de rayon
    let rlo1 = this.deg2rad(lng1);
    let rla1 = this.deg2rad(lat1);
    let rlo2 = this.deg2rad(lng2.longitude);
    let rla2 = this.deg2rad(lat2.latitude);
    let dlo = (rlo2 - rlo1) / 2;
    let dla = (rla2 - rla1) / 2;
    let a = (Math.sin(dla) * Math.sin(dla)) + Math.cos(rla1) * Math.cos(rla2) * (Math.sin(dlo) * Math.sin(dlo));
    let d = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let distance = Math.round(earth_radius * d);
    if(distance>=1000){
      return  Math.round(distance / 1000) + " km";
    }else{
      return distance + " m";
    }
  }
  deg2rad(degrees)
  {
    var pi = Math.PI;
    return degrees * (pi/180);
  }
  
}
