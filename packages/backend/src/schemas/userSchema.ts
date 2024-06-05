import Joi from 'joi';

export const userSchema = Joi.object({
  email: Joi.string().empty().email().min(3).max(30).required().messages({
    'string.empty': 'email cannot be empty',
    'string.email': 'email has incorrect format',
    'string.min': 'email is too short',
    'string.max': 'email is too long',
    'any.required': 'email is required field'
  }),

  password: Joi.string().empty().min(6).max(30).required().messages({
    'string.empty': 'password cannot be empty',
    'string.min': 'password is too short',
    'string.max': 'password is too long',
    'any.required': 'password is required field'
  })
});

export const sendResetPasswordSchema = Joi.object({
  email: Joi.string().empty().email().min(3).max(30).required().messages({
    'string.empty': 'email cannot be empty',
    'string.email': 'email has incorrect format',
    'string.min': 'email is too short',
    'string.max': 'email is too long',
    'any.required': 'email is required field'
  })
});

export const resetPasswordSchema = Joi.object({
  newpassword: Joi.string().empty().min(6).max(30).required().messages({
    'string.empty': 'password cannot be empty',
    'string.min': 'password is too short',
    'string.max': 'password is too long',
    'any.required': 'password is required field'
  })
});

export type TypeUserSchema = typeof userSchema;
export type TypeSendResetPasswordSchema = typeof sendResetPasswordSchema;
export type TypeResetPasswordSchema = typeof resetPasswordSchema;
