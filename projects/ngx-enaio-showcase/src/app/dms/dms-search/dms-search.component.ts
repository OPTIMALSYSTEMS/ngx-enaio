import { Component, OnInit } from '@angular/core';
import { EnaioDmsQuery, EnaioDmsQueryHandleDeleted, EnaioDmsService, EnaioDmsResult } from 'ngx-enaio';


@Component({
  selector: 'app-dms-search',
  templateUrl: './dms-search.component.html',
  styleUrls: ['./dms-search.component.scss']
})
export class DmsSearchComponent implements OnInit {
  loading = false;
  error: any;
  result: EnaioDmsResult;
  query: EnaioDmsQuery = {
    statement: 'SELECT * FROM Archive',
    skipCount: 0,
    maxItems: 50,
    includePermissions: true,
    parameters: {},
    handleDeletedDocuments: EnaioDmsQueryHandleDeleted.DELETED_DOCUMENTS_EXCLUDE
  };

  constructor(private dmsService: EnaioDmsService) { }

  ngOnInit() {
  }


  onSubmit() {
    this.error = null;
    this.result = null;
    this.loading = true;
    this.dmsService.objectSearch(this.query).subscribe(
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
