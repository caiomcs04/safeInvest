import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KucoinService {

  constructor(public httpClient:HttpClient) { }

  public findByTokens(tokenName: any) {
    return this.httpClient.get(
      `http://localhost:7777/kucoin/${tokenName}` );
  }
}
