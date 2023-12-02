import styled from 'styled-components'

export const ProfileCardContainer = styled.div`
  max-width: 54rem;
  padding: 2rem 2.5rem 2rem;
  margin-top: -6rem;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  align-items: center;
  gap: 2rem;

  background-color: ${(props) => props.theme.colors['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  img {
    border-radius: 8px;
  }
`

export const ProfileCardInfoContainer = styled.div`
  width: 100%;

  p {
    margin-top: 0.5rem;
    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.textSizes['text-m']};
  }
`

export const ProfileCardInfoHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: ${(props) => props.theme.textSizes['title-l']};
    flex: 1;
  }

  a {
    ${(props) => props.theme.textSizes['component-link']};
    color: ${(props) => props.theme.colors.blue};
    text-decoration: none;
    font-weight: 700;

    svg {
      margin-left: 0.5rem;
      color: ${(props) => props.theme.colors.blue};
    }
  }
`

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid transparent;

  &:hover {
    transition: border-bottom 0.2s;
    border-bottom: 1px solid ${(props) => props.theme.colors.blue};
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  margin-top: 1.5rem;

  font-size: ${(props) => props.theme.textSizes['text-m']};
  color: ${(props) => props.theme.colors['base-subtitle']};

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme.colors['base-label']};
      font-size: 1.125rem;
    }
  }
`
