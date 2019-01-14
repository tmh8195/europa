import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Snippet} from './snippet';
import {tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

    private searchURL = 'https://calm-island-60429.herokuapp.com/filter/';

    constructor(private http: HttpClient) {
    }

    search(term): Observable<Snippet[]> {
         let data = {"term":term};
        return this.http.post<Snippet[]>(this.searchURL,data)
            .pipe(
                tap(_ => console.log('fetched snippets')),
                // catchError(error=>throwError(new Error('lol')))
            );
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