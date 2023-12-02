import { SearchContainer } from './styles'

export function Search() {
  return (
    <SearchContainer>
      <header>
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </header>
      <input placeholder="Buscar Conteúdo" type="text" />
    </SearchContainer>
  )
}
