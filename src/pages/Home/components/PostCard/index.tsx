import { PostCardContainer } from './styles'
import { Link } from 'react-router-dom'

export function PostCard() {
  return (
    <Link to="/post">
      <PostCardContainer>
        <header>
          <h1>JavaScript data types and data structures</h1>
          <span>Há 1 dia</span>
        </header>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have...
        </p>
      </PostCardContainer>
    </Link>
  )
}
