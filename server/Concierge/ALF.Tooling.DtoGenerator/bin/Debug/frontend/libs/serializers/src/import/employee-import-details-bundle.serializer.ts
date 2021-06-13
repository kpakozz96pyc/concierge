import { Serializer } from "@alf/core/models";
import { EmployeeImportDetailsBundle } from "@alf/models/import/employee-import-details-bundle";

// ######################################################
// ## NOTE! This is an auto-generated file.            ##
// ######################################################

export class EmployeeImportDetailsBundleSerializer implements Serializer<EmployeeImportDetailsBundle> {

    deserialize(data: undefined): undefined
    deserialize(data: any): EmployeeImportDetailsBundle
    deserialize(data: any): EmployeeImportDetailsBundle | undefined {
        if (!data) {
            return undefined;
        }

        const copy = { ...data };

        return new EmployeeImportDetailsBundle(copy);
    }

    serialize(entity: EmployeeImportDetailsBundle | undefined, _forceTypeHint?: boolean): any | undefined
    serialize(entity: undefined, _forceTypeHint?: boolean): undefined
    serialize(entity: EmployeeImportDetailsBundle, _forceTypeHint?: boolean): any
    serialize(entity: EmployeeImportDetailsBundle | undefined, _forceTypeHint?: boolean): any | undefined {
        if (!entity) {
            return undefined;
        }

        return {
            $type: _forceTypeHint ? EmployeeImportDetailsBundle.typeNameHint : undefined,
            import: entity.import,
            source: entity.source,
            summary: entity.summary
        };
    }
}
