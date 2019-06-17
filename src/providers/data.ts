import { Storage } from '@ionic/storage';
import {Injectable} from '@angular/core';
import { Itinerary } from './../app/models/itinerary'
import { User } from './../app/models/user'
import { Schedule } from './../app/models/schedule'

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DataProvider {
    private apiurl: string = 'http://transport.opendata.ch/v1/'


    private storage: Storage
    public itineraries: Itinerary[]
    public user: User
    public schedules: Schedule[]
    private httpClient: HttpClient


    constructor( storage: Storage, httpClient: HttpClient) {
        this.httpClient = httpClient
        this.storage = storage
        this.itineraries = []
        this.schedules = []
        this.user = new User('','');
    }
    public loadScheduleFromAPI(from,to): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.schedules = []
            this.httpClient.get(this.apiurl + `connections?from=${from}&to=${to}`).subscribe(
                data => { // API is responding, let's do it
                    this.storage.set('schedules', data).then(() => {
                            console.log('data from API stored')
                            resolve('Ok')
                    })
                },
                err => {
                    console.log('Load from API failed with error ' + err.message)
                    reject('API call failed')
                }
            )
        })
    }

    // Convert the json format stored in storage to array of Flower objects
    public loadScheduleFromStorage(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.schedules = []
            this.storage.get('schedules').then((data) => {
                data.connections.forEach((value) => {
                    console.log(value)
                    var sh = new Schedule(value.from,value.sections,value.to);
                    //var f = new Schedule(value.id, stringnames)
                    //f.size = value.size
                   this.schedules.push(sh)
                })
                console.log('loadFromStorage.resolve');
                resolve('Ok')
            }).catch(() => {
                console.log('loadFromStorage.reject');
                reject('Ko')
            })
        })
    }
    public save(itinerary){
        this.storage.get('Itineraries').then((Itineraries)=>{
           if(Itineraries){
            Itineraries.push(itinerary)
             this.storage.set('Itineraries',Itineraries)
           }else{
               let Itineraries = []
            Itineraries.push(itinerary)
            this.storage.set('Itineraries',Itineraries)
           } 
       })
    }
    public loadItinerariesFromStorage(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.itineraries = []
            this.storage.get('Itineraries').then((data) => {
                data.forEach((value) => {
                    var it = new Itinerary(value.id, value.stations ,value.favorite)
                    this.itineraries.push(it)
                })
                resolve('Ok')
            }).catch(() => {
                reject('Ko')
            })
        })
    }
    storeNewID(ItinerariesID){
            if(ItinerariesID>=0){
                ItinerariesID = ItinerariesID + 1
            }else{
                ItinerariesID = 0
            }
            return this.storage.set('ItinerariesID',ItinerariesID)
    }
    public getNewID(){
        return this.storage.get('ItinerariesID').then((ItinerariesID)=>{
            return this.storeNewID(ItinerariesID).then(()=>{
                return this.storage.get('ItinerariesID');
            })
        })
    }
    public find(id){
        return this.storage.get('Itineraries').then((Itineraries)=>{
            return new Promise<any>((resolve, reject) => {
                Itineraries.forEach((itinerary) => {
                    if (itinerary.id == id) resolve(itinerary)
                })
                reject('Itin #' + id + ' not found')
            })
        })
    }
    public delete(id){
        return this.storage.get('Itineraries').then((Itineraries)=>{
            let test=[]
            Object.keys(Itineraries).forEach( (index) => {
                if(Itineraries[index].id!=id){
                    test.push(Itineraries[index])
                }
            });
            this.storage.set('Itineraries',test);

        })
    }
    public loadUserFromStorage(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.user = new User('','');
            this.storage.get('User').then((data) => {
                this.user = new User(data.firstname, data.lastname)
                resolve('Ok')
            }).catch(() => {
                reject('Ko')
            })
        })
    }
    public saveName(data){
        this.storage.get('User').then((name)=>{
            if(name){
                name.firstname= data.firstname
                name.lastname= data.lastname
                this.storage.set('User',name)
            }else{
                let name = {firstname:'',lastname:''}
                name.firstname = data.firstname
                name.lastname = data.lastname
                this.storage.set('User',name)
            } 
        })
    }
}