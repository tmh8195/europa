import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  encapsulation: ViewEncapsulation.Native,
})
export class PageComponent implements OnInit {
  @Input() page;

  constructor() { }

  ngOnInit() {
  }

}
