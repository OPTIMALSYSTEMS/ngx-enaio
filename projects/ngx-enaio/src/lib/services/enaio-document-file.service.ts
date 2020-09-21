import { EnaioDocumentInsertOptions } from '../interfaces/enaio-document-insert-options';
import { EnaioDocumentUpdateOptions } from '../interfaces/enaio-document-update-options';
import { EnaioDocumentParentsOptions } from '../interfaces/enaio-document-parents-options';
import { EnaioDocumentUpdateData } from '../interfaces/enaio-document-update-data';
import { EnaioDocumentStoredQueriesOptions } from '../interfaces/enaio-document-stored-queries-options';
import { EnaioStoredQuery, EnaioStoredQueries } from '../interfaces/enaio-stored-query';
import { EnaioDocumentSearchRequest } from '../interfaces/enaio-document-search-request';
import { EnaioDocumentObject } from '../interfaces/enaio-document-object';
import { EnaioDocumentSearchOptions } from '../interfaces/enaio-document-search-options';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
/**
 * Document Service covers the [enaio AppConnector /osrest/api/documentfiles interface]{@link https://bit.ly/2FMemmA}
 */
export class EnaioDocumentFileService {
  /**
   * Constructor
   */
  constructor(private http: HttpClient) { }

  /**
   * This method can be used to delete an object in the archive. If successful, the method returns the string "true".
   * [Official Documentation]{@link https://bit.ly/32Me7ke}
   *
   *
   * @param id unique enaio id
   *
   * @param recursive If the object is a folder or register, you can specify
   *  whether its contents should be deleted if the parameter is 'true'.
   *
   * @param path prefix to os rest. Default /
   *
   * @returns string
   */
  public delete(id: number, recursive = false, pathPrefix = '/'): Observable<any> {
    const subject = new Subject<void>();
    const params = new HttpParams();
    params.append('recursive', recursive + '');
    this.http.delete<any>(pathPrefix + 'osrest/api/documentfiles/delete/' + id,
      { params }).subscribe(
        result => {
          subject.next(result);
          subject.complete();
        },
        error => {
          subject.error(error);
          subject.complete();
        }
      );

    return subject;
  }
}
