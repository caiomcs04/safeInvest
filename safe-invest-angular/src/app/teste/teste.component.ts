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

  constructor(
    private userService: UserService,
    private cmcService: CmcService
  ) {}

  ngOnInit(): void {
    this.cmcService.getCMC().subscribe((response: any) => {
      console.log(response);
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
  tokenQtd(item: any) {
    // item.value = item.value.slice(0,(item.value.length-18))
    // console.log(item.value)
    console.log(this.cont++);
    return item.value;
  }
}
