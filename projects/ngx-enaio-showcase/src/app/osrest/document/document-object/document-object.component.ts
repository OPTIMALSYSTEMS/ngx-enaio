import { EnaioDocumentObject } from 'ngx-enaio';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-document-object',
  templateUrl: './document-object.component.html',
  styleUrls: ['./document-object.component.scss']
})
export class DocumentObjectComponent implements OnInit {
  @Input() obj: EnaioDocumentObject;
  
  constructor() { }

  ngOnInit() {
  }

}
