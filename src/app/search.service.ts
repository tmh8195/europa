import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, BehaviorSubject} from 'rxjs';
import {Snippet} from './snippet';
import {TagCount} from './tag-count';
import {tap} from 'rxjs/internal/operators';
import {SearchResult} from './search-result';
import {SearchDataService} from './search-data.service';
import {Tag} from './tag';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    filters: Tag[] = [];
    suggestedFilters: TagCount[] = [];
    allFilters: TagCount[] = [];

    private snippetListSource = new BehaviorSubject([]);
    snippetList$ = this.snippetListSource.asObservable();

    private suggestedFilterSource = new BehaviorSubject([]);
    suggestedFilters$ = this.suggestedFilterSource.asObservable();

    private filterSource = new BehaviorSubject([]);
    filters$ = this.filterSource.asObservable();

    constructor(private searchDataService: SearchDataService) {

        this.searchDataService.searchResult$.subscribe(
            searchResult => {
                if (searchResult) {
                    this.snippetListSource.next(searchResult.snippets);
                    this.suggestedFilters = searchResult.tagCount;
                    this.suggestedFilterSource.next(this.suggestedFilters);
                }
            }
        )
    }


    search(term) {
        let data = {"term": term, "filters": this.filters.map(function (x:Tag){return x.name;})};
        console.log(data);
        this.searchDataService.search(data);
    }


    addFilter(filter: Tag) {
        this.filters.push(filter);
        this.filterSource.next(this.filters);
    }

    removeFilter(filter: Tag) {
        this.filters = this.filters.filter(x => x.name != filter.name);
        this.filterSource.next(this.filters);
    }

    addSuggestedFilter(filter: Tag) {
        this.addFilter(filter);

        this.suggestedFilters = this.suggestedFilters.filter(function (obj) {
            return obj.tag !== filter;
        });
        this.suggestedFilterSource.next(this.suggestedFilters)
    }


}