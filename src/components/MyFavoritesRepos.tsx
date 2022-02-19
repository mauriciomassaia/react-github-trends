import React, { useEffect, useState } from 'react'
import ReposList from '../components/repos/ReposList'
import { RepoData } from '../interfaces'
import { getLocalRepos } from '../services/LocalStorage'

const MyFavouriteRepos = (): JSX.Element => {
  const [items, setItems] = useState<RepoData[]>(getLocalRepos())

  useEffect(() => {
    const update = (): void => setItems(getLocalRepos())

    window.addEventListener('storage', update)

    return () => window.removeEventListener('storage', update)
  }, [])

  return (
    <div className='flex flex-column'>
      <h3 className='f4 ma0 mb3 gray'>My favourite repos</h3>
      {items.length === 0 && <p className='f2 b blue'>You dont have any favourite repo.</p>}
      {items.length > 0 && <ReposList items={items} />}
    </div>
  )
}

export default MyFavouriteRepos
