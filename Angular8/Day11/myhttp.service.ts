import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyhttpService {

  url:string="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) {   }

   getAllPost(){
      return ( this.http.get(this.url) );
   }

   PostData(obj){
      return ( this.http.post(this.url,obj) );
   }

   PostsDataUpdate(obj){
     return (this.http.put(this.url+"/"+obj.id,obj));
   }
   

}
