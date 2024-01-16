import './FileTable.css'

export const FileTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th colSpan={3}>Drag & Drop Table</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td width={120}>Table Number </td>
          <td width={250}>Title</td>
          <td>File</td>
        </tr>
        <tr style={{ textAlign: 'center' }}>
          <td>1</td>
          <td>agony of human life</td>
          <td>todo...</td>
        </tr>
        <tr style={{ textAlign: 'center' }}>
          <td>2</td>
          <td>Today's cooking secret</td>
          <td>todo...</td>
        </tr>
      </tbody>
    </table>
  )
}
