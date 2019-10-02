import { Component, OnInit } from '@angular/core';
import { EnaioDocumentService, EnaioDocumentObject, EnaioDocumentSearchOptions, EnaioLocale } from 'ngx-enaio';

@Component({
  selector: 'app-search-by-id',
  templateUrl: './search-by-id.component.html',
  styleUrls: ['./search-by-id.component.scss']
})
export class SearchByIdComponent implements OnInit {
  loading = false;
  error: any;

  id = 0;

  options = {
    objecttypeid: -1,
    refresh: false,
    locale: EnaioLocale.DE,
    lockinfo: false,
    timestamps: false,
    fillLeadingZeros: false
  } as EnaioDocumentSearchOptions;

  result: EnaioDocumentObject;

  constructor(private documentService: EnaioDocumentService) {}

  ngOnInit() {}

  onSubmit() {
    this.error = null;
    this.result = null;
    this.loading = true;
    this.documentService.searchByID(this.id, this.options).subscribe(
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
