import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

export interface Issues {
  id: number
  title: string
  body: string
  created_at: string
}

interface IssuesContextType {
  issues: Issues[]
  fetchIssues: (query?: string) => Promise<void>
  searchText: string
  setSearchText: (searchText: string) => void
}

interface IssueProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssueProviderProps) {
  const [issues, setIssues] = useState<Issues[]>([])
  const [searchText, setSearchText] = useState<string>('')

  const fetchIssues = useCallback(async (q?: string) => {
    const response = await api.get('/search/issues', {
      params: {
        q,
      },
    })

    setIssues(response.data.items)
  }, [])

  useEffect(() => {
    fetchIssues(
      `${searchText}%20repo:rocketseat-education/reactjs-github-blog-challenge`,
    )
  }, [fetchIssues, searchText])

  return (
    <IssuesContext.Provider
      value={{ issues, fetchIssues, setSearchText, searchText }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
