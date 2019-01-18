import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StateService {

    private snippetIdSource = new BehaviorSubject<number>(1);
    snippetId$ = this.snippetIdSource.asObservable();

    constructor() {
    }

    setSnippetId(id: number) {
        this.snippetIdSource.next(id)
    }

}
