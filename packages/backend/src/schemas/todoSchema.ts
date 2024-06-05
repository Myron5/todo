import Joi from 'joi';

export const todoSchema = Joi.object({
  name: Joi.string().empty().min(3).max(40).required().messages({
    'string.empty': 'name cannot be empty',
    'string.min': 'name is too short',
    'string.max': 'name is too long',
    'any.required': 'name is required field'
  }),
  description: Joi.string().empty().min(5).max(1000).required().messages({
    'string.empty': 'description cannot be empty',
    'string.min': 'description is too short',
    'string.max': 'description is too long',
    'any.required': 'description is required field'
  }),
  isCompleted: Joi.boolean().required().messages({
    'any.required': 'isCompleted is required field'
  }),
  isPrivate: Joi.boolean().required().messages({
    'any.required': 'isPrivate is required field'
  })
});

export type TypeTodoSchema = typeof todoSchema;
