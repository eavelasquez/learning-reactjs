import { useState } from 'react'

import { IssueList, LabelPicker } from '../components'
import { LoadingIcon } from '../../shared/components'
import { useIssues } from '../hooks'

export const IssueListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const issuesQuery = useIssues()

  const handleLabelSelection = (label: string) => {
    if (selectedLabels.includes(label)) {
      setSelectedLabels(selectedLabels.filter(l => l !== label))
    } else {
      setSelectedLabels([...selectedLabels, label])
    }
  }

  return (
    <div className='row mt-5'>
      <div className='col-8'>
        {issuesQuery.isLoading ? <LoadingIcon /> : <IssueList issues={issuesQuery.data || []} />}
      </div>

      <div className='col-4'>
        <LabelPicker
          selectedLabels={selectedLabels}
          onLabelSelection={handleLabelSelection}
        />
      </div>
    </div>
  )
}
