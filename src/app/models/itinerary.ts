export class Itinerary {

    private id: Number;
    private stations: Object;
    private favorite: boolean;

    constructor(id: Number, stations: Object, favorite: boolean ){
        this.id = id
        this.stations = stations;
        this.favorite = favorite;
    }

    getStations(){
        return  this.stations
    }

    getID(){
        return  this.id
    }

    setStations(stations){
        this.stations = stations
    }

    getFavorite(){
        return  this.favorite
    }

    setFavorite(favorite){
        this.favorite= favorite
    }
}