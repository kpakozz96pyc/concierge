

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class UrlConfiguration {

    static $name = "UrlConfiguration";
    static typeNameHint = "ALF.Shared.Dto.Models.Configuration.UrlConfiguration, ALF.Shared.Dto"

    allvis: string;
    backend: string;
    fileDownload: string;
    identityServer: string;
    employeePortal: string;
    managerPortal: string;
    customerPortal: string;
    adminPortal: string;
    payrollPortal: string;

    constructor(data?: Partial<UrlConfiguration>) {
        Object.assign(this, data);
    }
}
