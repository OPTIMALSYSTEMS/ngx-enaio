export interface EnaioDocumentObject {
  osid: number;
  objectTypeId: number;
  objectType: string;
  internalName: string;
  displayName: string;
  objectFlagsValue?: number;
  ecmSimpleFields: [
    {
      value: string;
      displayName: string;
      internalName: string;
      dbName: string;
      visible: boolean;
      type: string;
    }
  ];
  ecmTableFields: [
    {
      displayName: string;
      internalName: string;
      dbName: string;
      visible: boolean;
      columns: [
        {
          internalName: string;
          type: string;
          displayName: string;
          dbName: string;
        }
      ];
      value: [
        {
          ecmSimpleFields: [{ value: string; displayName: string; internalName: string; dbName: string; type: string }];
        }
      ];
    }
  ];
  baseParameters: [
    {
      value: string;
      type: string;
    }
  ];
  rights: {
    objExport: boolean;
    objModify: boolean;
    objDelete: boolean;
    indexModify: boolean;
  };
  parentCabinetKeyType: string;
  parentCabinetKey: string;
  childrenCount: number;
  children: EnaioDocumentObject[];
  objectInserts: {};
  folderRegisterTree: [];
  systemFields: [
    {
      value: string;
      type: string;
    }
  ];
  fileProperties?: [
    {
      value: string;
      type: string;
    }
  ];
  variantInformation: [
    {
      type: string;
      value: string;
    }
  ];
  variantTree: EnaioDocumentObjectVariant;
}

export interface EnaioDocumentObjectVariant {
  children: EnaioDocumentObjectVariant[];
  variantInformation: {
    DOCUMENT_ID: {
      type: string;
      value: string;
    };
    DOCUMENT_PARENT_ID: {
      type: string;
      value: string;
    };
    DOCUMENT_VERSION: {
      type: string;
      value: string;
    };
    IS_ACTIVE: {
      type: string;
      value: string;
    };
  };
}
