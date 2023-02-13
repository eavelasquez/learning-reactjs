import axios from 'axios';

import { Label } from '../issues/interfaces/label';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json'
  }
})

export const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi.get<Label[]>('/repos/facebook/react/labels')
  return data
}
