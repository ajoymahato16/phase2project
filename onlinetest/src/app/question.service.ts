import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn:'root'
})

export class questionSet {

    aUrl = "https://mocki.io/v1/d5beba1b-0a85-4987-a6fc-84e935c64f68";
       
    constructor(private http : HttpClient) { }

    getQuestion()
    {
        return this.http.get(this.aUrl)
    }
    
}
  