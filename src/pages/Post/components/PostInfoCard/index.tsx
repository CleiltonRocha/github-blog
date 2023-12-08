import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faComment,
  faChevronLeft,
  faCalendarDay,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  LinkContainer,
  PostInfoCardContainer,
  PostInfoData,
  PostInfoHeader,
} from './styles'
import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IPostInfoCardProps {
  htmlUrl: string
  title: string
  login: string
  createdAt: string
  comments: number
}

export function PostInfoCard({
  htmlUrl,
  title,
  login,
  createdAt,
  comments,
}: IPostInfoCardProps) {
  return (
    <PostInfoCardContainer>
      <PostInfoHeader>
        <Link to="/">
          <LinkContainer>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </LinkContainer>
        </Link>
        <a href={htmlUrl} target="_blank" rel="noreferrer">
          <LinkContainer>
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </LinkContainer>
        </a>
      </PostInfoHeader>
      <h1>{title}</h1>
      <PostInfoData>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>{login}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>
            {formatDistanceToNow(new Date(createdAt), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>{comments}</span>
        </div>
      </PostInfoData>
    </PostInfoCardContainer>
  )
}
