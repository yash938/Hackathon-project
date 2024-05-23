const { z } = require("zod");

const signupSchema = z.object({
    username: z.string({ required_error: "name is required" })
        .trim()
        .min(3, { message: "name must be at least 3 characters" })
        .max(25, { message: "name must be at most 25 characters" }),
    email: z.string({ required_error: "email is required" })
        .trim()
        .email({ message: "invalid email address" })
        .min(3, { message: "email must be at least 3 characters" })
        .max(25, { message: "email must be at most 25 characters" }),
    contact: z.string({ required_error: "contact is required" })
        .trim()
        .min(3, { message: "phone must be at least 3 characters" })
        .max(25, { message: "phone must be at most 25 characters" }),
    password: z.string({ required_error: "password is required" })
        .min(3, { message: "password must be at least 3 characters" })
        .max(25, { message: "password must be at most 25 characters" }),
});

module.exports = signupSchema;
