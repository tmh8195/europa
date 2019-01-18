import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, BehaviorSubject} from 'rxjs';
import {Snippet} from './snippet';
import {TagCount} from './tag-count';
import {tap} from 'rxjs/internal/operators';
import {SearchResult} from './search-result';
import {SearchDataService} from './search-data.service';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    private snippetListSource = new BehaviorSubject([]);
    snippetList$ = this.snippetListSource.asObservable();

    private tagCountSource = new BehaviorSubject([]);
    tagCount$ = this.tagCountSource.asObservable();

    constructor(private searchDataService: SearchDataService) {
        this.searchDataService.searchResult$.subscribe(
            searchResult => {
                if (searchResult) {
                    this.snippetListSource.next(searchResult.snippets);
                    this.tagCountSource.next(searchResult.tagCount);
                }
            }
        )
    }


    search(term){
        this.searchDataService.search(term);
    }


}