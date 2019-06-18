export class Schedule {

    public from: Object;
    public sections: Object;
    public to: Object;
    public distance: string;

    constructor(from: Object,sections: Object,to: Object ){
        this.from = from;
        this.sections = sections;
        this.to = to;

    }
}