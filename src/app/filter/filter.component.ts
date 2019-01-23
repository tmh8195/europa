import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent, MatIcon} from '@angular/material';
import {map, startWith} from 'rxjs/internal/operators';
import {SearchService} from '../search.service';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    separatorKeysCodes: number[] = [ENTER, COMMA];
    tagCtrl = new FormControl();
    filteredTags: Observable<string[]>;

    allTags: string[] = ['deep_learning',
        'python: basics',
        'computer_science',
        'model_evaluation',
        'scala: basics',
        'statistics',
        'data_wrangling',
        'vectors_matrices_and_arrays',
        'web_scraping',
        'preprocessing_text',
        'algorithms',
        'patterns',
        'data_visualization',
        'naive_bayes',
        'machine_learning: basics',
        'python',
        'keras',
        'nearest_neighbors',
        'postgresql: basics',
        'preprocessing_dates_and_times',
        'frequentist',
        'logging',
        'regex',
        'model_selection',
        'logistic_regression',
        'machine_learning',
        'preprocessing_structured_data',
        'feature_selection',
        'trees_and_forests',
        'support_vector_machines',
        'mathematics: basics',
        'python: other',
        'linear_regression',
        'feature_engineering',
        'testing',
        'clustering',
        'preprocessing_images'];

    @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
    @ViewChild('auto') matAutocomplete: MatAutocomplete;

    constructor( private searchService:SearchService) {
        this.filteredTags = this.tagCtrl.valueChanges.pipe(
            startWith(null),
            map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()));
        this.searchService.tags = []
    }

    ngOnInit() {
    }

    add(event: MatChipInputEvent): void {
        if (!this.matAutocomplete.isOpen) {
            const input = event.input;
            const value = event.value;
            //Add our tag(fruit)
            if ((value || '').trim()) {
                this.searchService.tags.push(value.trim());
            }
            //Reset the input value
            if (input) {
                input.value = '';
            }

            this.tagCtrl.setValue(null);
        }
    }

    remove(tag: string): void {
        const index = this.searchService.tags.indexOf(tag);
        if (index >= 0) {
            this.searchService.tags.splice(index, 1);
        }
    }

    selected(event: MatAutocompleteSelectedEvent): void {
        this.searchService.tags.push(event.option.viewValue);
        this.tagInput.nativeElement.value = '';
        this.tagCtrl.setValue(null);
    }

    private
    _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.allTags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
    }
}
