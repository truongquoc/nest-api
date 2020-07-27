import { registerDecorator, ValidationOptions } from "class-validator";
export function IsNotBlank(ValidationOptions?: ValidationOptions) {
    return function(object: Object, propertyname: string) {
        registerDecorator({
            name: 'IsNotBlank',
            target: object.constructor,
            propertyName: propertyname,
            options: ValidationOptions,
            validator: {
                validate(value: any) {
                    return typeof value === 'string' && value.trim().length >0
                }
            }
        })
    }
}