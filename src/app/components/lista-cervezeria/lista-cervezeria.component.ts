import { Component, OnInit } from '@angular/core';
import { Local } from '../../models/local.model';
import { BaresService } from '../../services/bares.service';
import { ActivatedRoute } from '@angular/router';
import { Cerveza } from 'src/app/models/cerveza.model';

@Component({
  selector: 'app-lista-cervezeria',
  templateUrl: './lista-cervezeria.component.html',
  styleUrls: ['./lista-cervezeria.component.css'],
})
export class ListaCervezeriaComponent implements OnInit {
  arrLocales: Local[];
  arrCerveza: Cerveza[];
  constructor(
    private baresService: BaresService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let tipoCerveza = '';
    this.activatedRoute.params.subscribe((params) => {
      tipoCerveza = params.tipoCerveza;
      if (tipoCerveza !== undefined) {
        this.arrCerveza = this.baresService.getLocalByTipo(tipoCerveza);
      } else {
        this.arrCerveza = this.baresService.getAllLocales();
      }
    });
    this.arrLocales = this.baresService.getAllLocales();
  }
}
