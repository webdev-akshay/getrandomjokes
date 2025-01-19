import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../service/joke.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  jokeList:any=[]=[]
  constructor(private jokeService:JokeService){}
  getJoke(){
    this.jokeService.getJokes().subscribe((data)=>{
      this.jokeList=data
    })
  }
  ngOnInit(): void {
    
  }
}
