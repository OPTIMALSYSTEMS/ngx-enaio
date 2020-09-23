import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EnaioGroupInfo } from '../interfaces/enaio-group-info';
import { EnaioSendmail } from '../interfaces/enaio-sendmail';
import { EnaioUserInfo } from '../interfaces/enaio-user-info';


@Injectable({
  providedIn: 'root'
})
/**
 * Organization Service covers the [enaio AppConnector /osrest/api/organization interface]{@link https://bit.ly/3cpfLeT}
 */
export class EnaioOrganizationService {
  /**
   * Constructor
   */
  constructor(private http: HttpClient) { }

  /**
   * This method returns a list of all ECM users
   * [Official Documentation]{@link https://bit.ly/33Rf6Pj}
   *
   *
   * @param disable cache
   *
   * @param path prefix to os rest. Default /
   *
   * @returns List of Users
   */
  public users(refresh  = false, pathPrefix = '/'): Observable<EnaioUserInfo[]> {
    const options = { refresh };
    return this.http.get<EnaioUserInfo[]>(pathPrefix + 'osrest/api/organization/users', {
      params: (options as any) as HttpParams
    });
  }

  /**
   * This method returns a list of all ECM groups
   * [Official Documentation]{@link https://bit.ly/33UyV8m}
   *
   *
   * @param disable cache
   *
   * @param path prefix to os rest. Default /
   *
   * @returns List of Groups
   */
  public groups(refresh  = false, pathPrefix = '/'): Observable<EnaioGroupInfo[]> {
    const options = { refresh };
    return this.http.get<EnaioGroupInfo[]>(pathPrefix + 'osrest/api/organization/groups', {
      params: (options as any) as HttpParams
    });
  }

  /**
   * An e-mail can be sent using this method. As POST body a Mail-JSON object must be transmitted
   * [Official Documentation]{@link https://bit.ly/3kH2S2G}
   *
   *
   * @param disable cache
   *
   * @param path prefix to os rest. Default /
   *
   * @returns List of Groups
   */
  public sendmail(mail: EnaioSendmail, pathPrefix = '/'): Observable<any> {
    return this.http.post<any>(pathPrefix + 'osrest/api/organization/groups', mail, {});
  }
}
