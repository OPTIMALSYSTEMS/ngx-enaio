import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnaioDmsQuery } from '../interfaces/enaio-dms-query';
import { EnaioDmsResult } from '../interfaces/enaio-dms-result';

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
  public search(query: EnaioDmsQuery, pathPrefix = '/'): Observable<EnaioDmsResult> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<EnaioDmsResult>(pathPrefix + 'dms/objects/search', JSON.stringify({ query }), { headers });
  }

}
