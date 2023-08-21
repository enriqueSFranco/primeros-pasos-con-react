export interface BookLoadService {
  loadingBooks: () => Promise<Library>
}

export interface Pokemon {
  id: string
  name: string
  price: number
  description: string
  image: URL,

}