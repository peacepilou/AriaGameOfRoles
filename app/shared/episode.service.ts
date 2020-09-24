import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episodes } from '../models/Episodes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  url = '../../assets/episodes.json';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Episodes> {
    return this.http.get<Episodes>(this.url);
  }
}
