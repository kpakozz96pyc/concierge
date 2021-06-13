import { Serializer } from "@alf/core/models";
import { UrlConfiguration } from "@alf/models/configuration/url-configuration";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class UrlConfigurationSerializer implements Serializer<UrlConfiguration> {

    deserialize(data: undefined): undefined
    deserialize(data: any): UrlConfiguration
    deserialize(data: any): UrlConfiguration | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new UrlConfiguration(copy);
    }

    serialize(entity: UrlConfiguration | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: UrlConfiguration, _forceTypeHint?: boolean): any
    serialize(entity: UrlConfiguration | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? UrlConfiguration.typeNameHint : undefined,
            allvis: entity.allvis,
            backend: entity.backend,
            fileDownload: entity.fileDownload,
            identityServer: entity.identityServer,
            employeePortal: entity.employeePortal,
            managerPortal: entity.managerPortal,
            customerPortal: entity.customerPortal,
            adminPortal: entity.adminPortal,
            payrollPortal: entity.payrollPortal
        };
    }
}
