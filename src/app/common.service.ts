import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  apiUrl="http://localhost:3000/Books";

  constructor(private http:HttpClient) { }

  deleteBook(id)
  {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }


}
 