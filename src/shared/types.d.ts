export interface User {
  name: string
  age: number
  username: string
  email: string
}

export enum TURNS {
  X = 'X',
  O = 'O'
}

// TYPES PARA LA ENTREVISTA FACT Y CATS
export interface Fact {
  fact: string
  length: number
}

export interface CatFact {
  tags: string[]
  createdAt: Date
  updatedAt: Date
  validated: boolean
  owner: string
  file: string
  mimetype: string
  size: number
  id: string
  url: string
}

