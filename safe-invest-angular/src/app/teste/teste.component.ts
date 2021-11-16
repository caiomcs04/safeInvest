import { CoingeckoService } from './../service/coingecko.service';
import { TokensDbService } from './../service/tokens-db.service';
import { CmcService } from './../service/cmc.service';
import { UserService } from '../service/bsscan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss'],
})
export class TesteComponent implements OnInit {
  endereco: any;
  transacoes: any;
  tokens: any[] = [];
  tokensValues: any[] = [];

  constructor(
    private userService: UserService,
    private cmcService: CmcService,
    private tokensDbService: TokensDbService,
    private coingeckoService: CoingeckoService
  ) {}

  ngOnInit(): void {
    this.tokensDbService.findAll().subscribe((response: any) => {
      this.tokens = response;
      this.coingeckoService
        .findByTokens(this.tokens)
        .subscribe((response: any) => {
          this.tokensValues = Object.entries(response).map((e) => ({
            [e[0]]: e[1],
          }));
        });
    });
  }

  teste() {
    this.userService
      .getListOfBEP20TokenByAddress(this.endereco)
      .subscribe((response: any) => {
        this.transacoes = response.result;
        console.log(this.transacoes);
      });
  }
  cont = 0;

  timeConverter(time: any) {
    var a = new Date(time * 1000);
    var months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var timefinal =
      date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return timefinal;
  }

  usdValue(item: any) {
    let valusUsd =
      item.value.slice(0, item.value.length - 18) +
      '.' +
      item.value.slice(item.value.length - 18);

    let teste;

    this.tokensValues.forEach((token: any) => {
      if (Object.keys(token)[0] == item.tokenName.toLowerCase()) {
        console.log(parseFloat(valusUsd))
        let t =Object.values(token)
        //@ts-ignore
        return teste = parseFloat(valusUsd) * t[0].usd;
      }
     return  teste ="no";
    });
    return teste;
  }
}
