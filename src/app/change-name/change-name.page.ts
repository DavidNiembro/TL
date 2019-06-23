import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../../providers/data'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-change-name',
  templateUrl: './change-name.page.html',
  styleUrls: ['./change-name.page.scss'],
})
export class ChangeNamePage implements OnInit {
  public data: DataProvider;

  constructor(data: DataProvider,private router :Router) { 
    this.data = data
  }
  ionViewWillEnter(){
    this.loadUser()
  }
  private loadUser(): Promise<string> {
    return new Promise<string> ((resolve, reject) => {
        this.data.loadUserFromStorage().then(() => {
                
                resolve('Ok')
        }).catch(() => {
            console.log('load.reject');
            reject('Ko')
        })
    })
  }
  ngOnInit() {
  }
  saveName(form: NgForm){
    this.data.saveName(form.value)
    this.router.navigateByUrl('/home');
  }
}
