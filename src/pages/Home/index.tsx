import { Header } from '../../components/Header'
import { ProfileCard } from '../../components/ProfileCard'
import { PostList } from './components/PostList'
import { Search } from './components/Search'

export function Home() {
  return (
    <>
      <Header />
      <ProfileCard />
      <Search />
      <PostList />
    </>
  )
}
