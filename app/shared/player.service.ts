import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personnages } from '../models/Personages';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  url = '../../assets/players.json';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Personnages>{
    return this.http.get<Personnages>(this.url);
  }
}
