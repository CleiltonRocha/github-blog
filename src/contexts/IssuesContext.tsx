import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface IUser {
  login: string
}
export interface Issues {
  number: number
  title: string
  body: string
  created_at: string
  html_url: string
  comments: number
  user: IUser
}

interface IssuesContextType {
  issues: Issues[]
  fetchIssues: (query?: string) => Promise<void>
  isLoading: boolean
}

interface IssueProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssueProviderProps) {
  const [issues, setIssues] = useState<Issues[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchIssues = useCallback(async (q: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/search/issues?q=${q}%20repo:CleiltonRocha/github-blog`,
      )

      setIssues(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues, isLoading }}>
      {children}
    </IssuesContext.Provider>
  )
}
