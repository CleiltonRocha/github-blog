import { useContext } from 'react'
import { SearchContainer } from './styles'
import { IssuesContext } from '../../../../contexts/IssuesContext'

export function Search() {
  const { setSearchText, searchText } = useContext(IssuesContext)

  // function handleSearchTextChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setSearchText(event.target.value)
  // }

  return (
    <SearchContainer>
      <header>
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </header>
      <form>
        <input
          placeholder="Buscar Conteúdo"
          type="text"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </form>
    </SearchContainer>
  )
}
