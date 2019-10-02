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
   * Localized Object Type Name
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

/**
 * Enaio Metadata Field
 */
export interface EnaioDocumentObjectField {
  /**
   * field value
   */
  value: string;
  /**
   * Localized Field name
   */
  displayName: string;
  /**
   * Unique internal field name
   */
  internalName: string;
  /**
   * DB field name
   */
  dbName: string;
  /**
   * Metadata field visibility in object definition
   */
  visible: boolean;
  /**
   * Field Type
   */
  type: string;
}
/**
 * Object Rights
 */
export interface EnaioDocumentObjectRights {
  /**
   * Output Object (X)
   */
  objExport: boolean;
  /**
   * Write Object (U)
   */
  objModify: boolean;
  /**
   * Delete Object (D)
   */
  objDelete: boolean;
  /**
   * Modify Indexdata (W)
   */
  indexModify: boolean;
}
/**
 * Table Field
 */
export interface EnaioDocumentObjectTable {
  /** Localized Table Field Name */
  displayName: string;
  /** Unique Internal Name */
  internalName: string;
  /** DB Table suffix like list1. Full table name is <Object.DBName><TableField.DBName> */
  dbName: string;
  /** Visibility of table field in object definition */
  visible: boolean;
  /** Table columns */
  columns: EnaioDocumentObjectTableColumn[];
  /** Table values */
  value: EnaioDocumentObjectTableRow[];
}

/** Table column definition */
export interface EnaioDocumentObjectTableColumn {
  /** Unique Internal Name */
  internalName: string;
  /** Column data type */
  type: string;
  /** Localized column name */
  displayName: string;
  /** Technical db field name */
  dbName: string;
}

/** Table Row */
export interface EnaioDocumentObjectTableRow {
  /** List for row cells */
  ecmSimpleFields: EnaioDocumentObjectField[];
}

/** Generic type (key) / value object  */
export interface EnaioDocumentObjectTypeValue {
  /** Unique Key */
  type: string;
  /** Value */
  value: string;
}

/** Variant tree element */
export interface EnaioDocumentObjectVariant {
  /** Child variants */
  children: EnaioDocumentObjectVariant[];
  /** Variant information's */
  variantInformation: EnaioDocumentObjectVariantInformation;
}

/** Variant information's */
export interface EnaioDocumentObjectVariantInformation {
  /** Unique ID of variant */
  DOCUMENT_ID: EnaioDocumentObjectTypeValue;
  /** Unique id of the parent variant  */
  DOCUMENT_PARENT_ID: EnaioDocumentObjectTypeValue;
  /** Version name. For example 1.1.0 */
  DOCUMENT_VERSION: EnaioDocumentObjectTypeValue;
  /** Is Active Flag of the variant */
  IS_ACTIVE: EnaioDocumentObjectTypeValue;
}
