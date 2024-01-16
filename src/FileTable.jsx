import { Table, Upload } from 'antd'

const { Dragger } = Upload

export const FileTable = () => {
  const columns = [
    {
      title: 'Table Number',
      dataIndex: 'tableNumber',
      key: 'tableNumber',
      width: 200,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Document file',
      dataIndex: 'document',
      key: 'document',
      width: 600,
      render: (text, record) => {
        return (
          <div>
            <Dragger>
              <p className="ant-upload-text">Click or drag file</p>
            </Dragger>
          </div>
        )
      },
    },
  ]

  const dataSource = [
    {
      key: '1',
      tableNumber: '1',
      title: 'agony of human life',
      document: '',
    },
    {
      key: '2',
      tableNumber: '2',
      title: `Today's cooking secret`,
      document: '',
    },
  ]

  return <Table columns={columns} dataSource={dataSource} />
}
