import { Component, OnInit } from '@angular/core';
// import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http'
import {CommonService} from '../../common.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  alert:boolean=false;
  

  // Default img preview
  workingPlaceholder = 'http://via.placeholder.com/640x360';

  apiUrl="http://localhost:3000/Books";
  apiData:any =[];

  constructor(private http:HttpClient, private CommonService:CommonService ) {}

  ngOnInit() {
    this.http.get(this.apiUrl).subscribe((data)=>{
      console.log(data)
      this.apiData=data;
    })
  }

  deleteBook(item){
    // this.apiData.splice(item-1,1)
    this.apiData = this.apiData.filter(e => e.id !== item)
    this.CommonService.deleteBook(item).subscribe((data)=>{
      // this.apiData=data;

      this.alert=true
    })
  }

  closeAlert() {
    this.alert=false
  }

}
