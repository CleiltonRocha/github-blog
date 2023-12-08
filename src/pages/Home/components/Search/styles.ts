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
`

export const InputWrapperContainer = styled.div`
  width: 100%;

  background-color: ${(props) => props.theme.colors['base-input']};
  border: 1px solid ${(props) => props.theme.colors['base-border']};
  border-radius: 6px;
  padding: 0.75rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus-within {
    border: 1px solid ${(props) => props.theme.colors.blue};
    outline: none;
  }

  input[type='text'] {
    width: 100%;
    flex: 1;
    border: none;
    background-color: transparent;
    font-size: ${(props) => props.theme.textSizes['text-m']};
    color: ${(props) => props.theme.colors['base-text']};

    &:focus {
      outline: none;
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px
        ${(props) => props.theme.colors['base-input']} inset;
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: ${(props) =>
        props.theme.colors['base-text']} !important;
    }

    &::placeholder {
      color: ${(props) => props.theme.colors['base-label']};
    }
  }
`

interface ButtonProps {
  variant: 'primary' | 'secondary'
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  margin-left: ${(props) => (props.variant === 'secondary' ? '1rem' : '0')};
  background-color: ${(props) =>
    props.variant === 'primary'
      ? props.theme.colors.blue
      : props.theme.colors['base-background']};
  color: ${(props) => props.theme.colors['base-title']};
  cursor: pointer;

  &:hover {
    transition: filter 0.2s;
    filter: brightness(0.7);
  }

  svg {
    font-size: 0.75rem;
  }
`
