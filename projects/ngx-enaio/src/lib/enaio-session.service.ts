import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnaioSession } from './interfaces/enaio-session';
import { EnaioSystemRole } from './enums/enaio-systemrole.enum';

@Injectable({
  providedIn: 'root'
})

/**
 * Session Service covers the [enaio AppConnector /osrest/api/session interface]{@link https://help.optimal-systems.com/enaio_develop/pages/viewpage.action??pageId=1867869}
 */
export class EnaioSessionService {
  /**
   * Constructor
   */
  constructor(private http: HttpClient) {}

  /**
   * Method return the current session infomation as defined 
   * [Official Doculentation]{@link https://help.optimal-systems.com/enaio_develop/pages/viewpage.action??pageId=1867869#SessionService(/session)-/osrest/api/session}
   *
   *
   * @param boolean refresh Ignores the cached data and retrieves the requested data again
   * @returns Returns session informations
   */
  public session(refresh = false): Observable<EnaioSession> {
    return this.http.get<EnaioSession>('/osrest/api/session', {
      params: { refresh: refresh ? 'true' : 'false' }
    });
  }

  /**
   * Return all system roles of the user
   *
   * @returns Returns system roles as string[]
   */
  public systemroles(): Observable<EnaioSystemRole[]> {
    return this.http.get<EnaioSystemRole[]>('/osrest/api/session/systemroles');
  }

  /**
   * Load Client Settings (as.ini format)
   *
   * @returns Returns client settings as json
   */
  public loadSettings(): Observable<any> {
    return this.http.get<string[]>('/osrest/api/session/settings/load');
  }
}
