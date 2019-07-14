import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Album} from "./album";

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) {
  }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl)
      .pipe(
        map((response) => <Album>response.json())
      );
  }
}
