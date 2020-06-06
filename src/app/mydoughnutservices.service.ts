import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MydoughnutservicesService {

  doughnutdata = [];
  
  constructor() { }

  storedata(doughnutdata){
    this.doughnutdata.push(this.doughnutdata);
  }

  retrivedata(){
    return this.doughnutdata;
  }
}
