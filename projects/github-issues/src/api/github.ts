import axios from 'axios'

import { Label, Issue } from '../issues/interfaces'
import { sleep } from '../helpers/sleep'

const { VITE_GITHUB_ACCESS_TOKEN } = import.meta.env

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `Bearer ${VITE_GITHUB_ACCESS_TOKEN}`
  }
})

export const getLabels = async (): Promise<Label[]> => {
  sleep(2)
  const { data } = await githubApi.get<Label[]>('/labels?per_page=100')
  return data
}

interface GetIssuesParams {
  state?: string
  labels?: string[]
  page?: number
}

export const getIssues = async (
  { state, labels, page }: GetIssuesParams
): Promise<Issue[]> => {
  sleep(2)
  const params = new URLSearchParams()
  if (state) params.append('state', state)
  if (labels) params.append('labels', labels.join(','))
  params.append('page', page?.toString() ?? '1')
  params.append('per_page', '5')

  const { data } = await githubApi.get<Issue[]>('/issues', { params })
  return data
}

export const getIssue = async (id: number): Promise<Issue> => {
  sleep(2)
  const { data } = await githubApi.get<Issue>(`/issues/${id}`)
  return data
}

export const getIssueComments = async (id: number): Promise<Issue[]> => {
  sleep(2)
  const { data } = await githubApi.get<Issue[]>(`/issues/${id}/comments`)
  return data
}
