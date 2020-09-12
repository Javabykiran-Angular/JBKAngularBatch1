import {Shape} from './shape'

export class Circle extends Shape  {
    radius:number;
    area:number;

    constructor(radius:number){
        super();
        this.radius=radius;
    }
    
    ShapeArea(){
        this.area=3.4*this.radius*this.radius;
    }
    display(){
        console.log(`
            --------------Circle area---------
            Radius is => ${this.radius}  
            & araea is => ${this.area} 
        `);
    }


}