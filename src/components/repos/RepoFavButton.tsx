import React, { useState } from 'react'
import { RepoData } from '../../interfaces'
import { hasLocalRepo, removeLocalRepo, saveLocalRepo } from '../../services/LocalStorage'

interface Props {
  data: RepoData
}

const RepoFavButton = ({ data }: Props): JSX.Element => {
  const [fav, setFav] = useState(hasLocalRepo(data))

  const onFavClick = (): void => {
    if (fav) {
      if (removeLocalRepo(data)) {
        setFav(false)
      }
    } else {
      if (saveLocalRepo(data)) {
        setFav(true)
      }
    }
  }

  return (
    <div
      onClick={onFavClick}
      className={`flex self-end self-stretch-l flex-shrink-0 b items-center justify-center pa3 w3 bg-${fav ? 'light-green' : 'moon-gray'} button`}
    >
      <span className='lh-solid f4 f3-l black'>{fav ? '-' : '+'}</span>
    </div>
  )
}

export default RepoFavButton
