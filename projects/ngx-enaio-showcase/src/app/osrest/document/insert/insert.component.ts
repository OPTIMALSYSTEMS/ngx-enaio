import { Component, OnInit } from '@angular/core';
import { EnaioDocumentService, EnaioDocumentInsertOptions } from 'ngx-enaio';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {
  loading = false;
  error: any;

  locationId = 0;
  query = '';

  options = {
    objecttypeid: 0,
    setvariantactive: false,
    archivable: false,
    islink: false,
    inwftray: false,
    inusertray: false,
  } as EnaioDocumentInsertOptions;

  result: any;
  file: string;
  filedata: any;

  constructor(private documentService: EnaioDocumentService) { }

  ngOnInit() {
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.filedata = event.target.files[0];
    }
  }

  onSubmit() {
    console.log(this.file);
    this.error = null;
    this.result = null;
    this.loading = true;
    this.documentService.insert(this.query, this.locationId, this.options, this.filedata).subscribe(
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
