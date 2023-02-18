import { useState } from 'react'

import { IssueList, LabelPicker } from '../components'
import { LoadingIcon } from '../../shared/components'
// import { Pagination } from '../components'
import { State } from '../interfaces'
import { useIssues } from '../hooks'

export const IssueListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])
  const [state, setState] = useState<State>()

  // infinite scroll
  const issuesQuery = useIssues({ state, labels: selectedLabels })

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
            issues={issuesQuery.data?.pages.flat() || []} // infinite scroll
            // issues={issuesQuery.data || []} // pagination
            state={state}
            onStateChange={setState}
          />
        }

        {/* <Pagination
          isFetching={issuesQuery.isFetching}
          page={issuesQuery.page}
          nextPage={issuesQuery.nextPage}
          prevPage={issuesQuery.prevPage}
        /> */}

        <div className='d-flex justify-content-center align-items-center mt-3'>
          <button
            type='button'
            className='btn btn-primary'
            onClick={() => issuesQuery.fetchNextPage()}
            disabled={!issuesQuery.hasNextPage || issuesQuery.isFetchingNextPage}
          >
            Load more
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
