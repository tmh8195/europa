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
                this.tagCount=tagCount;
            }
        )
    }

    ngOnInit(): void {
    }
}
