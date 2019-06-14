import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import {SearchPage} from './search/search.page';

import { IonicStorageModule } from '@ionic/storage';
import { DataProvider } from 'src/providers/data';
import { Network } from '@ionic-native/network/ngx';


@NgModule({
  declarations: [AppComponent,SearchPage],
  entryComponents: [SearchPage],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    DataProvider,
    Network
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
