
import { AmeldingMonthlySubmissionStatus } from "./enums/amelding-monthly-submission-status";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export type AmeldingMonthlySubmissionBaseId = string;

export class AmeldingMonthlySubmissionBase {

    static $name = "AmeldingMonthlySubmissionBase";
    static typeNameHint = "ALF.Shared.Dto.Models.Amelding.AmeldingMonthlySubmissionBase, ALF.Shared.Dto"

    $type: string;
    id: AmeldingMonthlySubmissionBaseId;
    companyId: string;
    description?: string;
    month: number;
    year: number;
    status: AmeldingMonthlySubmissionStatus;
    canGenerateNewAmelding: boolean;
    whyCantIGenerateNewAmelding?: string;

    constructor(data?: Partial<AmeldingMonthlySubmissionBase>) {
        Object.assign(this, data);
    }
}
