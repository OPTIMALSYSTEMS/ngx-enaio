import { Type } from 'class-transformer';

/**
 * Enaio Object
 * Represents a enaio Folder, Register or Document
 */
// @dynamic
export class EnaioDocumentObject {
  /**
   * Unique enaio Object ID
   */
  public osid: number;
  /**
   * Unique enaio Object Type ID
   */
  public objectTypeId: number;
  /**
   * Object Type: FOLDER, REGISTER, DOCUMENT
   */
  public objectType: string;
  /**
   * Unique Object Type Internal Name
   */

  public internalName: string;
  /**
   * Localized Object Type Name
   */
  public displayName: string;
  /**
   * Object Flag
   * Only available for objectType DOCUMENT
   */
  public objectFlagsValue?: number;
  /**
   * Metadata fields
   */

  public ecmSimpleFields: EnaioDocumentObjectField[];
  /**
   * table fields
   */

  public ecmTableFields: EnaioDocumentObjectTable[];
  /**
   * Base Parameter
   *
   */
  public baseParameters: EnaioDocumentObjectTypeValue[];
  /**
   * Access Rights for object
   */
  public rights: EnaioDocumentObjectRights;
  /**
   * Object Type of the parent object.
   * Possible values: Folder, Register
   */
  public parentCabinetKeyType: string;
  /**
   * Object Type internal name of the parent object.
   */

  public parentCabinetKey: string;
  /**
   * Child count
   */

  public childrenCount?: number;
  /**
   * Object Children (Registers and Documents)
   */

  @Type(() => EnaioDocumentObject)
  public children?: EnaioDocumentObject[];
  /**
   * Object Relation Information's
   */

  public objectInserts: {};
  /**
   * Full hierarchical tree
   */

  public folderRegisterTree: [];
  /**
   * System fields
   */

  public systemFields: EnaioDocumentObjectTypeValue[];
  /**
   * File Properties
   */

  public fileProperties?: EnaioDocumentObjectTypeValue[];
  /**
   * Variant Information of the current object.
   * Only available for Object Type DOCUMENT
   */

  public variantInformation?: EnaioDocumentObjectTypeValue[];
  /**
   * Full variant tree
   * Only available for Object Type DOCUMENT
   */

  public variantTree?: EnaioDocumentObjectVariant;

  public getTableField(internalName: string): EnaioDocumentObjectTable {
    for (const table of this.ecmTableFields) {
      if (table.internalName === internalName) {
        return table;
      }
    }
    return null;
  }

  public getField(internalName: string): EnaioDocumentObjectField {
    for (const field of this.ecmSimpleFields) {
      if (field.internalName === internalName) {
        return field;
      }
    }
    return null;
  }

  public getBaseParam(type: string): string {
    for (const param of this.baseParameters) {
      if (param.type === type) {
        return param.value;
      }
    }
    return null;
  }

  public getFileProp(type: string): string {
    for (const prop of this.fileProperties) {
      if (prop.type === type) {
        return prop.value;
      }
    }
    return null;
  }

  public getSystemField(type: string): string {
    for (const field of this.systemFields) {
      if (field.type === type) {
        return field.value;
      }
    }
    return null;
  }
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
