import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product.model';
import { Order } from './order.model';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const PROTOCOL = 'http';
const PORT = 3500;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RestDataSource {
  baseUrl: string;

  constructor(
    private http: HttpClient) {
    // this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    this.baseUrl = 'api/products';
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      catchError(this.handleError('getProducts', []))
    );
  }


  saveOrder(order: Order): Observable<Order> {
    return <Observable<Order>>this.http.post('api/orders', order, httpOptions);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }
  // constructor(private http: Http) {
  //   this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  // }

  // getProducts(): Observable<Product[]> {
  //   return this.sendRequest(RequestMethod.Get, 'products');
  // }

  // saveOrder(order: Order): Observable<Order> {
  //   return this.sendRequest(RequestMethod.Post, 'orders', order);
  // }

  // private sendRequest(
  //   verb: RequestMethod,
  //   url: string,
  //   body?: Product | Order
  // ): Observable<Product | Order> {
  //   return this.http
  //     .request(
  //       new Request({
  //         method: verb,
  //         url: this.baseUrl + url,
  //         body: body
  //       })
  //     )
  //     .map(response => response.json());
  // }
}
