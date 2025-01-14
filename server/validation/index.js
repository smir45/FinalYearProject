const Joi = require("joi");

const UserPasswordSchema = (req, res, next) => {
    const schema = Joi.object({
        password: Joi.string()
            .min(6)
            .pattern(/[a-z]/, "Password must have atleast one lowercase")
            .pattern(/[A-Z]/, "Password must have atleast uppercase")
            .pattern(/\d/, "Password must have atleast one number")
            .pattern(/[^a-zA-z0-9]/, "Password must have atleast one symbol")
            .messages({
                "string.pattern.name": "{{#name}}",
            })
            .required(),
    });
    validateRequest(req.body, next, schema, res, true);
};

const loginValidation = (data) => {
    const schema = {
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    };
    return Joi.validate(data, schema);
};

const registrationschema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string()
        .min(8)
        .required()
        .pattern(/[a-z]/, "Password must have atleast one lowercase"),
    phone: Joi.number().min(10).required(),
});

const UpdateSchema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string()
        .min(8)
        .required()
        .pattern(/[a-z]/, "Password must have atleast one lowercase"),
    phone: Joi.number().min(10).required(),
    address: Joi.string().min(6).required(),
});

const hotelpostSchema = Joi.object({
    title: Joi.string().min(5).required(),
    desc: Joi.string().min(30).required(),
    country: Joi.string().required(),
    city: Joi.string().required(),
    zip: Joi.number().required(),
    images: Joi.string().required(),
    hearts: Joi.number().required(),
    rating: Joi.number().required(),
    reviews: Joi.number().required(),
    price: Joi.number().required(),
    stars: Joi.number().required(),
    rooms: Joi.number().required(),
    bathrooms: Joi.number().required(),
    beds: Joi.number().required(),
    amenities: Joi.string().required(),
});

module.exports = {
    UserPasswordSchema,
    loginValidation,
    registrationschema,
    UpdateSchema,
    hotelpostSchema,
};
