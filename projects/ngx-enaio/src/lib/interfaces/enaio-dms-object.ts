/**
 * Enaio DMS Object
 */
export interface EnaioDmsObject {
  properties: { [key: string]: {value: any , columnNames?: [string]} };
  contentStreams: [EnaioDmsObjectContentStreams];
  permissions?: {
    read: [EnaioDmsObjectPerm],
    write: [EnaioDmsObjectPerm],
    delete: [EnaioDmsObjectPerm]
  };
}

export interface EnaioDmsObjectContentStreams {
  cid: string;
  length: number;
  mimeType: string;
  fileName: string;
}

export enum EnaioDmsObjectPerm {
  metadata, object
}
