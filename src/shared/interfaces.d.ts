export interface BookLoadService {
  loadingBooks: () => Promise<Library>
}