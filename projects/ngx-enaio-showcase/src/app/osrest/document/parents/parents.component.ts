import { Component, OnInit } from '@angular/core';
import { EnaioDocumentService, EnaioDocumentObject, EnaioDocumentParentsOptions, EnaioLocale } from 'ngx-enaio';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent implements OnInit {
  loading = false;
  error: any;

  id = 0;

  options = {
    tree: true,
    verbose: true,
    objecttypeid: -1,
  } as EnaioDocumentParentsOptions;

  result: EnaioDocumentObject[];

  constructor(private documentService: EnaioDocumentService) {}

  ngOnInit() {}

  onSubmit() {
    this.error = null;
    this.result = null;
    this.loading = true;
    this.documentService.parents(this.id, this.options).subscribe(
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
