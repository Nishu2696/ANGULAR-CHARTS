import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MypieservicesService {
  piedata = [];

  constructor() { }

  storedata(piedata){
    this.piedata.push(this.piedata);
  }

  retrivedata(){
    return this.piedata;
  }
}
