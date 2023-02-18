import { useState } from 'react'

import { IssueList, LabelPicker } from '../components'
import { LoadingIcon } from '../../shared/components'
import { State } from '../interfaces'
import { useIssues } from '../hooks'

export const IssueListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const [state, setState] = useState<State>()

  const { issuesQuery, page, nextPage, prevPage } = useIssues({ state, labels: selectedLabels })

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
        {issuesQuery.isLoading
          ? <LoadingIcon />
          : <IssueList
            issues={issuesQuery.data || []}
            state={state}
            onStateChange={setState}
          />
        }

        <div className='d-flex justify-content-between align-items-center mt-3'>
          <button
            className='btn btn-primary'
            onClick={prevPage}
            disabled={issuesQuery.isFetching}
          >
            Prev
          </button>
          <span className='mx-2'>{page}</span>
          <button
            className='btn btn-primary'
            onClick={nextPage}
            disabled={issuesQuery.isFetching}
          >
            Next
          </button>
        </div>
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
