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
 * Document Service covers the [enaio AppConnector /osrest/api/document interface]{@link https://bit.ly/2obPMmn}
 */
export class EnaioDocumentService {
  /**
   * Constructor
   */
  constructor(private http: HttpClient) {}

  /**
   * Method return the enaio object for the given query
   * [Official Documentation]{@link https://bit.ly/2oHcdjb}
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
   * [Official Documentation]{@link https://bit.ly/2oKpMys}
   *
   * @param request search request object
   * @param options search options
   * @returns enaio object
   */
  public search(request: EnaioDocumentSearchRequest, options: EnaioDocumentSearchOptions): Observable<EnaioDocumentObject[]> {
    return this.http.post<EnaioDocumentObject[]>('/osrest/api/documents/search', request, { params: options as any as HttpParams });
  }
}
