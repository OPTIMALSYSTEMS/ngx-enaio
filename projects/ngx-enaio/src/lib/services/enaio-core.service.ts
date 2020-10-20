import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnaioEmptyJobParameter } from '../interfaces/enaio-empty-job-parameter';


@Injectable({
  providedIn: 'root'
})

/**
 * Core Service covers the [enaio AppConnector /osrest/core interface]{@link https://bit.ly/35hB6nh}
 */
export class EnaioCoreService {
  /**
   * Constructor
   */
  constructor(private http: HttpClient) { }
  /**
   * The method accepts any number of parameters either as key-value-map or key-map-map and returns as result a key-value-map
   * with the server response parameters. With key-map-map as value an inner Map<String, Object> is meant. If necessary,
   * the data type of the input parameter can be specified exactly via this input structure, whereas this is done automatically
   * by the AppConnector in the case of Key-Value-Map. On the enaio®-Server this method calls the krn.EmptyJob.
   * According to the Server-API, this server job does nothing by itself. However, a scripter can create server events that are
   * called before and after this server job. These server scripts are also the reason for the job. As a scripter you can
   * create any server scripts and then call them with any parameters using the method of the AppConnector.
   *
   * [Official Documentation]{@link https://bit.ly/2FLF9Q0}
   *
   * @param query parameter
   * @param path prefix to os rest. Default /
   *
   * @returns result parameter
   */
  public emptyJob(
    parameters: { [key: string]: EnaioEmptyJobParameter | boolean | string | number },
    pathPrefix = '/'): Observable<{ [key: string]: EnaioEmptyJobParameter | boolean | string | number }> {

    return this.http.post<{ [key: string]: EnaioEmptyJobParameter | boolean | string | number }>(
      pathPrefix + 'osrest/api/core/emptyJob',
      JSON.stringify(parameters)
    );
  }
}
