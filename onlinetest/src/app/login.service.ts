import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn:'root'
})

export class userData {

    aUrl = "https://mocki.io/v1/444df9a5-fca5-4c5f-bb99-9817f1370523";
       
    constructor(private http : HttpClient) { }
    
    user()
    {
            return this.http.get(this.aUrl)
    }
    
}
  