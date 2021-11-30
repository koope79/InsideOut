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

export const maxLength = (max) => {
    return function (value) {
        const req = requiredField(value);
        if (req) return req;
        else if (value && value.length > max) return `Max length ${max} symbols!`;
        return undefined;
    }
}

export const email = value => {
    const req = requiredField(value);
    if (req) return req;
    else if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return 'Invalid email address';
    return undefined;
}

export const ratingField = value => {
    const req = requiredField(value);
    if (req) return req;
    else if(value < 1 || value > 10) return 'Invalid rating value';
    return undefined;
}


