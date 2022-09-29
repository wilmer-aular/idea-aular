export const generateErrorForm = (objectError, objectValues) => {
    const keys = Object.keys(objectValues);
    if (!keys.length) return objectError;
    const err = {};
    Object.keys({ ...objectError }).forEach((i) => {
        if (!keys.includes(i) || objectValues[i].trim() === "") {
            err[i] = true;
        }
    });
    return Object.keys(err).length ? err : null;
};
