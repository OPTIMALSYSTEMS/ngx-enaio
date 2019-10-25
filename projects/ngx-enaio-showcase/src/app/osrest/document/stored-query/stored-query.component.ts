import { EnaioStoredQuery } from './../../../../../../ngx-enaio/src/lib/interfaces/enaio-stored-query';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stored-query',
  templateUrl: './stored-query.component.html',
  styleUrls: ['./stored-query.component.scss']
})
export class StoredQueryComponent implements OnInit {

  constructor() { }
  @Input() query: EnaioStoredQuery;

  ngOnInit() {
  }

}
