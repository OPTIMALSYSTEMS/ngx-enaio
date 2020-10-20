/**
 * Enaio DMS Query
 */
export interface EnaioEmptyJobParameter {
  type: EnaioEmptyJobParameterType;
  value: any;
  maxItems?: number;
}

export enum EnaioEmptyJobParameterType {
  STRING,
  INTEGER,
  BOOL,
  DOUBLE,
  BASE64
}
