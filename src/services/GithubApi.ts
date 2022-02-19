import axios from 'axios'
import { RepoData } from '../interfaces'

export const getStarredRepositories = async (date: string): Promise<RepoData[]> => {
  const url = `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc`
  const result = await axios.get(url)

  // remove unnecessary properties
  return result.data.items
    .map(({
      name,
      stargazers_count, // eslint-disable-line
      description,
      language,
      html_url // eslint-disable-line
    }: RepoData) => ({
      name,
      stargazers_count,
      description,
      language,
      html_url
    }))
}
