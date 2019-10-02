import { EnaioDocumentObject } from './interfaces/enaio-document-object';
import { EnaioDocumentSearchOptions } from './interfaces/enaio-document-search-options';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Document Service covers the [enaio AppConnector /osrest/api/document interface]{@link https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1867855}
 */
export class EnaioDocumentService {
  /**
   * Constructor
   */
  constructor(private http: HttpClient) {}

  /**
   * Method return the enaio object for the given id
   * [Official Documentation]{@link https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1867855#DocumentService(/documents)-/osrest/api/documents/search/[id]}
   *
   *
   * @param number id unique enaio id
   * @param options Search Options
   * @returns enaio object
   */
  public searchByID(id: number, options: EnaioDocumentSearchOptions): Observable<EnaioDocumentObject> {
    return this.http.get<any>('/osrest/api/documents/search/' + id, { params: options as HttpParams });
  }
}
