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

// TYPES PARA LA ENTREVISTA BOOKS
interface Author {
  name: string,
  otherBooks: string[]
}

export interface Library {
  library: LibraryElement[]
}

interface LibraryElement {
  book: Book
}

export interface Book {
  title: string,
  pages: number,
  genre: string,
  cover: string,
  synopsis: string,
  year: number,
  ISBN: string,
  author: Author
}

export enum GENRES {
  TODOS = 'Todos',
  FANTASIA = 'Fantasia',
  CIENCIA_FICCION = 'Ciencia ficción',
  TERROR = 'Terror',
  ZOMBIES = 'Zombies'
}