import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  
  username: string = '';
  password: string = '';
  seleccionar: string = '';
  error: string = '';

  constructor( private router: Router ) {}

  ngOnInit(): void {}

  /* Comprobando si el usuario es un estudiante. */
  login() {
    if (this.seleccionar === 'estudiante') {
      // permitir el ingreso y redirigir al usuario a la sección correspondiente
      this.router.navigate(['reservas']);
    } else {
      // mostrar mensaje de error
      this.error =
        'Lo siento, solo los estudiantes de la carrera de sistemas tienen acceso a realizar reservas.';
    }
  }
}
