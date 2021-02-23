import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { customers } from '../Models/Customers.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  apiBaseURL = 'http://127.0.0.1:5000/api/'
  noAuthHeader = { header: new HttpHeaders({ NoAuth: 'True' }) };
  selectedCustomer: customers = new customers();
  customer: customers[];

  constructor(private httpclient: HttpClient) { }

  fileUpload(fileItem:File, extraData?:object):any{
    let apiCreateEmdpoint = `${this.apiBaseURL}Customers`
    const formData: FormData = new FormData();
    formData.append('fileItem', fileItem, fileItem.name);

    if(extraData)
    {
      for(let key in extraData)
      {
        formData.append(key, extraData[key])
      }
    }
    const req = new HttpRequest('POST', apiCreateEmdpoint,formData, {
      reportProgress: true
    });
    return this.httpclient.request(req)
  }

  getData() {
    return this.httpclient.get('http://localhost:5000/api/supplier11');
  }
}
