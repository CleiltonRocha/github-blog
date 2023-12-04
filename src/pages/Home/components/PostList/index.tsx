import { useContext } from 'react'
import { Issues, IssuesContext } from '../../../../contexts/IssuesContext'
import { PostCard } from '../PostCard'
import { PostListContainer } from './styles'

export function PostList() {
  const { issues } = useContext(IssuesContext)

  return (
    <PostListContainer>
      {issues?.map((issue: Issues) => {
        return (
          <PostCard
            key={issue.id}
            title={issue.title}
            body={issue.body}
            createdAt={issue.created_at}
          />
        )
      })}
    </PostListContainer>
  )
}
