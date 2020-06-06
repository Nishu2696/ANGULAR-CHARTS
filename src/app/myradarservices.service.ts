import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyradarservicesService {
  radardata = [];

  constructor() { }

  storedata(radardata){
    this.radardata.push(this.radardata);
  }

  retrivedata(){
    return this.radardata;
  }
}
