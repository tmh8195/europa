import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';

@Component({
    selector: 'app-suggestedfilter',
    templateUrl: './suggestedfilter.component.html',
    styleUrls: ['./suggestedfilter.component.css']
})
export class SuggestedfilterComponent implements OnInit {
    tagCount;

    constructor(private searchService: SearchService) {
        this.searchService.tagCount$.subscribe(
            tagCount => {
                this.tagCount = tagCount;
            }
        );
        this._filter()
    }

    ngOnInit(): void {
    }

    addFilter(name: string) {
        this.searchService.tags.push(name);

        //Remove from suggestedFilters
        this.searchService.suggestedFilters = this.searchService.suggestedFilters.filter(function (obj) {
            return obj.tag.name !== name;
        });

    }

    _filter(){
     console.log(this.searchService.suggestedFilters)
    }

}
