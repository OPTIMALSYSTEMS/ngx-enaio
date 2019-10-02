import { EnaioDocumentSearchRequest } from './interfaces/enaio-document-search-request';
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
   * Method return the enaio object for the given query
   * [Official Documentation]{@link https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1867855#DocumentService(/documents)-/osrest/api/documents/search}
   *
   *
   * @param number id unique enaio id
   * @param options search options
   * @returns enaio object list
   */
  public searchByID(id: number, options: EnaioDocumentSearchOptions): Observable<EnaioDocumentObject> {
    return this.http.get<EnaioDocumentObject>('/osrest/api/documents/search/' + id, { params: options as any as HttpParams });
  }


  /**
   * Method return list ob enaio objects
   * [Official Documentation]{@link https://help.optimal-systems.com/enaio_develop/pages/viewpage.action?pageId=1867855#DocumentService(/documents)-/osrest/api/documents/search/[id]}
   *
   * @param query
   * @param options search options
   * @returns enaio object
   */
  public search(query: EnaioDocumentSearchRequest, options: EnaioDocumentSearchOptions): Observable<EnaioDocumentObject[]> {
    return this.http.post<EnaioDocumentObject[]>('/osrest/api/documents/search', query, { params: options as any as HttpParams });
  }
}
