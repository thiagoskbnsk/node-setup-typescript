const {
  celebrate, Joi, Segments
} = require('celebrate')

export default {
  show: celebrate({
    [Segments.PARAMS]: {
      userId: Joi.number().required()
    }
  })
}
