import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Snippet} from './snippet';
import {tap, catchError} from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root'
})
export class SnippetService {

    // private snippetURL = 'https://calm-island-60429.herokuapp.com/snippets/';
    private snippetURL = 'http://localhost:8000/snippets/';

    constructor(private http: HttpClient) {
    }

    getSnippets(): Observable<Snippet[]> {
        return this.http.get<Snippet[]>(this.snippetURL)
            .pipe(
                tap(_ => console.log('fetched snippets')),
                // catchError(error=>throwError(new Error('lol')))
            );
    }

    getFilteredSnippets():Observable<Snippet[]>{
        let data = {"term":"Dataframe"};
        return this.http.post<Snippet[]>(this.snippetURL,data)
            .pipe(
                tap(_ => console.log('fetched snippets')),
                // catchError(error=>throwError(new Error('lol')))
            );
    }

    getSnippet(id:number):Observable<Snippet>{
        console.log('getSnippet');
      const url = `${this.snippetURL}${id}/`;
      return this.http.get<Snippet>(url).pipe(
          tap(_ => console.log(`fetched snippet${id}`))

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




