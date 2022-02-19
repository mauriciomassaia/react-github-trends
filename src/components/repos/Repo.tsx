import React from 'react'
import { RepoData } from '../../interfaces'
import RepoFavButton from './RepoFavButton'

interface Props {
  data: RepoData
}

const Repo = ({ data }: Props): JSX.Element => {
  return (
    <div className='w-100 mv4 mv1-l flex flex-column flex-row-l bg-light-blue'>
      <div className='flex flex-row items-center bg-yellow pa3 pv2-l flex-shrink-0'>
        <a href={data.html_url} title={data.name} className='f4 f3-l black b link ttu'>{data.name}</a>
        <div className='ml3 f4 f3-l b'>#{data.stargazers_count}</div>
      </div>
      {
        data.language !== null &&
          <div className='ph3 pv2 bg-light-pink flex items-center  flex-grow-1 flex-grow-0-l'>
            <span className='f5 f4-l b'>{data.language}</span>
          </div>
      }
      <p className='ph3 pv2 lh-copy flex-grow-1 flex items-center'>{data.description}</p>
      <RepoFavButton data={data} />
    </div>
  )
}

export default Repo
