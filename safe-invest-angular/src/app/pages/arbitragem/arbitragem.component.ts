import { Chart } from "chart.js";
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
  diferenca: any;
  menor: any;
  horario: any = [];
  canvas: any;
  ctx;
  datasets: any;
  data: any = [];
  myChartData;
  clicked: boolean = true;
  clicked1: boolean = false;
  clicked2: boolean = false;

  constructor(
    public pancakeService: PancakeService,
    public kucoinService: KucoinService
  ) {}

  ngOnInit() {
    this.alertaSonoro.src = "../../../assets/som/alerta.mp3";

    var gradientChartOptionsConfigurationWithTooltipRed: any = {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },

      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.0)",
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 100,
              padding: 20,
              fontColor: "#9a9a9a",
            },
          },
        ],

        xAxes: [
          {
            barPercentage: 0.6,
            gridLines: {
              drawBorder: false,
              color: "rgba(233,32,16,0.1)",
              zeroLineColor: "transparent",
            },
            ticks: {
              padding: 20,
              fontColor: "#9a9a9a",
            },
          },
        ],
      },
    };

    var chart_labels = this.horario;

    this.canvas = document.getElementById("chartBig1");
    this.ctx = this.canvas.getContext("2d");

    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(233,32,16,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(233,32,16,0.0)");
    gradientStroke.addColorStop(0, "rgba(233,32,16,0)"); //red colors

    var config = {
      type: "line",
      data: {
        labels: chart_labels,
        datasets: [
          {
            label: "variação",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#ec250d",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#ec250d",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#ec250d",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.data,
          },
        ],
      },
      options: gradientChartOptionsConfigurationWithTooltipRed,
    };
    this.myChartData = new Chart(this.ctx, config);
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

          var gradientChartOptionsConfigurationWithTooltipRed: any = {
            maintainAspectRatio: false,
            legend: {
              display: false,
            },

            tooltips: {
              backgroundColor: "#f5f5f5",
              titleFontColor: "#333",
              bodyFontColor: "#666",
              bodySpacing: 4,
              xPadding: 12,
              mode: "nearest",
              intersect: 0,
              position: "nearest",
            },
            responsive: true,
            scales: {
              yAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.0)",
                    zeroLineColor: "transparent",
                  },
                  ticks: {
                    suggestedMin: 60,
                    suggestedMax: 125,
                    padding: 20,
                    fontColor: "#9a9a9a",
                  },
                },
              ],

              xAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(233,32,16,0.1)",
                    zeroLineColor: "transparent",
                  },
                  ticks: {
                    padding: 20,
                    fontColor: "#9a9a9a",
                  },
                },
              ],
            },
          };


          var gradientBarChartConfiguration: any = {
            maintainAspectRatio: false,
            legend: {
              display: false,
            },

            tooltips: {
              backgroundColor: "#f5f5f5",
              titleFontColor: "#333",
              bodyFontColor: "#666",
              bodySpacing: 4,
              xPadding: 12,
              mode: "nearest",
              intersect: 0,
              position: "nearest",
            },
            responsive: true,
            scales: {
              yAxes: [
                {
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.1)",
                    zeroLineColor: "transparent",
                  },
                  ticks: {
                    suggestedMin: 60,
                    suggestedMax: 120,
                    padding: 20,
                    fontColor: "#9e9e9e",
                  },
                },
              ],

              xAxes: [
                {
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.1)",
                    zeroLineColor: "transparent",
                  },
                  ticks: {
                    padding: 20,
                    fontColor: "#9e9e9e",
                  },
                },
              ],
            },
          };

          var chart_labels = this.horario;

          this.canvas = document.getElementById("chartBig1");
          this.ctx = this.canvas.getContext("2d");

          var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

          gradientStroke.addColorStop(1, "rgba(233,32,16,0.2)");
          gradientStroke.addColorStop(0.4, "rgba(233,32,16,0.0)");
          gradientStroke.addColorStop(0, "rgba(233,32,16,0)"); //red colors

          var config = {
            type: "line",
            data: {
              labels: chart_labels,
              datasets: [
                {
                  label: "Porcentagem",
                  fill: true,
                  backgroundColor: gradientStroke,
                  borderColor: "#ec250d",
                  borderWidth: 2,
                  borderDash: [],
                  borderDashOffset: 0.0,
                  pointBackgroundColor: "#ec250d",
                  pointBorderColor: "rgba(255,255,255,0)",
                  pointHoverBackgroundColor: "#ec250d",
                  pointBorderWidth: 20,
                  pointHoverRadius: 4,
                  pointHoverBorderWidth: 15,
                  pointRadius: 4,
                  data: this.data,
                },
              ],
            },
            options: gradientChartOptionsConfigurationWithTooltipRed,
          };
          this.myChartData = new Chart(this.ctx, config);

          if (this.kucoin < this.pancake) {
            const current = new Date();
            let result = (this.kucoin * 100) / this.pancake;
            result = (result - 100) * -1;

            this.diferenca = result.toFixed(2) + "%";
            this.menor = "Kucoin";
            this.data.push(100 * Number(result.toFixed(2)));
            this.horario.push(current.getHours().toString()+":"+current.getMinutes().toString())

            if (this.porcentagem <= result) {
              // this.alertaSonoro.load();
              // this.alertaSonoro.play();
            }
          } else {
            const current = new Date();
            let result = (this.pancake * 100) / this.kucoin;
            result = (result - 100) * -1;

            this.diferenca = result.toFixed(2) + "%";
            this.menor = "Pancake";
            this.data.push(100 * Number(result.toFixed(2)));
            this.horario.push(current.getHours().toString()+":"+current.getMinutes().toString())

            if (this.porcentagem <= result) {
              this.alertaSonoro.load();
              this.alertaSonoro.play();
            }
          }
        });
    });
  }

  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }
}
