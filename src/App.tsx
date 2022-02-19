import React, { useState } from 'react'
import 'tachyons'
import './App.css'
import Header from './components/Header'
import MyFavouriteRepos from './components/MyFavoritesRepos'
import PublicRepos from './components/PublicRepos'

const App = (): JSX.Element => {
  const [view, setView] = useState('public')

  return (
    <div className='app flex flex-column helvetica pa3 pa4-l mw9'>
      <Header />
      <div className='mb4 flex flex-column flex-row-ns'>
        <a className={`pa2 link dim tc ${view === 'public' ? 'bg-black white b' : 'bg-light-gray black'}`} href='#' onClick={() => setView('public')}>Public repos</a>
        <a className={`pa2 link dim tc ${view === 'fav' ? 'bg-black white b' : 'bg-light-gray black'}`} href='#' onClick={() => setView('fav')}>My favourite repos</a>
      </div>
      {view === 'public' && <PublicRepos />}
      {view === 'fav' && <MyFavouriteRepos />}
    </div>
  )
}

export default App
