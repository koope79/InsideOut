export const requiredField = (value) => {
    if (!value) return 'Required';
    return undefined;
}

export const dateField = (value) => {
    const req = requiredField(value);
    if (req) return req;
    else if(value && !/[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/i.test(value)) return 'Invalid date';
    return undefined;
}

export const typeField = (value) => {
    const req = requiredField(value);
    if (req) return req;
    else if(value && !/[А-Яа-я]+/i.test(value)) return 'Invalid type';
    return undefined;
}


