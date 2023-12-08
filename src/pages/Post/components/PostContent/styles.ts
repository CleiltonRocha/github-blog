import styled from 'styled-components'

export const PostContentContainer = styled.div`
  padding: 2.5rem 2rem;
  max-width: 54rem;
  margin: 0 auto;

  p {
    font-size: ${(props) => props.theme.textSizes['text-m']};
    color: ${(props) => props.theme.colors['base-text']};
    line-height: 160%;
  }
`
