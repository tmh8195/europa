import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {SnippetService} from '../snippet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService,
  private snippetService:SnippetService) { }

  ngOnInit() {
    // this.getHeroes();
    this.getSnippets()
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  // }

  getSnippets():void{
    this.snippetService.getSnippets()
        .subscribe(snippets=>console.log('snippets bam',snippets));
  }

}
