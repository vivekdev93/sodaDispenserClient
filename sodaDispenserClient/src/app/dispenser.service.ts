import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SodaType} from './soda-type';
import {Transactions} from './transactions';

@Injectable({
  providedIn: 'root'
})
export class DispenserService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/';
  }

  public findAllTypes(): Observable<SodaType[]> {
    return this.http.get<SodaType[]>(this.baseUrl + 'getTypes');
  }

  public getInventory(): Observable<Map<string, number>> {
    return this.http.get<Map<string, number>>(this.baseUrl + 'getInventory');
  }

  public getTransactions(): Observable<Transactions[]> {
    console.log(this.http.get<Transactions[]>(this.baseUrl + 'getAllTransactions'));
    return this.http.get<Transactions[]>(this.baseUrl + 'getAllTransactions');

  }

  public disepenseSoda(formData: any): Observable<string> {
    return this.http.get<string>(this.baseUrl + 'dispenseSoda?' + formData);
  }
}
