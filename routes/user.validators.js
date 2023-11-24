const { query, body } = require("express-validator");

module.exports.userQueryValidator = [
    query('id').isInt()
]

module.exports.userBodyValidator = [
    body('user.id').isInt(),
    body('user.name').isAlpha(),
    body('user.age').isInt({
        min: 18,
        max: 99
    })
]
