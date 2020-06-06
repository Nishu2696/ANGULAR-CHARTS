import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MybarservicesService {

  bardata = [];

  constructor() { }

  storedata(bardata){
    this.bardata.push(this.bardata);
  }

  retrivedata(){
    return this.bardata;
  }
}
