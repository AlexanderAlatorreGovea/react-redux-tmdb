export class TypeChecker {
  static checkValue<T, S>(
    type: string,
    defaultValue: unknown,
    fieldName: string
  ): (value: unknown) => T | S {
    return (value: unknown): T | S => {
      if (type === "array" && !Array.isArray(value)) {
        console.warn(
          `Expected ${fieldName} to be array but got ${typeof value}`
        );
        return defaultValue as T;
      }

      if (type === "array" && Array.isArray(value)) {
        return value as unknown as S;
      }

      if (type === "object" && Object.is(value, null)) {
        console.warn(`Expected ${fieldName} to be object but got null`);
        return defaultValue as T;
      }

      if (type === "object" && Array.isArray(value)) {
        console.warn(`Expected ${fieldName} to be object but got array`);
        return defaultValue as T;
      }

      if (typeof value !== type && Array.isArray(value)) {
        console.warn(`Expected ${fieldName} to be ${type} but got array`);
        return defaultValue as T;
      }

      if (typeof value !== type) {
        console.warn(
          `Expected ${fieldName} to be ${type} but got ${typeof value}`
        );
        return defaultValue as T;
      }

      return value as S;
    };
  }
}
