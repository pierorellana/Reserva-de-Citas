import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css'],
})
export class ReservasComponent implements OnInit {
  /* Declarar las variables que se utilizarán en el componente. */
  horas: string[] = [
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
  ];
  nombre: string = '';
  edad: number = 18;
  email: string = '';
  fecha = new FormControl('', [
    Validators.required,
    (control: FormControl) => this.validarFechaHora(control),
  ]);
  hora: string = '';
  invitadoNombre: string = '';
  invitadoCorreo: string = '';
  invitados: any[] = [];
  reservas: any[] = [];
  minDate: Date;
  maxDate: Date;

  constructor() {
    this.minDate = new Date();
    this.maxDate = new Date();
  }

  /**
   * Establezca la fecha mínima para el próximo lunes y la fecha máxima para el próximo viernes.
   */
  ngOnInit(): void {
    let firstMonday = new Date();
    while (firstMonday.getUTCDay() !== 1) {
      firstMonday.setDate(firstMonday.getDate() + 1);
    }
    // Obtener el ultimo Viernes disponible para reservar
    let lastFriday = new Date();
    while (lastFriday.getUTCDay() !== 5) {
      lastFriday.setDate(lastFriday.getDate() + 1);
    }
    // Establecer las fechas minimas y maximas para reservar
    this.minDate = firstMonday;
    this.maxDate = lastFriday;
  }

  /**
   * Si el valor del control es menor a 18, devuelve un objeto con clave edadInvalida y valor true. De
   * lo contrario, devuelve nulo
   * @param {FormControl} control - FormControl - El control para validar.
   * @returns Una función que toma como parámetro un FormControl y devuelve un objeto con clave
   * edadInvalida y valor true si el valor del FormControl es menor que 18.
   */
  validarEdad(control: FormControl): { [s: string]: boolean } | null {
    if (control.value < 18) {
      return { edadInvalida: true };
    }
    return null;
  }

  /**
   * Valida que la fecha sea entre lunes y viernes, y que la hora sea entre las 9:00 y las 15:00 los
   * lunes, martes, miércoles y jueves, y entre las 10:00 y las 14:00 el viernes
   * @param {FormControl} control - FormControl - El control a validar.
   * @returns return { rango Invalido: true };
   */
  validarFechaHora(control: FormControl): { [s: string]: boolean } | null {
    let fecha = new Date(control.value);
    let dia = fecha.getUTCDay();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let fechaHora = new Date(fecha.setHours(hora, minutos));
    if (dia >= 1 && dia <= 4) {
      if (hora < 9 || hora > 15) {
        return { rangoInvalido: true };
      }
    }
    if (dia == 5) {
      if (hora < 10 || hora > 14) {
        return { rangoInvalido: true };
      }
    }
    if (dia > 5) {
      return { rangoInvalido: true };
    }
    return null;
  }

 /**
  * Si el usuario ha ingresado un nombre y correo electrónico, y aún no hay un invitado con ese nombre
  * o correo electrónico, agregue el invitado a la lista
  */
  agregarInvitado() {
    if (this.invitadoNombre && this.invitadoCorreo) {
      this.invitados.push({
        nombre: this.invitadoNombre,
        correo: this.invitadoCorreo,
      });
    }

    let invitadoExistente = this.invitados.filter(
      (invitado) =>
        invitado.nombre === this.invitadoNombre ||
        invitado.correo === this.invitadoCorreo
    );

    // si no existe un invitado con el mismo nombre o correo, agregar el invitado
    if (invitadoExistente.length === 0) {
      if (this.invitadoNombre && this.invitadoCorreo) {
        this.invitados.push({
          nombre: this.invitadoNombre,
          correo: this.invitadoCorreo,
        });
      }
    } else {
      // si ya existe un invitado con el mismo nombre o correo, mostrar un mensaje de error
      console.log('Ya existe un invitado con ese nombre o correo');
    }
  }

  validarInvitados() {
    return this.invitados.length >= 3;
  }

  /**
   * Obtiene los datos del formulario, obtiene las reservas existentes del almacenamiento local, agrega
   * la nueva reserva a las existentes y luego guarda la nueva matriz de reservas en el almacenamiento
   * local.
   */
  agregarReserva() {
    // obtener los datos del formulario
    let reserva = {
      nombre: this.nombre,
      edad: this.edad,
      email: this.email,
      fecha: this.fecha.value,
      hora: this.hora,
      invitados: this.invitados,
    };
    // obtener las reservas existentes en el almacenamiento local
    let reservasExistentes = JSON.parse(localStorage.getItem('reservas')!);
    if (reservasExistentes) {
      // agregar la nueva reserva a las existentes
      reservasExistentes.push(reserva);
      localStorage.setItem('reservas', JSON.stringify(reservasExistentes));
    } else {
      // crear un nuevo arreglo con la nueva reserva
      localStorage.setItem('reservas', JSON.stringify([reserva]));
    }
  }
}
