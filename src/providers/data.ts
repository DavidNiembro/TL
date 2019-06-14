import { Storage } from '@ionic/storage';
import {Injectable} from '@angular/core';
import { Itinerary } from './../app/models/itinerary'
@Injectable()
export class DataProvider {
    private storage: Storage

    constructor( storage: Storage) {
        this.storage = storage
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
    load(){
        return this.storage.get('Itineraries');
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
                reject('Flower #' + id + ' not found')
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
}