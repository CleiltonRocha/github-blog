import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { PostCardContainer } from './styles'

interface PostCardProps {
  number: number
  title: string
  body: string
  createdAt: string
}

export function PostCard({ number, title, body, createdAt }: PostCardProps) {
  return (
    <Link to={`post/${number}`}>
      <PostCardContainer>
        <header>
          <h1>{title}</h1>
          <span>
            {formatDistanceToNow(new Date(createdAt), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </header>
        <p>{body?.slice(0, 200) + '...'}</p>
      </PostCardContainer>
    </Link>
  )
}
