
/**
 * Mail information
 */

export interface EnaioSendmail {
  /**
   * Sender
   */
  sender: string;
  /**
   * Receiver
   */
  receiver: string;
  /**
   * Mail subject
   */
  subject: string;
  /**
   * Mail body
   */
  text: string;
}
