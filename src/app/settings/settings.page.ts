import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

const themes = {
  autumn: {
    primary: '#3880ff',
    secondary: '#4D9078',
    tertiary: '#B4436C',
    light: '#FFFFFF',
    medium: '#FCD0A2',
    dark: '#000000'
  },
  night: {
    primary: '#3880ff',
    secondary: '#FCFF6C',
    tertiary: '#FE5F55',
    medium: '#BCC2C7',
    dark: '#FFFFFF',
    light: '#495867'
  },
};

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  buttonTheme: boolean;

  constructor(private router :Router, private theme: ThemeService) {
    //this.theme.storedThemeName.then((theme)=>{
     // if(!theme){
      //  this.buttonTheme = false 
      //}else{
      //  this.buttonTheme = theme 
     // }
      //console.log(this.buttonTheme)
      //this.changeTheme()
    //})
  }

  changeTheme(bool) {
    console.log(bool)
    if(!bool){
      this.theme.setTheme(themes['night'],true);
    }else{
      this.theme.setTheme(themes['autumn'],false);
    }
    //this.buttonTheme = !this.buttonTheme
  }

  ngOnInit() {
  }

  goToChangeName(){
    this.router.navigateByUrl('/change-name');
  }
}
