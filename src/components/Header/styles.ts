import styled from 'styled-components'
import bgHeader from '../../assets/bg-header.svg'

export const HeaderContainer = styled.header`
  height: 15.9375rem;

  background-image: url(${bgHeader});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3.375rem;
  padding-bottom: 9rem;
`
