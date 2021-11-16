import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoingeckoService {
  constructor(private httpClient: HttpClient) {}

  public findByTokens(tokens: any) {
    let tokenFilter = tokens[0].tokenName;
    if (tokens.length > 1) {
      console.log(tokens)
      tokens.forEach((token: any) => {
        tokenFilter = tokenFilter + '%2C' + token.tokenName;
      });
    }
    return this.httpClient.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${tokenFilter}&vs_currencies=usd,brl`
    );
  }
}
