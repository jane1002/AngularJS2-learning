import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]

})
export class HeroesComponent implements OnInit{

  selectedHero: Hero;
  heroes : Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(
      private router: Router,
      private heroService: HeroService) {
   // this.heroes = heroService.getHeroes();
  }

  getHeroes(): void{
    // this.heroService.getHeroes().then(data => this.heroes = data);
    this.heroService.getHeroes().then(data => this.heroes = data); //simulate a slow connection
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  ngOnInit():void {
    this.getHeroes();
  }
}





