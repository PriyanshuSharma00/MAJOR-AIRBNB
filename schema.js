const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title: Joi.string().requires(),
        description: Joi.string().requires(),
        location: Joi.string().requires(),
        country: Joi.string().requires(),
        price: Joi.number().requires().min(0),
        image: Joi.string().allow("", null),
    }).required()
});