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
    tags: string[] = [];
    suggestedFilters: TagCount[] = [];

    private snippetListSource = new BehaviorSubject([]);
    snippetList$ = this.snippetListSource.asObservable();

    private tagCountSource = new BehaviorSubject([]);
    tagCount$ = this.tagCountSource.asObservable();

    private filterSource = new BehaviorSubject([]);
    filter$ = this.filterSource.asObservable();

    constructor(private searchDataService: SearchDataService) {
        let allFilters = [new TagCount()];

        this.searchDataService.searchResult$.subscribe(
            searchResult => {
                if (searchResult) {
                    this.snippetListSource.next(searchResult.snippets);
                    // this.tagCountSource.next(searchResult.tagCount);
                    allFilters = searchResult.tagCount;
                    console.log('filters', allFilters);
                    this.suggestedFilters = searchResult.tagCount;
                    console.log('wot', this.suggestedFilters);
                }
            }
        )
    }


    search(term) {
        let data = {"term": term, "filters": this.tags};
        this.searchDataService.search(data);
    }





    // addFilter(filter){
    //     this.filters.push(filter);
    // //    this.search(term,filter)
    //
    // }
    //
    // addSuggestedFilter(filter){
    //     this.addFilter(filter);
    //     // this.suggestedFilters.remove()
    // }


}