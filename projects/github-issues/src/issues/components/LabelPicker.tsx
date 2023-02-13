import { FC } from 'react'
import { LoadingIcon } from '../../shared/components/LoadingIcon'
import { useLabels } from '../hooks/useLabels'

interface LabelPickerProps {
  selectedLabels: string[]
  onLabelSelection: (label: string) => void
}

export const LabelPicker: FC<LabelPickerProps> = ({
  selectedLabels,
  onLabelSelection
}) => {
  const labelsQuery = useLabels()

  const isLabelSelected = (label: string) => selectedLabels.includes(label)

  return (
    <div>
      {labelsQuery.isLoading && <LoadingIcon />}
      {labelsQuery.isError && <div>Error: {`${labelsQuery.error}`}</div>}
      {labelsQuery.isSuccess && (
        <>
          {labelsQuery.data?.map(({ id, name, color }) => (
            <span
              key={id}
              className={`badge rounded-pill m-1 label-picker ${isLabelSelected(name) ? 'label-active' : ''}`}
              style={{ border: `1px solid #${color}`, color: `#${color}` }}
              onClick={() => onLabelSelection(name)}
            >
              {name}
            </span>
          ))}
        </>
      )}
    </div>
  )
}
