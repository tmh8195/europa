import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Concatenate two DataFrames',
      detail:"<pre class='prettyprint lang-python'>def MyFunction():\n\tThis is it </pre>"},
      { id: 12, name: 'Retrieve the unique values of a DataFrame Column',
      detail:"<pre class='prettyprint'>my_df['customers'].unique()</pre>" },
      { id: 13, name: 'Retrieve the unique values of a Series',
      detail:"<pre class='prettyprint lang-python'>my_df['customers'].unique()</pre>" },
      { id: 14, name: 'Calculate the mean of a DataFrame Column',
      detail:"<pre class='prettyprint'>my_df['cost'].mean()</pre>" },
      { id: 15, name: 'Magneta',
      detail:'This is it' },
      { id: 16, name: 'RubberMan',
      detail:'This is it' },
      { id: 17, name: 'Dynama',
      detail:'This is it' },
      { id: 18, name: 'Dr IQ',
      detail:'This is it' },
      { id: 19, name: 'Magma',
      detail:'This is it' },
      { id: 20, name: 'Tornado',
      detail:'This is it' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
