import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PancakeService {
  constructor(private httpClient: HttpClient) {}


  public findByTokens(token: any) {
    return this.httpClient.get(
      `http://localhost:7777/pancake/${token}` );
  }
}
