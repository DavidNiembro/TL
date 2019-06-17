import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../providers/data'
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public itineraries: Object;
  public data: DataProvider;

  constructor(
    private router :Router, 
    data: DataProvider,
    ){
    this.data = data

    
  }
  ionViewWillEnter(){
    this.loadItineraries()
    this.loadUser()
  }

  private loadItineraries(): Promise<string> {
    return new Promise<string> ((resolve, reject) => {
        this.data.loadItinerariesFromStorage().then(() => {
                resolve('Ok')
        }).catch(() => {
            reject('Ko')
        })
    })
  }


  
  private loadUser(): Promise<string> {
    return new Promise<string> ((resolve, reject) => {
        this.data.loadUserFromStorage().then(() => {
                resolve('Ok')
        }).catch(() => {
            reject('Ko')
        })
    })
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
  doRefresh(event): Promise<string>  {
    return new Promise<string> ((resolve, reject) => {
      this.data.loadItinerariesFromStorage().then(() => {
        event.target.complete();
        resolve('Ok')
      }).catch(() => {
          console.log('load.reject');
          event.target.complete();
          reject('Ko')
      })
    })
  }
}
