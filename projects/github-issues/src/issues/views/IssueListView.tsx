import { IssueList, LabelPicker } from '../../components'

export const IssueListView = () => {
  return (
    <div className='row mt-5'>
      <div className='col-8'>
        <IssueList />
      </div>

      <div className='col-4'>
        <LabelPicker />
      </div>
    </div>
  )
}
