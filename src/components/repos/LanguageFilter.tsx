import React, { useEffect, useState } from 'react'
import { RepoData } from '../../interfaces'
import Language from './Language'

interface Props {
  items: RepoData[]
  onLanguageChange: (languageList: string[]) => void
}

const LanguageFilter = ({ items, onLanguageChange }: Props): JSX.Element => {
  const [selectedList, setSelectedList] = useState<string[]>([])
  const languages: string[] = items
    .reduce((prevValue: string[], item: RepoData) => {
      if (!prevValue.includes(item.language) && item.language !== null) {
        prevValue.push(item.language)
      }
      return prevValue
    }, [])

  const onLanguageClick = (language: string): void => {
    if (selectedList.includes(language)) {
      setSelectedList(selectedList.filter(l => l !== language))
    } else {
      setSelectedList(selectedList.concat(language))
    }
  }

  useEffect(() => {
    onLanguageChange(selectedList)
  }, [selectedList])

  const components = languages
    .sort()
    .map(name =>
      <Language
        key={name}
        name={name}
        selected={selectedList.includes(name)}
        onClick={onLanguageClick}
      />)

  return (
    <>
      <h3 className='mv2 ttu f6'>Language filter:</h3>
      <div className='flex flex-row mt0 mb4 flex-wrap'>{components}</div>
    </>
  )
}

export default LanguageFilter
