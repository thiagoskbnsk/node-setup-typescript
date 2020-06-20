import { celebrate, Joi, Segments } from 'celebrate'

export default {
  show: celebrate({
    [Segments.PARAMS]: {
      userId: Joi.number().required()
    }
  })
}
