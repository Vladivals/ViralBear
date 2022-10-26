const validateEmail = email => {
    const expression = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    return email ? expression.test(String(email).toLowerCase()) : true;
};

const validateLink = link => {
    const expression = /[-a-zA-Z0-9@:%_+.~#?&/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&/=]*)?/gi;
    return link ? expression.test(String(link).toLowerCase()) : true;
};
export {validateEmail, validateLink}
