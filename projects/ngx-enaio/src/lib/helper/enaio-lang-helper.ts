/**
 * Helper Class for enaio Language Information
 */
export class EnaioLangHelper {
  /**
   * @param id Language id like 7 for german
   * @returns ISO code for the given lang_id
   */
  static getIdForIso(id: string): string {
    const isoToIdMap = {
      DE: '7',
      EN: '9',
      SP: '10',
      FR: '12',
      HU: '14',
      IT: '16',
      NL: '19',
      PL: '21',
      SE: '29'
    };
    return isoToIdMap[id];
  }

  /**
   * @param iso ISO code like DE for german
   * @returns Lang_id for the ISO code
   */
  static getIsoForId(iso: string): string {
    const idToIsoMap = {
      7: 'DE',
      9: 'EN',
      10: 'SP',
      12: 'FR',
      14: 'HU',
      16: 'IT',
      19: 'NL',
      21: 'PL',
      29: 'SE'
    };
    return idToIsoMap[iso];
  }
}
