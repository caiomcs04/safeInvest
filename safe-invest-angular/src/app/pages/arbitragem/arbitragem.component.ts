import { KucoinService } from "./../../service/kucoin.service";
import { PancakeService } from "./../../service/pancake.service";
import { Component, OnInit } from "@angular/core";

declare const google: any;

@Component({
  selector: "app-map",
  templateUrl: "arbitragem.component.html",
})
export class ArbitragemComponent implements OnInit {
  coin: string;
  pancake: any;
  kucoin: any;
  coinName: any;
  porcentagem: number;
  atualizacao: number;
  cont: number = 0;
  alertaSonoro = new Audio();

  constructor(
    public pancakeService: PancakeService,
    public kucoinService: KucoinService
  ) {}

  ngOnInit() {
    this.alertaSonoro.src = "../../../assets/som/eu-sou-rica.mp3";


  }

  pesquisar() {
    alert(`Programa rodando e atualizando a cada ${this.atualizacao} segundos`);
    this.getCoinsPrice();

    setInterval(() => {
      this.getCoinsPrice();
    }, this.atualizacao * 1000);
  }

  getCoinsPrice() {
    this.pancakeService.findByTokens(this.coin).subscribe((response: any) => {
      console.log("Atualização: " + ++this.cont);

      response = response.data;
      this.coinName = response.symbol.toUpperCase();
      this.pancake = parseFloat(response.price).toFixed(5);

      this.kucoinService
        .findByTokens(this.coinName)
        .subscribe((response: any) => {
          this.kucoin = parseFloat(response.data[this.coinName]).toFixed(5);

          if (this.kucoin < this.pancake) {
            let result = (this.kucoin * 100) / this.pancake;
            result = (result - 100) * -1;

            if (this.porcentagem <= result) {
              alert(`Kucoin MENOR dif de  ${result.toFixed(2)}%`);
              this.alertaSonoro.load();
              this.alertaSonoro.play();
            }
          } else {
            let result = (this.pancake * 100) / this.kucoin;
            result = (result - 100) * -1;
            if (this.porcentagem <= result) {
              alert(`Pancake MENOR dif de  ${result.toFixed(2)}%`);
              this.alertaSonoro.load();
              this.alertaSonoro.play();
            }
          }
        });
    });
  }

}
