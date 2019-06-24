import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../providers/data'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-statistiques',
  templateUrl: './add-statistiques.page.html',
  styleUrls: ['./add-statistiques.page.scss'],
})
export class AddStatistiquesPage implements OnInit {

  public delayed;
  public momentDelayed;
  public timeDelayed;
  public data: DataProvider;
  private route: ActivatedRoute;

  constructor( activatedRoute: ActivatedRoute, data: DataProvider,private router :Router) {
    this.delayed = "ontime";
    this.momentDelayed = "start";
    this.data = data
    this.route = activatedRoute
   }

  ngOnInit() {
  }

  selectDelayed(event) {
    this.delayed = event.detail.value;
  }
  selectMomentDelayed(event) {
    this.momentDelayed = event.detail.value;
  }
  addTimeDelay(event) {
    this.timeDelayed = event.target.value;
  }

  addStatistique(){
    let id = this.route.snapshot.paramMap.get('id');

    let statistiques = {
      "delayed" : this.delayed,
      "momentDelayed":this.momentDelayed,
      "timeDelayed":this.timeDelayed,
      "time": new Date()
    }
    this.data.saveStatistique(id, statistiques)
    this.router.navigateByUrl('/');
  }
}
