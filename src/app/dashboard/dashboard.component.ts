import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {SnippetService} from '../snippet.service';
import {Snippet} from '../snippet';
import {SearchService} from '../search.service';
import {Observable, Subject} from 'rxjs';

import {
    debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    snippets: Snippet [] = [];
    snippets$: Observable<Snippet[]>;
    private searchTerms = new Subject<string>();
    tagCount;

    constructor(private heroService: HeroService,
                private searchService: SearchService) {
    }

    ngOnInit() {
        // this.getHeroes();
        // this.snippets$ = this.searchTerms.pipe(
        //     // wait 300ms after each keystroke before considering the term
        //     debounceTime(100),
        //
        //     // ignore new term if same as previous term
        //     distinctUntilChanged(),
        //
        //     // switch to new search observable each time the term changes
        //     switchMap((term: string) => this.searchService.search(term)),
        // );
    }

    // getHeroes(): void {
    //   this.heroService.getHeroes()
    //     .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    // }

    // search(term: string): void {
    //     this.searchTerms.next(term);
    // }
    //
    // searchNow(term): void {
    //     this.searchService.search(term)
    //         .subscribe(data => {
    //             this.snippets = data.snippets;
    //             this.tagCount = data.tagCount;
    //             console.log(this.tagCount)
    //         });
    // }

}
