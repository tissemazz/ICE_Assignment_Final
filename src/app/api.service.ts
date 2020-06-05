import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = '4d35534064b44bd983c605c6104b9c2a';

  constructor(private httpClient: HttpClient) { }

  public getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=au&category=sports&q=afl&apiKey=4d35534064b44bd983c605c6104b9c2a`);
  }

}
