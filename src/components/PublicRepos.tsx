import moment from 'moment'
import React, { useCallback, useEffect, useState } from 'react'
import ReposList from '../components/repos/ReposList'
import { RepoData } from '../interfaces'
import { getStarredRepositories } from '../services/GithubApi'

const PubliRepos = (): JSX.Element => {
  const date = moment().day(-7).format('YYYY-MM-DD')
  const [items, setItems] = useState<RepoData[]>([])

  const loadData = useCallback(async () => {
    const data = await getStarredRepositories(date)
    setItems(data)
  }, [])

  useEffect(() => {
    loadData()
      .catch(console.error)
  }, [loadData])

  return (
    <div className='flex flex-column'>
      <h3 className='f4 ma0 mb3 gray'>Top 30 repositories since {date} sorted by star count</h3>
      {items.length === 0 && <p className='f2 b blue'>Checking repositories ...</p>}
      {items.length > 0 && <ReposList items={items} />}
    </div>
  )
}

export default PubliRepos
