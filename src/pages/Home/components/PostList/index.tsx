import { useContext } from 'react'
import { Issues, IssuesContext } from '../../../../contexts/IssuesContext'
import { PostCard } from '../PostCard'
import { EmptyStateContainer, PostListContainer } from './styles'
import imgEmptyState from '../../../../assets/empty-state-issue.svg'
import { Loader } from '../../../../components/Loader'

export function PostList() {
  const { issues, isLoading } = useContext(IssuesContext)

  return (
    <PostListContainer>
      {isLoading ? (
        <Loader />
      ) : issues.length > 0 ? (
        issues.map((issue: Issues) => (
          <PostCard
            key={issue.number}
            number={issue.number}
            title={issue.title}
            body={issue.body}
            createdAt={issue.created_at}
          />
        ))
      ) : (
        <EmptyStateContainer>
          <img src={imgEmptyState} alt="" />
          <p>Nenhuma issue encontrada!</p>
        </EmptyStateContainer>
      )}
    </PostListContainer>
  )
}
