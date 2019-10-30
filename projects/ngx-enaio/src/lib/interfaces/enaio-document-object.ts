/**
 * Enaio Object
 * Represents a enaio Folder, Register or Document
 */
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

  /**
   * Transformed ecmSimpleFields. Key is the internalName
   */
  public fields: { [index: string]: EnaioDocumentObjectField } = {};
  /**
   * Transformed ecTableFields. Key is the internalName
   */
  public table: { [index: string]: EnaioDocumentObjectTable } = {};
  /**
   * Transformed baseParameters. Key is the unique type.
   */
  public base: {
      CREATOR?: string,
      CREATED?: string;
      CREATION_DATE?: string;
      MODIFIER?: string;
      MODIFIED?: string;
      OWNER?: string;
      LINKS?: string;
      SYSTEM_ID?: string;
      FOREIGN_ID?: string;
      ARCHIVE_STATE?: string;
      ARCHIVIST?: string;
      ARCHIVE_DATE?: string;
      LOCKED?: string;
      VERSION?: string;
      RETENTION_DATE?: string;
      RETENTION_PLANNED_DATE?: string;
      DOCUMENTPAGECOUNT?: string;
  } = {};

  /**
   * Transformed SystemFields. Key is the unique type.
   */
  public system: {
    OBJECT_COUNT?,
    OBJECT_FLAGS?,
    OBJECT_VERID?,
    OBJECT_MAIN?,
    OBJECT_LINKS?,
    OBJECT_LOCKUSER?,
    OBJECT_DOCPAGECOUNT?
  } = {};

  /**
   * Transformed fileParameters. Key is the unique type.
   */
  public file: {
   COUNT?,
   EXTENSION?,
   MIMETYPE?,
   SIZE?,
   MIMETYPEGROUP?,
   ICONID?,
   DOCUMENTPAGECOUNT?
  } = {};

  /**
   * Load and transform array type, value fields to objects.
   * @param plain simple json from enaio rest api
   */
  public static loadArray(plain: any): EnaioDocumentObject[] {
    const result: EnaioDocumentObject[] = [];

    for (const obj of plain) {
      result.push(EnaioDocumentObject.load(obj));
    }
    return result;
  }
  /**
   * Load and transform array of plain enaio result types.
   * @param plain array of plain simple json from enaio rest api
   */
  public static load(plain: any): EnaioDocumentObject {
    const result = new EnaioDocumentObject();

    for (const prop of Object.getOwnPropertyNames(plain)) {
      result[prop] = plain[prop];
    }

    if (plain.children) {
      result.children = [];
      for (const child of plain.children) {
        result.children.push(EnaioDocumentObject.load(child));
      }
    }

    for (const field of result.ecmSimpleFields) {
      result.fields[field.internalName] = field;
    }

    for (const tab of result.ecmTableFields) {
      result.table[tab.internalName] = tab;
    }

    for (const param of result.baseParameters) {
      result.base[param.type] = param.value;
    }

    for (const sys of result.systemFields) {
      result.system[sys.type] = sys.value;
    }

    for (const f of result.fileProperties) {
      result.file[f.type] = f.value;
    }


    return result;
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
