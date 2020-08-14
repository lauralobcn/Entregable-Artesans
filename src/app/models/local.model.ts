import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

export class Local {
  id: number;
  nombre: string;
  imagen: string;
  direccion: string;
  ciudad: string;
  distrito: string;
  tipoCerveza: string;
  tipoProcedencia: string;

  constructor(
    pId,
    pNombre,
    pImagen,
    pDireccion,
    pCiudad,
    pDistrito,
    pTipoCerveza,
    pProcedencia
  ) {
    this.id = pId;
    this.nombre = pNombre;
    this.imagen = pImagen;
    this.direccion = pDireccion;
    this.ciudad = pCiudad;
    this.distrito = pDistrito;
    this.tipoCerveza = pTipoCerveza;
    this.tipoProcedencia = pProcedencia;
  }
}
