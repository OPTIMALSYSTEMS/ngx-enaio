import { EnaioDocumentObject } from './interfaces/enaio-document-object';
import { EnaioDocumentSearchOptions } from './interfaces/enaio-document-search-options';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnaioDocumentService {

  constructor(private http: HttpClient) { }

  public searchByID(id: number, options: EnaioDocumentSearchOptions): Observable<EnaioDocumentObject>  {
    return this.http.get<any>('/osrest/api/documents/search/' + id, {params: options as HttpParams});
  }
}
