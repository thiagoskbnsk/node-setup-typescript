import { IMock } from '@interfaces/UserMock'

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
