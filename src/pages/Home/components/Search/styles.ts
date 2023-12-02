import styled from 'styled-components'

export const SearchContainer = styled.div`
  max-width: 54rem;
  margin-top: 4.5rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: ${(props) => props.theme.textSizes['title-s']};
      color: ${(props) => props.theme.colors['base-subtitle']};
    }

    span {
      font-size: ${(props) => props.theme.textSizes['text-s']};
      color: ${(props) => props.theme.colors['base-span']};
    }
  }

  input[type='text'] {
    width: 100%;
    border: none;
    background-color: ${(props) => props.theme.colors['base-input']};
    border: 1px solid ${(props) => props.theme.colors['base-border']};
    border-radius: 6px;
    padding: 0.75rem 1rem;
    font-size: ${(props) => props.theme.textSizes['text-m']};
    color: ${(props) => props.theme.colors['base-text']};

    &:focus {
      border: 1px solid ${(props) => props.theme.colors.blue};
      outline: none;
    }

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
    }
  }
`
