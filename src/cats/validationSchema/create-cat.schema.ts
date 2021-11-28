const Joi = require('joi');

export const createCatSchema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number(),
    breed: Joi.string(),
});