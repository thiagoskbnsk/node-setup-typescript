interface IMock {
  name: string,
  email: string
}

class User {
  public mock: IMock[]

  constructor () {
    this.mock = [
      {
        name: 'Thiago',
        email: 'thiagoskibinski@gmail.com'
      }
    ]
  }

  list (): IMock[] {
    return this.mock
  }
}

export default new User()
