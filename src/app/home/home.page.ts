import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../providers/data'
import { Router } from '@angular/router';
import { NetworkStatus } from '../connection'
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {
  
  public itineraries: Object;
  public data: DataProvider;
  public networkProvider: NetworkStatus;
  public networkStatus: Boolean;

  constructor(
    private router :Router, 
    data: DataProvider,
    networkProvider: NetworkStatus,
    private theme: ThemeService
    ){
    this.data = data
    this.networkProvider = networkProvider
    
  }
  ionViewWillEnter(){
    this.loadItineraries()
    this.loadUser()
    this.networkStatus = this.networkProvider.getStatus()

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
  goToPageStatistique(id){
    this.router.navigateByUrl('/statistiques/'+ id);
  }
  addStatistique(id){
    this.router.navigateByUrl('/add-statistiques/'+ id);
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
