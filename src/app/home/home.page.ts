import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../providers/data'
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  
  public itineraries: Object;
  public data: DataProvider;

  constructor(private router :Router, data: DataProvider){
    this.data = data
    this.data.load().then(data=>{
      this.itineraries = data;
    });
  }
  ionViewWillEnter() {
    this.data.load().then(data=>{
      this.itineraries = data;
    });
  }
  
  goToItinerary(){
    this.router.navigate(['/add-itinerary']);
  }
  goToPageItinerary(id){
    this.router.navigateByUrl('/itinerary/'+ id);
  }
  goToSettings(){
    this.router.navigate(['/settings']);
  }
  doRefresh(event) {
    this.data.load().then(data=>{
      this.itineraries = data;
      event.target.complete();
    })
  }





}
