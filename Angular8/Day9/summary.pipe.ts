
// Decorator= Pipe -
// It give info about the Pipe

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"summary"
})

export class PipeSummary implements PipeTransform {
    
    transform(value: any,startindex?:number,endindex?:number) {

        if(!value){
            return null;
        }
        let temp=(<string>value);
        
        // return (temp.substring(0,5)+" ...");
        let minrange=(startindex)?startindex:0;
        let maxrange=(endindex)?endindex:10;
        return (temp.substring(minrange,maxrange)+" ...");
        
    }


}