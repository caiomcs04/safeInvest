import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) { }

  public getListOfBEP20TokenByAddress (address: any) {
    return this.httpClient.get(`https://api.bscscan.com/api?module=account&action=tokentx&address=${address}&offset=5&startblock=0&endblock=999999999&sort=asc&apikey=WMGF8PHKPY3QZS4DH64P1Q962BMTIKR8YS`)
  }
}
