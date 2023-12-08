import styled from 'styled-components'

export const PostListContainer = styled.div`
  max-width: 54rem;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 6.25rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  position: relative;
`

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 6.25rem;

  color: ${(props) => props.theme.colors['base-text']};

  position: absolute;
  top: 50%;
  left: 40%;
  transform: (-50%, -50%);
`
