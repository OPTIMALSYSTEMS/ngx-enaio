/** Error Type description which can be raised by the AppConnector */
export interface EnaioErrorType {
  /** Error Message */
  DefaultMessage: string;
  /** Unique error type token. For example PARAMETER_ERROR */
  ErrorType: string;
  /** HTTP Status code. For example Bad Request - [400] */
  HttpStatusCode: string;
  /** Unique error type number. For example 1 */
  ErrorCode: number;
}
