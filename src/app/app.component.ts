import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}

  recogerTipoCerveza($event): void {
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
