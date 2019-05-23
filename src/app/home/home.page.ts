import { Component } from '@angular/core';
import {DataProvider} from '../../providers/data'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public data : DataProvider
   
    constructor(private router :Router){
      this.data = new DataProvider();
    }

    goToItinerary(){
      this.router.navigate(['/add-itinerary']);
    }
}
