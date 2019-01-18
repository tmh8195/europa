import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {Snippet} from '../snippet';
import {StateService} from '../state.service';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
    snippets: Snippet[];

    constructor(private searchService: SearchService,private stateService:StateService) {
        this.searchService.snippetList$.subscribe(
            snippets => {
                this.snippets = snippets;
            }
        )
    }

    ngOnInit() {
    }

    setSnippetId(id){
        this.stateService.setSnippetId(id);
    }

}
