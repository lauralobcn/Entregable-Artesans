import { Injectable } from '@angular/core';
import { Local } from '../models/local.model';
import { Cerveza } from '../models/cerveza.model';

@Injectable({
  providedIn: 'root',
})
export class BaresService {
  arrLocales: Local[];
  arrCerveza: Cerveza[];
  idActual: number;

  // Presentacion
  // cervezaLocal: string;
  // importada: string;
  // embotellada: string;

  constructor() {
    this.idActual = 4;
    this.arrLocales = [
      new Local(
        1,
        'El Drapaire de la Cervesa Artesana',
        './assets/images/drapaire1.PNG',
        'Carrer de les Sitges, 11, 08001',
        'Barcelona',
        'Ciutat Vella',
        'Embotellada',
        'Nacional/Importada'
      ),
      new Local(
        2,
        'Ølgod Craft Beer Bar',
        './assets/images/oglod2.PNG',
        'Carrer de lHospitalet, 74, 08001',
        'Barcelona',
        'Raval',
        'Barril',
        'Nacional/Importada'
      ),
      new Local(
        3,
        'IMPRFCTO',
        './assets/images/imperfecto1.PNG',
        'Avinguda del Paral·lel, 104, 08015 ',
        'Barcelona',
        'Poble Sec',
        'Embotellada',
        'Importada'
      ),
      new Local(
        4,
        'Artesans',
        './assets/images/artesans1PNG.PNG',
        ' Carrer de Casp, 162, 08013',
        'Barcelona',
        'Sants',
        'Barril',
        'Nacional'
      ),
    ];
    this.arrCerveza = [
      new Cervez1(),
      a('Embotellada'),
      new Cerveza(2, 'Barril'),
      new Cerveza(3, 'Embotellada'),
      new Cerveza(4, 'Barril'),
    ];
  }

  getAllLocales(): Local[] {
    return this.arrLocales;
  }

  getAllCerveza(): Cerveza[] {
    return this.arrCerveza;
  }

  getLocalById(pId): Local {
    // opcion 1
    let localSeleccionado: Local;
    for (const local of this.arrLocales) {
      if (local.id === pId) {
        localSeleccionado = local;
        break;
      }
    }
    return localSeleccionado;

    // opcion 2
    //  localSeleccionado = this.arrLocales.find(local => local.id === pId);
    //  return localSeleccionado;
  }

  addLocal(pLocal): void {
    pLocal.id = this.idActual;
    this.arrLocales.push(pLocal);
    this.idActual++;
  }

  getLocalByTipo(pTipoCerveza): Cerveza[] {
    const arrTipoCerveza = this.arrCerveza.filter(
      (local) => local.tipoCerveza === pTipoCerveza
    );
    return arrTipoCerveza;
  }
}
