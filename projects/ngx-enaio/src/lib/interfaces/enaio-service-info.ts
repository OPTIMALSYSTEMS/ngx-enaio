import { EnaioSystemRole } from '../enums/enaio-systemrole.enum';

/** Service Info response */
export interface EnaioServiceInfo {
  /** AppConnector API Version. For example 1.5.89 */
  apiVersion: string;
  /** AppConnector Build Revision. For example 0d43015 */
  buildRevision: string;
  /** enaio server version. For example 9.00 SP1 */
  serverVersion: string;
  /** enaio server address. For example 10.0.2.15 (server-dns-name) */
  serverAddress: string;
  /** Admin Contact. ToDo Admin mail address ? */
  adminContact: string;
  /** Admin Contact. For example http://www.ecm.mobi */
  welcomePage: string;
  /** List of common services */
  services: EnaioServiceInfoServices;
  /** List of capabilities as defined in <AppConnector>/configuration/osrest.caps.xml */
  capabilities: EnaioServiceInfoCapabilities;
  /** System roles */
  systemRoles: EnaioSystemRole[];
}

/** List of common services */
export interface EnaioServiceInfoServices {
  /** Document preview url */
  documentpreview: string;
  /** AppConnector url */
  appconnector: string;
  /** RenditionCache url */
  renditioncache: string;
  /** Fulltext URL */
  fulltext: string;
  /** Documentviewer url */
  documentviewer: string;
  /** Contentviewer url */
  contentviewer: string;
}

/** capabilities as defined in <AppConnector>/configuration/osrest.caps.xml */
export interface EnaioServiceInfoCapabilities {
  /** version number */
  version: number;
  /** List of capabilities as defined in <AppConnector>/configuration/osrest.caps.xml */
  capabilities: EnaioServiceInfoCapability[];
}

/** capability */
export interface EnaioServiceInfoCapability {
  /** name */
  name: string;
  /** source */
  source: string;
  /** defaults */
  defaults: [{ ua: any; value: string }];
}
