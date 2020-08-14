import { Component, OnInit } from '@angular/core';
import { BaresService } from 'src/app/services/bares.service';
import { ActivatedRoute } from '@angular/router';
import { Local } from 'src/app/models/local.model';

@Component({
  selector: 'app-vista-local',
  templateUrl: './vista-local.component.html',
  styleUrls: ['./vista-local.component.css'],
})
export class VistaLocalComponent implements OnInit {
  local: Local[];
  constructor(
    private baresService: BaresService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // this.local = this.baresService.getLocalById(Number(params.localId));
    });
  }
}
