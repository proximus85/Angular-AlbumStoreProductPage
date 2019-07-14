import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';
import {map} from "rxjs/operators";

@Injectable()
export class ProductService {

  private albumUrl = '../assets/album.json';

  constructor(private http: Http) {
  }

  getAlbum(id: number) {
    return this.http.get(this.albumUrl)
      .pipe(
        map((response) => response.json())
      );
  }
}
