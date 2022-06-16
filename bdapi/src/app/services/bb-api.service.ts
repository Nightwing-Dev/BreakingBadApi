import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BbApiService {

  constructor(private http: HttpClient) { }

  getAllCharacters() {
    return this.http.get<any>("https://www.breakingbadapi.com/api/characters/");

    }
  }

