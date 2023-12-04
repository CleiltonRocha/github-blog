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
  PostContent,
  PostInfoContainer,
  PostInfoData,
  PostInfoHeader,
} from './styles'
import { Link } from 'react-router-dom'

export function PostInfo() {
  return (
    <>
      <PostInfoContainer>
        <PostInfoHeader>
          <Link to="/">
            <LinkContainer>
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>VOLTAR</span>
            </LinkContainer>
          </Link>
          <a href="#">
            <LinkContainer>
              <span>VER NO GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </LinkContainer>
          </a>
        </PostInfoHeader>
        <h1>JavaScript data types and data structures</h1>
        <PostInfoData>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>cleilton_rocha</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>5 Comentários</span>
          </div>
        </PostInfoData>
      </PostInfoContainer>
      <PostContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. <br />
          <br />
          Dynamic typing <br />
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>
      </PostContent>
    </>
  )
}
