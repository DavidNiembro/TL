import {Injectable} from '@angular/core';
import { Network } from '@ionic-native/network/ngx';

@Injectable()
export class NetworkStatus {
    constructor(private network: Network){
    }
    getStatus(){
       return this.network.type !== 'none' ? true: false;
    }
}