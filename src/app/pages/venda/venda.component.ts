import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {
  
  public produtosCliente = [];
  public vendas = [];

  public select?;

  constructor() { }

  ngOnInit(): void {
  }

}
