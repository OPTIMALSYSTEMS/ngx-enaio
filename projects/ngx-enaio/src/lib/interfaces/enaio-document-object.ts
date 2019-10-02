/**
 * Enaio Object
 * Represents a enaio Folder, Register or Document
 */
export interface EnaioDocumentObject {
  /**
   * Unique enaio Object ID
   */
  osid: number;
  /**
   * Unique enaio Object Type ID
   */
  objectTypeId: number;
  /**
   * Object Type: FOLDER, REGISTER, DOCUMENT
   */
  objectType: string;
  /**
   * Unique Object Type Internal Name
   */

  internalName: string;
  /**
   * Display name of the current locale
   */
  displayName: string;
  /**
   * Object Flag
   * Only available for objectType DOCUMENT
   */
  objectFlagsValue?: number;
  /**
   * Metadata fields
   */

  ecmSimpleFields: EnaioDocumentObjectField[];
  /**
   * table fields
   */

  ecmTableFields: EnaioDocumentObjectTable[];
  /**
   * Base Parameter
   *
   */
  baseParameters: EnaioDocumentObjectTypeValue[];
  /**
   * Access Rights for object
   */
  rights: EnaioDocumentObjectRights;
  /**
   * Object Type of the parent object.
   * Possible values: Folder, Register
   */
  parentCabinetKeyType: string;
  /**
   * Object Type internal name of the parent object.
   */

  parentCabinetKey: string;
  /**
   * Child count
   */

  childrenCount?: number;
  /**
   * Object Children (Registers and Documents)
   */

  children?: EnaioDocumentObject[];
  /**
   * Object Relation Information's
   */

  objectInserts: {};
  /**
   * Full hierarchical tree
   */

  folderRegisterTree: [];
  /**
   * System fields
   */

  systemFields: EnaioDocumentObjectTypeValue[];
  /**
   * File Properties
   */

  fileProperties?: EnaioDocumentObjectTypeValue[];
  /**
   * Variant Information of the current object.
   * Only available for Object Type DOCUMENT
   */

  variantInformation?: EnaioDocumentObjectTypeValue[];
  /**
   * Full variant tree
   * Only available for Object Type DOCUMENT
   */

  variantTree?: EnaioDocumentObjectVariant;
}

export interface EnaioDocumentObjectField {
  value: string;
  displayName: string;
  internalName: string;
  dbName: string;
  visible: boolean;
  type: string;
}

export interface EnaioDocumentObjectRights {
  objExport: boolean;
  objModify: boolean;
  objDelete: boolean;
  indexModify: boolean;
}

export interface EnaioDocumentObjectTable {
  displayName: string;
  internalName: string;
  dbName: string;
  visible: boolean;
  columns: EnaioDocumentObjectTableColumn[];
  value: EnaioDocumentObjectTableRow[];
}

export interface EnaioDocumentObjectTableColumn {
  internalName: string;
  type: string;
  displayName: string;
  dbName: string;
}

export interface EnaioDocumentObjectTableRow {
  ecmSimpleFields: EnaioDocumentObjectField[];
}

export interface EnaioDocumentObjectTypeValue {
  type: string;
  value: string;
}

export interface EnaioDocumentObjectVariant {
  children: EnaioDocumentObjectVariant[];
  variantInformation: EnaioDocumentObjectVariantInformation;
}

export interface EnaioDocumentObjectVariantInformation {
  DOCUMENT_ID: EnaioDocumentObjectTypeValue;
  DOCUMENT_PARENT_ID: EnaioDocumentObjectTypeValue;
  DOCUMENT_VERSION: EnaioDocumentObjectTypeValue;
  IS_ACTIVE: EnaioDocumentObjectTypeValue;
}
