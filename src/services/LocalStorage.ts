import { RepoData } from '../interfaces'

const KEY = 'repos'
const savedRepos = window.localStorage.getItem(KEY)
const repos: RepoData[] = []

if (savedRepos !== null) {
  const r = JSON.parse(savedRepos)
  repos.push(...r)
}

const flush = (): void => {
  window.localStorage.setItem(KEY, JSON.stringify(repos))
  // force storage change on local as storage is only dispatch from anothe page
  window.dispatchEvent(new StorageEvent('storage'))
}

const findRepoIndex = (repoData: RepoData): number =>
  repos.findIndex(rd => rd.name === repoData.name)

export const hasLocalRepo = (repoData: RepoData): boolean =>
  findRepoIndex(repoData) > -1 // return a copy

export const saveLocalRepo = (repoData: RepoData): boolean => {
  if (findRepoIndex(repoData) > -1) {
    return false
  }

  repos.push(repoData)
  flush()
  return true
}

export const removeLocalRepo = (repoData: RepoData): boolean => {
  const index = findRepoIndex(repoData)

  if (index > -1) {
    repos.splice(index, 1)
    flush()
    return true
  }

  return false
}

export const getLocalRepos = (): RepoData[] => repos.concat()
