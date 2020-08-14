import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Local } from '../../models/local.model';

@Component({
  selector: 'app-buscador-cerveceria',
  templateUrl: './buscador-cerveceria.component.html',
  styleUrls: ['./buscador-cerveceria.component.css'],
})
export class BuscadorCerveceriaComponent implements OnInit {
  local: Local[];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  recogerTipoCerveza($event): void {
    // console.log($event.target.value);
    this.router.navigate(['/blog', $event.target.value]);
  }
  recogerProcedenciaCerveza($event): void {
    this.router.navigate(['/blog', $event.target.value]);
  }

  recogerCiudadCerveza($event): void {
    this.router.navigate(['/blog', $event.target.value]);
  }

  recogerDistritoCerveza($event): void {
    this.router.navigate(['/blog', $event.target.value]);
  }
}
