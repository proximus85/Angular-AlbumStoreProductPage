import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private albumUrl = '..assets/album.json';

  constructor(private http: Http) {
  }

  getAlbum(id: number) {
    return this.http.get(this.albumUrl)
      .map((response) => response.json())
  }

}
