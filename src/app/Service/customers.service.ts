import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpclient: HttpClient) { }


  getData() {
    return this.httpclient.get('http://localhost:5000/api/supplier11');
  }
}
