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
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface ProfileData {
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  followers: number
  avatar_url: string
}

export function ProfileCard() {
  const [userData, setUserData] = useState<ProfileData>()

  const fetchUserData = useCallback(async () => {
    const response = await api.get('/users/CleiltonRocha')
    setUserData(response.data)
  }, [])

  useEffect(() => {
    fetchUserData()
  }, [fetchUserData])

  return (
    <ProfileCardContainer>
      <img src={userData?.avatar_url} width={148} height={148} alt="" />
      <ProfileCardInfoContainer>
        <ProfileCardInfoHeader>
          <h1>{userData?.name}</h1>
          <a href={userData?.html_url}>
            <LinkContainer>
              <span>GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </LinkContainer>
          </a>
        </ProfileCardInfoHeader>
        <p>{userData?.bio}</p>
        <InfoContainer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{userData?.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{userData?.company}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{userData?.followers} seguidores</span>
          </div>
        </InfoContainer>
      </ProfileCardInfoContainer>
    </ProfileCardContainer>
  )
}
