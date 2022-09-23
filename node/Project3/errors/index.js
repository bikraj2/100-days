const BadRequest = require("./bad-request");
const CustomAPIError = require("./custom-error");
const UnAuthenitcatedError = require("./unauthorized");

const {StatusCodes} = require('http-status-codes')

module.exports= {
    BadRequest,
    CustomAPIError,
    UnAuthenitcatedError,
}