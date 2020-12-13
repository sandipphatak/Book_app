import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {FormGroup,FormControl,Validators} from '@angular/forms';
// import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  alert:boolean=false;

  url= 'http://localhost:3000/Books';
  
  booksForm= new FormGroup ({
    name: new FormControl(''),
    author: new FormControl(''),
    price: new FormControl(''),
  }) 

  constructor(private httpClient: HttpClient){} 

  callAPI(){
    console.log(this.booksForm.value)
    this.httpClient.post(this.url,this.booksForm.value).subscribe((data)=>{
    console.log(data);
    })
    this.alert=true;
  }

  closeAlert() {
    this.alert=false;
  }

  ngOnInit() {
  }


}

