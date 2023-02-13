import axios from 'axios'

import { Label, Issue } from '../issues/interfaces'

const { VITE_GITHUB_ACCESS_TOKEN } = import.meta.env

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `Bearer ${VITE_GITHUB_ACCESS_TOKEN}`
  }
})

export const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi.get<Label[]>('/labels')
  return data
}

export const getIssues = async (): Promise<Issue[]> => {
  const { data } = await githubApi.get<Issue[]>('/issues')
  return data
}
