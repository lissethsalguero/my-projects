import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
listTarjetas: any[] =[
  { titular: 'Omar Burgos', numeroTarjeta: '252525256262', fechaExpiracion: '11/23', cvv: '123'},
  { titular: 'Lisseth Dias', numeroTarjeta: '456554556554', fechaExpiracion: '11/23', cvv: '456'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
