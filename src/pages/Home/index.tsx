import { ProfileCard } from '../../components/ProfileCard'
import { PostList } from './components/PostList'
import { Search } from './components/Search'

export function Home() {
  return (
    <>
      <ProfileCard />
      <Search />
      <PostList />
    </>
  )
}
