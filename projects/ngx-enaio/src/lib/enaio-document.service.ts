import { EnaioDocumentSearchRequest } from './interfaces/enaio-document-search-request';
import { EnaioDocumentObject } from './interfaces/enaio-document-object';
import { EnaioDocumentSearchOptions } from './interfaces/enaio-document-search-options';
import { Observable } from 'rxjs';
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
  public parents(
    id: number,
    tree?: boolean,
    verbose?: boolean,
    objecttypeid?: number,
    metadata?: string
  ): Observable<EnaioDocumentObject | any> {
    const params = {} as HttpParams;
    if (tree) {
      params.append('tree', String(tree));
    }
    if (verbose) {
      params.append('verbose', String(verbose));
    }
    if (objecttypeid) {
      params.append('objecttypeid', String(objecttypeid));
    }
    if (metadata) {
      params.append('metadata', String(metadata));
    }

    return this.http.get<EnaioDocumentObject | any>('/osrest/api/documents/parents/' + id, { params });
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
    return this.http.get<EnaioDocumentObject>('/osrest/api/documents/search/' + id, {
      params: (options as any) as HttpParams
    });
  }

  /**
   * Method return list ob enaio objects
   * [Official Documentation]{@link https://bit.ly/2oKpMys}
   *
   * @param request search request object
   * @param options search options
   * @returns enaio object
   */
  public search(
    request: EnaioDocumentSearchRequest,
    options: EnaioDocumentSearchOptions
  ): Observable<EnaioDocumentObject[]> {
    return this.http.post<EnaioDocumentObject[]>('/osrest/api/documents/search', request, {
      params: (options as any) as HttpParams
    });
  }
}
