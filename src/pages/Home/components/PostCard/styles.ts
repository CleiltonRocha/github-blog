import styled from 'styled-components'

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.25rem;

  border-radius: 0.625rem;
  background-color: ${(props) => props.theme.colors['base-post']};
  cursor: pointer;

  header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    h1 {
      font-size: ${(props) => props.theme.textSizes['title-m']};
      color: ${(props) => props.theme.colors['base-title']};
      flex: 1;
    }

    span {
      font-size: ${(props) => props.theme.textSizes['text-s']};
      color: ${(props) => props.theme.colors['base-span']};
    }
  }

  p {
    font-size: ${(props) => props.theme.textSizes['text-m']};
    color: ${(props) => props.theme.colors['base-text']};
  }

  &:hover {
    outline: 2px solid ${(props) => props.theme.colors['base-label']};
  }
`
