import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MybarservicesService } from '../mybarservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css']
})
export class AdddataComponent implements OnInit {
  barform;

  constructor(private fb: FormBuilder,
     private Mybarservices:MybarservicesService,
     private router: Router
     ) {
    this.barform = this.fb.group({
      year : this.fb.control(""),
      data1: this.fb.control(""),
      data2: this.fb.control("")
    });
  }

  ngOnInit(): void {
  }

  senddata(){
    console.log(this.barform.value);
    this.Mybarservices.storedata(this.barform.value);
    this.router.navigate(["/bar"]);
  }

}
