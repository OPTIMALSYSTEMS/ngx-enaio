import { EnaioStoredQueries } from './../../../../../../ngx-enaio/src/lib/interfaces/enaio-stored-query';
import { EnaioDocumentService } from 'ngx-enaio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stored-queries-list',
  templateUrl: './stored-queries-list.component.html',
  styleUrls: ['./stored-queries-list.component.scss'],
  styles: []
})
export class StoredQueriesListComponent implements OnInit {
  loading = false;
  error: any;
  result: EnaioStoredQueries;

  showglobal = false;
  foldering = false;
  refresh = false;

  constructor(private documentService: EnaioDocumentService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.error = null;
    this.result = null;
    this.loading = true;
    this.documentService.getStoredQueries(this.showglobal, this.foldering, this.refresh).subscribe(
      result => {
        this.loading = false;
        this.result = result;
      },
      error => {
        this.loading = false;
        this.error = error;
      }
    );
  }
}
