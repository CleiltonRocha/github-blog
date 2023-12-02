import { PostCard } from '../PostCard'
import { PostListContainer } from './styles'

export function PostList() {
  return (
    <PostListContainer>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </PostListContainer>
  )
}
