import { useContext } from 'react'
import { Button, InputWrapperContainer, SearchContainer } from './styles'
import { IssuesContext } from '../../../../contexts/IssuesContext'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const searchFormSchema = z.z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Search() {
  const { fetchIssues, issues } = useContext(IssuesContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues(data: SearchFormInputs) {
    await fetchIssues(data.query)
  }

  async function handleResetSearch() {
    reset()
    fetchIssues()
  }

  return (
    <SearchContainer>
      <header>
        <h1>Publicações</h1>
        <span>
          {issues.length === 1
            ? '1 Publicação'
            : issues.length + ' Publicações'}
        </span>
      </header>
      <form onSubmit={handleSubmit(handleSearchIssues)}>
        <InputWrapperContainer>
          <input
            placeholder="Buscar Conteúdo"
            type="text"
            {...register('query')}
          />
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            Buscar
          </Button>

          <Button
            variant="secondary"
            onClick={handleResetSearch}
            disabled={isSubmitting}
          >
            <FontAwesomeIcon icon={faX} />
            Limpar Busca
          </Button>
        </InputWrapperContainer>
      </form>
    </SearchContainer>
  )
}
