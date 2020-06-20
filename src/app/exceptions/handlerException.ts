export default (err, _req, res, _next) => {
  const { code, error, message } = err

  if (!code) {
    console.log({ err })

    return res.status(500).json({
      statusCode: 500,
      error: 'Internal Server Error',
      message
    })
  }

  return res.status(code).json({
    statusCode: code,
    error,
    message
  })
}
