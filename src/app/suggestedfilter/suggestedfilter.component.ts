import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {Tag} from '../tag';

@Component({
    selector: 'app-suggestedfilter',
    templateUrl: './suggestedfilter.component.html',
    styleUrls: ['./suggestedfilter.component.css']
})
export class SuggestedfilterComponent implements OnInit {
    tagCount;

    constructor(private searchService: SearchService) {
        this.searchService.suggestedFilters$.subscribe(
            tagCount => {
                this.tagCount = tagCount;
            }
        );
        this._filter()
    }

    ngOnInit(): void {
    }

    addFilter(filter:Tag) {
        this.searchService.addFilter(filter);
    }

    _filter(){
     console.log(this.searchService.suggestedFilters)
    }

}
