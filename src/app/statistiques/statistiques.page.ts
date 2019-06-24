import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { DataProvider } from '../../providers/data';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.page.html',
  styleUrls: ['./statistiques.page.scss'],
})
export class StatistiquesPage implements OnInit {

  public statistiques: any;
  public data: DataProvider;
  private route: ActivatedRoute

  constructor(route: ActivatedRoute, data: DataProvider, ) { 
    this.data = data
    this.route = route

  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    let id = this.route.snapshot.paramMap.get('id');
    this.data.find(id).then((itinerary) => {
        this.statistiques = itinerary.statistiques
    });
  }
}
