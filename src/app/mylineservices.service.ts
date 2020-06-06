import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MylineservicesService {
  linedata = [];

  constructor() { }

  storedata(linedata){
    this.linedata.push(this.linedata);
  }

  retrivedata(){
    return this.linedata;
  }
}
