import { EnaioDocumentUpdateData } from './../interfaces/enaio-document-update-data';
import { EnaioDocumentInsertOptions } from './../interfaces/enaio-document-insert-options';
import { EnaioDocumentUpdateOptions } from './../interfaces/enaio-document-update-options';
import { EnaioDocumentParentsOptions } from './../interfaces/enaio-document-parents-options';
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
 * Document Service covers the [enaio AppConnector /osrest/api/document interface]{@link https://bit.ly/2obPMmn}
 */
export class EnaioDocumentService {
  /**
   * Constructor
   */
  constructor(private http: HttpClient) {}

  /**
   * The method returns a sorted, linear list of parent objects for an object with the given ID.
   * In addition to the linear, sorted list, the tree structure of a location can also be displayed,
   * which is particularly important for displaying several locations.
   * [Official Documentation]{@link https://bit.ly/2oNf1LE}
   *
   *
   * @param id unique enaio id
   *
   * @param tree If true, the location hierarchy of all locations of an object is displayed as a tree.
   * This parameter should always be specified and "true" set,
   * otherwise there may be problems with objects with several locations.
   * The "simple" linear output is still used for compatibility reasons.
   *
   * @param verbose An extended generic metadata model is output. Equals to search methods (EnaioDocumentObject)
   *
   * @param objecttypeid ObjectTypeID of the required object.
   * The parameter is optional, but for performance reasons it is recommended to set the parameter if it is known.
   *
   * @param metadata File name of an alternative metadata mapping
   *
   * @returns enaio object list
   */
  public parents(id: number, options: EnaioDocumentParentsOptions = {}): Observable<EnaioDocumentObject[]> {
    const subject = new Subject<EnaioDocumentObject[]>();
    this.http.get<EnaioDocumentObject[]>('/osrest/api/documents/parents/' + id, { params: (options as any) as HttpParams }).subscribe(
      result => {
        const enaioObjects: EnaioDocumentObject[] = EnaioDocumentObject.loadArray(result);
        subject.next(enaioObjects);
        subject.complete();
      },
      error => {
        subject.error(error);
        subject.complete();
      }
    );

    return subject;
  }
  /**
   * The method creates an object in a folder or register with the given location ID.
   * When creating folders or documents in the repository, the parameter for the location
   * ID can be omitted or a zero sent. The JSON schema is based on the schema returned by the insertInfo parameter.
   *
   *
   * @param metadata metadata
   *
   * @param locationId Optional location id for registers and objects
   *
   * @param options Options
   *
   * @param file File
   *
   * @param filename filename
   *
   * @returns id of the new object
   */
  public insert(
    metadata: any,
    locationId: number = 0,
    options: EnaioDocumentInsertOptions = {},
    file?: Blob,
    filename?: string
  ): Observable<number> {

    const subject = new Subject<number>();
    const formData = new FormData();
    formData.append('data', metadata);
    if (file) {
      formData.append('file', file, filename);
    }

    this.http.post<number>('/osrest/api/documents/insert/' + locationId, formData, { params: (options as any) as HttpParams }).subscribe(
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
  /**
   * The method changes the object with the given ID. Use is similar to the documents/insert method,
   * where the objectTypeId can be optionally specified to speed up the call.
   * In addition, only explicitly specified fields can be changed in enaio®.
   * The call must have the content type multipart/form-data.
   *
   * @param id object id
   *
   * @param metadata Metadata
   *
   * @param options Options
   *
   * @param file File
   *
   * @param filename filename
   *
   * @returns void
   */
  public update(
    id: number,
    metadata: EnaioDocumentUpdateData,
    options: EnaioDocumentUpdateOptions = {},
    file?: Blob,
    filename?: string
  ): Observable<void> {
    const subject = new Subject<void>();
    const formData = new FormData();
    formData.append('data', JSON.stringify(metadata));
    if (file) {
      formData.append('file', file, filename);
    }

    this.http.post<void>('/osrest/api/documents/update/' + id, formData, { params: (options as any) as HttpParams }).subscribe(
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
    const subject = new Subject<EnaioDocumentObject>();
    this.http
      .get<EnaioDocumentObject>('/osrest/api/documents/search/' + id, {
        params: (options as any) as HttpParams
      })
      .subscribe(
        result => {
          subject.next(EnaioDocumentObject.load(result));
          subject.complete();
        },
        error => {
          subject.error(error);
          subject.complete();
        }
      );

    return subject;
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
    const subject = new Subject<EnaioDocumentObject[]>();
    this.http
      .post<EnaioDocumentObject[]>('/osrest/api/documents/search', request, {
        params: (options as any) as HttpParams
      })
      .subscribe(
        result => {
          subject.next(EnaioDocumentObject.loadArray(result));
          subject.complete();
        },
        error => {
          subject.error(error);
          subject.complete();
        }
      );

    return subject;
  }

  /**
   * Method return stored queries
   * [Official Documentation]{@link https://bit.ly/32MhFR9}
   *
   * @param showglobal return also stored queries on global desktop
   * @param foldering return also the desktop folders as tree. Queries and folders can be differentiated by the the attribute isFolder.
   * @param refresh disable osrest internal cache an always request list directly from the enaio server
   * @returns enaio object
   */
  public getStoredQueries(showglobal = false, foldering = false, refresh = false): Observable<EnaioStoredQueries> {
    const options = { showglobal, foldering, refresh };

    return this.http.get<EnaioStoredQueries>('/osrest/api/documents/storedqueries', {
      params: (options as any) as HttpParams
    });
  }

  /**
   * execute a stored query
   * [Official Documentation]{@link https://bit.ly/2Wda0ZD}
   *
   * @param id of the stored query
   * @param execution options
   * @param query variables
   * @returns List of enaio objects
   */
  public executeStoredQueries(
    id: number,
    options?: EnaioDocumentStoredQueriesOptions,
    variables = { fields: {} }
  ): Observable<EnaioDocumentObject[]> {
    const subject = new Subject<EnaioDocumentObject[]>();
    this.http
      .post<EnaioDocumentObject[]>('/osrest/api/documents/storedqueries/' + id, variables, {
        params: (options as any) as HttpParams
      })
      .subscribe(
        result => {
          subject.next(EnaioDocumentObject.loadArray(result));
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
