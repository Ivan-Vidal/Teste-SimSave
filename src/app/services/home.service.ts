import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Products } from '../models/products'
import { retry, catchError } from 'rxjs/operators';
import { UtilsService } from '../services/utils.service'



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  

  constructor( private http: HttpClient, 
    private router: Router, private utils: UtilsService) { }

   public getDatas(): Observable<Products[]> {
      return this.http
      .get<Products[]>('https://teste-simsave.getsandbox.com/home',httpOptions)
      .pipe(retry(1), catchError(this.utils.handleError));
    }
     

} 

