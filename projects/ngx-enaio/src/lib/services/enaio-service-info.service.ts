import { EnaioErrorType } from '../interfaces/enaio-error-type';
import { EnaioCounterType } from '../enums/enaio-counter-type.enum';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnaioServiceInfo } from '../interfaces/enaio-service-info';

@Injectable({
  providedIn: 'root'
})

/**
 * ServiceInfo Service covers the
 * [enaio AppConnector /osrest/api/serviceinfo interface]{@link https://bit.ly/2oM7oVM}
 */
export class EnaioServiceInfoService {
  /** Constructor */
  constructor(private http: HttpClient) {}
  /**
   * The method provides information about the API version and build revision of the OSREST service.
   * This information is queried in the support case. The capabilites of the installation are also displayed using this service.
   *
   * @param path prefix to os rest. Default /
   *
   * @returns Return full service information's
   *
   * [/osrest/api/serviceinfo]{@link https://bit.ly/2o7CGGI}
   */
  public serviceinfo(pathPrefix = '/'): Observable<EnaioServiceInfo> {
    return this.http.get<EnaioServiceInfo>(pathPrefix + 'osrest/api/serviceinfo');
  }

  /**
   * The method returns the integer value of the counter that has the specified GUID.
   * A new counter is created if none exists with the specified GUID.
   * The reset parameter is used to reset an existing counter if it is of type 0. With each call,
   * if the counter already existed and is not reset with the call, the counter is incremented by one.
   *
   * @param type Type of the counter. Possible value: MANUALLY (0), DAILY (1), MONTHLY (2), YEARLY (3)
   * @param reset For a MANUALLY counter, this is resets to the initial value.
   * @param initial The initial value of the counter when it is created or reset.
   * @param path prefix to os rest. Default /
   *
   * @returns counter value
   *
   * [/osrest/api/serviceinfo/counter/{guid}]{@link https://bit.ly/2oLyXPb}
   */
  public counter(guid: string, type?: EnaioCounterType, reset?: boolean, initial?: number, pathPrefix = '/'): Observable<number> {
    return this.http.get<number>(pathPrefix + 'osrest/api/serviceinfo/counter/' + guid, {
      params: ({ type, reset, initial } as any) as HttpParams
    });
  }

  /**
   * The method returns the time on the OSREST server as a timestamp.
   * The function is primarily used to test the availability of the service and the authentication.
   *
   * @param path prefix to os rest. Default /
   *
   * @returns Server Time as Unix Timestamp with milliseconds
   *
   * [/osrest/api/serviceinfo/ping]{@link https://bit.ly/2oOrFKg}
   */
  public ping(pathPrefix = '/'): Observable<number> {
    return this.http.get<number>(pathPrefix + 'osrest/api/serviceinfo/ping');
  }

  /**
   * This method returns all error types that the API knows.
   * @param path prefix to os rest. Default /
   *
   * @returns Returns all error descriptions
   *
   * [/osrest/api/serviceinfo/errorTypes]{@link https://bit.ly/2oHe07T}
   */
  public errorTypes(pathPrefix = '/'): Observable<EnaioErrorType[]> {
    return this.http.get<EnaioErrorType[]>(pathPrefix + 'osrest/api/serviceinfo/errorTypes');
  }

  /**
   * This method returns a single error type.
   *
   * @param path prefix to os rest. Default /
   *
   * @param errorCode ErrorCode number
   * @returns Returns the error description for the specified ErrorCode
   *
   * [/osrest/api/serviceinfo/errorTypes/{errorCode}]{https://bit.ly/2pxK3HJ}
   */
  public errorType(errorCode: number, pathPrefix = '/'): Observable<EnaioErrorType> {
    return this.http.get<EnaioErrorType>(pathPrefix + 'osrest/api/serviceinfo/errorTypes/' + errorCode);
  }
}
