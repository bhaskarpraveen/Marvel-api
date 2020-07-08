import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  character_url="https://gateway.marvel.com:443/v1/public/characters";
  comic_url="https://gateway.marvel.com:443/v1/public/comics"
  constructor(private _http: HttpClient) { }

  getCharacter(character){
      return this._http.get(this.character_url,{
        observe: 'body',
        params: new HttpParams().append('nameStartsWith',character).append('apikey','84307d3f0182b0a3b0ce4a62baf06afd').append('ts',Date.toString())
  })
  }
  getComic(comic){
    return this._http.get(this.comic_url,{
      observe: 'body',
      params: new HttpParams().append('titleStartsWith',comic).append('apikey','84307d3f0182b0a3b0ce4a62baf06afd').append('ts',Date.toString())
    })
  }

}
