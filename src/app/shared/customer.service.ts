import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Customer } from './customer';


@Injectable()
export class CustomerService {
    apiUrl: string  = 'https://www.primefaces.org/data/customers';

    public resultados: Customer[]=[];
  
    constructor(private http: HttpClient) {}

    getCustomersSmall() {
      return this.http
          .get<any>('assets/showcase/data/customers-small.json')
          .toPromise()
          .then((res) => <Customer[]>res.data)
          .then((data) => {
              return data;
          });
  }

  getCustomersMedium() {
      return this.http
          .get<any>('assets/showcase/data/customers-medium.json')
          .toPromise()
          .then((res) => <Customer[]>res.data)
          .then((data) => {
              return data;
          });
  }

  getCustomersLarge() {
      return this.http
          .get<any>('assets/showcase/data/customers-large.json')
          .toPromise()
          .then((res) => <Customer[]>res.data)
          .then((data) => {
              return data;
          });
  }

  getCustomersXLarge() {
      return this.http
          .get<any>('assets/showcase/data/customers-xlarge.json')
          .toPromise()
          .then((res) => <Customer[]>res.data)
          .then((data) => {
              return data;
          });
  }

  getCustomers(params?: any) {
      return this.http.get<any>(this.apiUrl, { params: params }).toPromise();
  }

    obtenerCustomers(){
      const params = '';

      return this.http.get<Customer>(this.apiUrl);
        
    }
}