import { EnaioLanguages } from './../interfaces/enaio-languages';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * ObjDefS Service covers the
 * [enaio AppConnector /osrest/api/objdef interface]{@link https://bit.ly/35r6D4x}
 */
export class EnaioObjDefService {
  /** Constructor */
  constructor(private http: HttpClient) {}
  /**
   * This method returns the languages defined in the object definition as JSON. Depending on the size,
   * the call can take some time and the result can be quite extensive. The structure is equivalent to XML, only transformed as JSON.
   *
   * @returns Return all available languages with name, lang_id and status
   *
   * [/osrest/api/objdef/languages]{@link https://bit.ly/37xsucC}
   */
  public languages(): Observable<EnaioLanguages> {
    return this.http.get<EnaioLanguages>('/osrest/api/objdef/languages');
  }
}
