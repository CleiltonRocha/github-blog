import ReactMarkdown from 'react-markdown'
import { PostContentContainer } from './styles'

interface IPostContent {
  content: string
}

export function PostContent({ content }: IPostContent) {
  return (
    <PostContentContainer>
      <ReactMarkdown>{content}</ReactMarkdown>
    </PostContentContainer>
  )
}
