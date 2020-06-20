class User {
  public mock: Array

  constructor () {
    this.mock = [
      {
        name: 'Thiago',
        email: 'thiagoskibinski@gmail.com'
      }
    ]
  }

  list () {
    return this.mock
  }
}

export default new User()
