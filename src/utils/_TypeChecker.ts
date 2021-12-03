export class TypeChecker {
  returnedValue: unknown;

  public checkValue(type: any, defaultValue: any, fieldName: any, value: any) {
    if (type === "array" && !Array.isArray(value)) {
      console.warn(`Expected ${fieldName} to be array but got ${typeof value}`);
      return defaultValue;
    }

    if (type === "array" && Array.isArray(value)) {
      return value;
    }

    if (type === "object" && Object.is(value, null)) {
      console.warn(`Expected ${fieldName} to be object but got null`);
      return defaultValue;
    }

    if (type === "object" && Array.isArray(value)) {
      console.warn(`Expected ${fieldName} to be object but got array`);
      return defaultValue;
    }

    if (typeof value !== type && Array.isArray(value)) {
      console.warn(`Expected ${fieldName} to be ${type} but got array`);
      return defaultValue;
    }

    if (typeof value !== type) {
      console.warn(
        `Expected ${fieldName} to be ${type} but got ${typeof value}`
      );
      return defaultValue;
    }

    return value;
  }


}
