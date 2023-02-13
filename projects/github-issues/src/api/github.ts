import axios from 'axios'

import { Label } from '../issues/interfaces/label'

const { VITE_GITHUB_ACCESS_TOKEN } = import.meta.env

export const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `Bearer ${VITE_GITHUB_ACCESS_TOKEN}`
  }
})

export const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi.get<Label[]>('/repos/facebook/react/labels')
  return data
}
