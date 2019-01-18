import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {SnippetService} from '../snippet.service';
import {Snippet} from '../snippet';
import {DomSanitizer} from '@angular/platform-browser';
import {StateService} from '../state.service';


@Component({
    selector: 'app-snippet-detail',
    templateUrl: './snippet-detail.component.html',
    styleUrls: ['./snippet-detail.component.css'],

})
export class SnippetDetailComponent implements OnInit {
    snippet: Snippet;
    page;

    constructor(private route: ActivatedRoute,
                private snippetService: SnippetService,
                private location: Location,
                private sanitizer: DomSanitizer,
                private stateService: StateService) {
        this.stateService.snippetId$.subscribe(
            id => this.getSnippet(id)
        )
    }

    ngOnInit() {
    }

    getSnippet(id): void {
        // const id = +this.route.snapshot.paramMap.get('id');
        // console.log('id', id);
        this.snippetService.getSnippet(id).subscribe(
            snippet => {
                this.snippet = snippet;
                console.log(this.snippet);
                this.page = this.sanitizer.bypassSecurityTrustHtml(this.snippet.code);
            })
    }


    goBack(): void {
        this.location.back();
    }

}
