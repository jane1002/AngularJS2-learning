/**
 * Created by YFAN on 10/21/2016.
 */

import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';


@Component ({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css' ]

})

export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];
    constructor(
        private router: Router,
        private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(data => this.heroes = data.slice(1, 5));
    }
    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}