import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {SnippetService} from '../snippet.service';
import {Snippet} from '../snippet';


@Component({
    selector: 'app-snippet-detail',
    templateUrl: './snippet-detail.component.html',
    styleUrls: ['./snippet-detail.component.css']
})
export class SnippetDetailComponent implements OnInit {
    snippet: Snippet;

    constructor(private route: ActivatedRoute,
                private snippetService: SnippetService,
                private location: Location) {
    }

    ngOnInit() {
        this.getSnippet();
    }

    getSnippet(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        console.log('id', id);
        this.snippetService.getSnippet(id).subscribe(
            snippet => {
                this.snippet = snippet
            })
    }

    goBack(): void {
        this.location.back();
    }

}
