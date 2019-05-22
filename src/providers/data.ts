import { Storage } from '@ionic/storage';
import { Line } from '../app/models/line';

export class DataProvider {

   public lines: Line[];

   constructor() {
    this.init();
}
   init() {
       this.lines = [];
       let f = new Line('23','maillefers');
       this.lines.push(f);
       console.log(this.lines);
       
   }
   public store(){
    //this.storage.set('lines', this.lines)
   }
  
   public reload(){
       //this.storage.get('lines').then((data)=>{
        //   this.lines = data;
       //})
   }
   
}