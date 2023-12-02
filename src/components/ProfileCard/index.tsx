import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  InfoContainer,
  LinkContainer,
  ProfileCardContainer,
  ProfileCardInfoContainer,
  ProfileCardInfoHeader,
} from './styles'

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <img
        src="https://github.com/CleiltonRocha.png"
        width={148}
        height={148}
        alt=""
      />
      <ProfileCardInfoContainer>
        <ProfileCardInfoHeader>
          <h1>Cleilton Rocha</h1>
          <a href="#">
            <LinkContainer>
              <span>GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </LinkContainer>
          </a>
        </ProfileCardInfoHeader>
        <p>
          🔭 Front-end Developer and UI Designer at ETS Assessoria e Informática{' '}
          <br />
          📚 Graduating - Information Systems at Faculdade Tecnológica Lourenço
          Filho - FLF (Jul 2024). <br />
          🌱 Learning React, React-native, TypeScript, NextJS, NodeJS
        </p>
        <InfoContainer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>cleilton_rocha</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>ETS Software</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </div>
        </InfoContainer>
      </ProfileCardInfoContainer>
    </ProfileCardContainer>
  )
}
