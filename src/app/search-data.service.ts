import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, BehaviorSubject} from 'rxjs';
import {SearchResult} from './search-result';
import {tap} from 'rxjs/internal/operators';
import {environment} from '../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class SearchDataService {

    constructor(private http: HttpClient) {
    }


    private searchURL = `${environment.apiUrl}/search/`;

    private searchResultSource = new BehaviorSubject(new SearchResult);
    searchResult$ = this.searchResultSource.asObservable();

    search(data){
        let searchRequest = this.http.post<SearchResult>(this.searchURL, data)
            .pipe(
                tap(_ => console.log('fetched snippets')),
                // catchError(error=>throwError(new Error('lol')))
            );

        searchRequest.subscribe(searchResult=>
            {
                this.searchResultSource.next(searchResult);
            }
        )

    }


    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }


}
