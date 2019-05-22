import { Component } from '@angular/core';
import {DataProvider} from '../../providers/data'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public data : DataProvider
   
    constructor(){
      this.data = new DataProvider();
    }
}
