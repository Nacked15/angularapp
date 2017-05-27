import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FavoritoService } from '../services/favorito.service';
import { Favorito } from '../models/favorito';
 
@Component({
    selector: 'favorito-add',
    templateUrl: 'app/views/favorito-add.html' 
})
 
export class FavoritoAddComponent implements OnInit {
    public title: string;
    public favorito: Favorito;

    constructor(){
        this.title = 'Nuevo Marcador.'
    }

    ngOnInit(){
        this.favorito = new Favorito("", "", "");
    }
 }