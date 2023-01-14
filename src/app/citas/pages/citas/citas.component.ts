import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  reservas: any[] = [];

  constructor() { }

  ngOnInit(): void {
    let reservasString = localStorage.getItem("reservas");
    if (reservasString) {
      this.reservas = JSON.parse(reservasString);
    }
  }

}


