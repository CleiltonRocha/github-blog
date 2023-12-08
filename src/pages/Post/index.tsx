import { useParams } from 'react-router-dom'
import { useState, useCallback, useEffect } from 'react'

import { PostInfoCard } from './components/PostInfoCard'
import { Issues } from '../../contexts/IssuesContext'
import { api } from '../../lib/axios'
import { PostContent } from './components/PostContent'
import { Loader } from '../../components/Loader'

export function Post() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [issueData, setIssueData] = useState<Issues>({} as Issues)

  const getIssue = useCallback(async () => {
    try {
      setIsLoading(true)

      const response = await api.get(
        `/repos/CleiltonRocha/github-blog/issues/${id}`,
      )
      setIssueData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getIssue()
  }, [])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : issueData ? (
        <>
          <PostInfoCard
            htmlUrl={issueData.html_url}
            title={issueData.title}
            login={issueData.user.login}
            createdAt={issueData.created_at}
            comments={issueData.comments}
          />
          <PostContent content={issueData.body} />
        </>
      ) : (
        <p>Nenhuma informação encontrada.</p>
      )}
    </>
  )
}
