import { Locale } from '../enums/locale.enum';

/**
 * enaio Session informations
 */

export interface EnaioSession {
    /**
    * Numeric User ID
    */
    userid:number;
    /**
    * Username / Login
    */
    username: string;
    /**
    * Unique user identifier (32 characters long)
    */
    osGuid: string;
    /**
    * Unique user identifier in the workflow engine (32 characters long)
    */
    wfGuid: string;
    /**
    * Unique workflow organisation identifier (32 characters long)
    */
    wfOrg: string;
    /**
    * Temporary session guid. Not the system internal sessioGuid
    */
    sessionGuid: string;
    /**
    * User language. *Not the selected language of the windows/electron/webclient*
    */
    language: Locale;
    /**
    * Autostar settings of the user
    */
    autostar: number;
    /**
    * Workflow absent status
    */
    isWorkflowAbsent: false;
    /**
    * Readable username of the user
    */
    fullname?: string;
    /**
    * email address of the user
    */
    email?: string;
    /**
    * Group memberships of the user
    */
    groups: string[]
}