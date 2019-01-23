import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import {HttpClientModule}    from '@angular/common/http';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

import {AppRoutingModule}     from './app-routing.module';

import {AppComponent}         from './app.component';
import {DashboardComponent}   from './dashboard/dashboard.component';
import {HeroDetailComponent}  from './hero-detail/hero-detail.component';
import {HeroesComponent}      from './heroes/heroes.component';
import {HeroSearchComponent}  from './hero-search/hero-search.component';
import {MessagesComponent}    from './messages/messages.component';
import {SnippetDetailComponent} from './snippet-detail/snippet-detail.component';
import {
    MatListModule, MatCardModule, MatChipsModule, MatSidenavModule, MatFormField,
    MatFormFieldModule, MatIconModule, MatAutocompleteModule, MatInputModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FilterComponent } from './filter/filter.component';
import { SuggestedfilterComponent } from './suggestedfilter/suggestedfilter.component';
import { PageComponent } from './page/page.component';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        MatChipsModule,
        MatCardModule,
        MatListModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatAutocompleteModule,
        ReactiveFormsModule

    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        HeroSearchComponent,
        SnippetDetailComponent,
        SearchResultsComponent,
        SearchBoxComponent,
        FilterComponent,
        SuggestedfilterComponent,
        PageComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
