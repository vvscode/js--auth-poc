let jwt = null;

const save = (value) => {
    jwt = value;
};

const get = () => {
    return jwt;
};

const reset = () => {
    jwt = null;
};

module.exports.save = save;
module.exports.get = get;
module.exports.reset = reset;