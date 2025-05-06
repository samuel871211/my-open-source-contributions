import styles from './App.module.css';
import { Table, Tag } from "antd";
import type { TableProps } from "antd";
import type { TagTypes, Row } from './types';
import { dataSource, TagColorMapping, TagList, pagination } from './constants/table';
import { useState } from 'react';

function App() {
  const [columns] = useState<TableProps<Row>['columns']>([
    {
      title: 'url',
      dataIndex: "url",
      // width: 250,
      render: (_value, row, _index) => (
        <a href={row.url} target="_blank" rel="noreferrer noopener">
          {row.url.split("https://github.com/")[1]}
        </a>
      )
    },
    {
      title: 'createDate',
      dataIndex: "createDate",
      // width: 150,
      render: (_value, row, _index) => (
        row.createDate.toISOString().slice(0, 10)
      )
    },
    {
      title: 'tags',
      dataIndex: 'tags',
      filterMultiple: true,
      filters: TagList.map(tag => ({
        text: tag,
        value: tag
      })),
      onFilter: (value, row) => row.tags.includes(value as TagTypes),
      // width: 180,
      render: (_value, row, _index) => row.tags.map(tag =>
        <Tag key={tag} bordered color={TagColorMapping[tag]} className={styles.tag}>{tag}</Tag>
      )
    }
  ]);
  return (
    <main className={styles.container}>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey="id"
        pagination={pagination}
      ></Table>
    </main>
  )
}

export default App
