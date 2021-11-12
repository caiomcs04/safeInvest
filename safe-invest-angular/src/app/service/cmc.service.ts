import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CmcService {

  constructor(private httpClient: HttpClient) { }

   headers: any = new HttpHeaders({
    'X-CMC_PRO_API_KEY': '  29fd6ea7-0ca5-4b98-851d-f5d1ab818f50'
});

public getCMC () {
  return this.httpClient.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD", this.headers)
}

}
