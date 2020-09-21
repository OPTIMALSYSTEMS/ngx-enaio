import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnaioDmsQuery } from '../interfaces/enaio-dms-query';
import { EnaioDmsResult } from '../interfaces/enaio-dms-result';
import { EnaioDmsDeleteOptions } from '../interfaces/enaio-dms-delete-options';
import { EnaioDmsObject } from '../interfaces/enaio-dms-object';

@Injectable({
  providedIn: 'root'
})

/**
 * Session Service covers the [enaio AppConnector /osrest/api/session interface]{@link https://bit.ly/3msARh2}
 */
export class EnaioDmsService {
  /**
   * Constructor
   */
  constructor(private http: HttpClient) { }
  /**
   * Method This Method executes a query on enaio
   * [Official Documentation]{@link https://bit.ly/2Rzd5lg}
   *
   * @param string This property contains the search statement.
   * @param path prefix to os rest. Default /
   *
   * @returns Returns dms search result
   */
  public objectSearch(query: EnaioDmsQuery, pathPrefix = '/'): Observable<EnaioDmsResult> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<EnaioDmsResult>(pathPrefix + 'dms/objects/search', JSON.stringify({ query }), { headers });
  }

  public objectDelete(objectId: number, options?: EnaioDmsDeleteOptions, pathPrefix = '/'): Observable<void> {
    return this.http.delete<void>(pathPrefix + 'dms/objects/' + objectId + '/delete', { params: (options as any) as HttpParams });
  }
}
