import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnaioSession } from '../interfaces/enaio-session';
import { EnaioSystemRole } from '../enums/enaio-systemrole.enum';

@Injectable({
  providedIn: 'root'
})

/**
 * Session Service covers the [enaio AppConnector /osrest/api/session interface]{@link https://bit.ly/2oOpBlu}
 */
export class EnaioSessionService {
  /**
   * Constructor
   */
  constructor(private http: HttpClient) {}

  /**
   * Method return the current session information as defined
   * [Official Documentation]{@link https://bit.ly/2obOCai}
   *
   * @param boolean refresh Ignores the cached data and retrieves the requested data again
   * @param path prefix to os rest. Default /
   *
   * @returns Returns session information's
   */
  public session(refresh = false, pathPrefix = '/'): Observable<EnaioSession> {
    return this.http.get<EnaioSession>(pathPrefix + 'osrest/api/session', {
      params: { refresh: refresh ? 'true' : 'false' }
    });
  }

  /**
   * Return all system roles of the user
   *
   * @param path prefix to os rest. Default /
   *
   * @returns Returns system roles as string[]
   */
  public systemroles(pathPrefix = '/'): Observable<EnaioSystemRole[]> {
    return this.http.get<EnaioSystemRole[]>(pathPrefix + 'osrest/api/session/systemroles');
  }

  /**
   * Load Client Settings (as.ini format)
   *
   * @param path prefix to os rest. Default /
   *
   * @returns Returns client settings as json
   */
  public loadSettings(pathPrefix = '/'): Observable<any> {
    return this.http.get<string[]>(pathPrefix + 'osrest/api/session/settings/load');
  }
}
