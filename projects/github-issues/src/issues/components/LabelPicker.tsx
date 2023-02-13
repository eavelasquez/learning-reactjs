import { useLabels } from '../hooks/useLabels'

export const LabelPicker = () => {
  const labelsQuery = useLabels()

  return (
    <div>
      {labelsQuery.isLoading && <div>Loading...</div>}
      {labelsQuery.isError && <div>Error: {`${labelsQuery.error}`}</div>}
      {labelsQuery.isSuccess && (
        <>
          {labelsQuery.data?.map(({ id, name, color }) => (
            <span
              key={id}
              className='badge rounded-pill m-1 label-picker'
              style={{ border: `1px solid #${color}`, color: `#${color}` }}
            >
              {name}
            </span>
          ))}
        </>
      )}
    </div>
  )
}
