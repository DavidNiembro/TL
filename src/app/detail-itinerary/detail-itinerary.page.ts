import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-itinerary',
  templateUrl: './detail-itinerary.page.html',
  styleUrls: ['./detail-itinerary.page.scss'],
})
export class DetailItineraryPage implements OnInit {
  public itineraries: Object;

  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.itineraries = params;
  });
  }

  ngOnInit() {
  }

}
