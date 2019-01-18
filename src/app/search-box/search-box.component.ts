import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(private searchService:SearchService) { }

  ngOnInit() {
  }

  search(term):void{
    this.searchService.search(term);
  }

}
