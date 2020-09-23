
/**
 * enaio user information
 */

export interface EnaioUserInfo {
  /**
   * Numeric User ID
   */
  id: number;
  /**
   * Username / Login
   */
  name: string;
  /**
   * Unique user identifier (32 characters long)
   */
  guid: string;
  /**
   * user description
   */
  description: string;
  /**
   * Readable username of the user
   */
  fullname: string;
  /**
   * email address of the user
   */
  email?: string;

  limited: string;

  /**
   * locked status
   */
  locked: string;

  /**
   * valid status
   */
  valid: boolean;
  /**
   * Group memberships of the user
   */
  groups: string[];
}
