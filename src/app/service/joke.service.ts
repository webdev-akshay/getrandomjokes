import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private apiUrl="https://v2.jokeapi.dev/joke/Coding"
  constructor(private http:HttpClient) { }

  getJokes(){
    return this.http.get(this.apiUrl);
  }
}
