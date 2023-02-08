require('dotenv').config();
const User = require('./services/user');

async function setup() {
    const user = User();

    return {
        user
    }
}

module.exports = setup;
