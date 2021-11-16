import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokensDbService {


  constructor(private httpClient: HttpClient) { }

  public findAll () {
    return this.httpClient.get(`http://localhost:8080/token`)
  }
}
