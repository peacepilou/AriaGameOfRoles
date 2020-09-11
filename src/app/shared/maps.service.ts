import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Maps } from '../models/Maps';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  url = '../../assets/maps.json';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Maps>{
    return this.http.get<Maps>(this.url);
  }
}
