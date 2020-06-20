export default (_req, _res, next) => {
  console.log('Middleware 😎')

  next()
}
