import React, { useState } from 'react'
import { RepoData } from '../../interfaces'
import LanguageFilter from './LanguageFilter'
import Repo from './Repo'

interface Props {
  items: RepoData[]
}

const ReposList = ({ items }: Props): JSX.Element => {
  const [filter, setFilter] = useState<string[]>([])

  const updateRepos = (): JSX.Element[] => {
    let filteredList = items
    if (filter.length > 0) {
      filteredList = items.filter(item => filter.includes(item.language))
    }
    return filteredList.map(data => <Repo data={data} key={data.name} />)
  }

  const onLanguageChange = (languageList: string[]): void => setFilter(languageList)

  return (
    <div className='w-100 flex flex-column'>
      <LanguageFilter items={items} onLanguageChange={onLanguageChange} />
      {updateRepos()}
    </div>
  )
}

export default ReposList
