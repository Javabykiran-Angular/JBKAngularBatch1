
import {Shape} from './shape';

export class Rectangle extends Shape{
    length:number;
    braedth:number;
    area:number

    constructor(l:number,b:number){
        super();
        this.length=l;
        this.braedth=b;
    }
    ShapeArea(){
        this.area=this.length*this.braedth;
    }

    display(){
        console.log(`
            --------------Rectangle area---------
            Length is => ${this.length}  
            Breadth is => ${this.braedth}
            & araea is => ${this.area} 
        `);
    }


}