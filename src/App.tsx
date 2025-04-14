import styles from './App.module.css';
import { Table, Tag } from "antd";
import type { TableProps, TagProps } from "antd";

type Repo = 
  "SWR" |
  "TanStack Query" |
  "E2B" |
  "E2B/dashboard" |
  "nanobrowser" |
  "modelcontextprotocol/docs" |
  "modelcontextprotocol/inspector" |
  "AzureDevOps-MCP" | 
  "cline" |
  "dify" |
  "liam" |
  "typebot";

type TagTypes = 
  "doc" |
  "test" |
  "feat" |
  "perf" |
  "refactor" |
  "typo" |
  "style" |
  "chore" |
  "fix";

const TagColorMapping: { [key in TagTypes]: TagProps['color'] } = {
  "doc": "blue",
  "test": "orange",
  "feat": "geekblue",
  "perf": "gold",
  "refactor": "lime",
  "typo": "cyan",
  "style": "purple",
  "chore": "pink",
  "fix": "red"
};
const TagList = Object.keys(TagColorMapping) as TagTypes[];

type Row = {
  id: number;
  url: string;
  repo: Repo;
  tags: Array<TagTypes>;
  createDate: Date;
};

const dataSource: TableProps<Row>['dataSource'] = [
  {
    id: 0,
    url: "https://github.com/vercel/swr/pull/4075",
    repo: "SWR",
    tags: ["refactor"],
    createDate: new Date('2025-01-26')
  },
  {
    id: 0,
    url: "https://github.com/TanStack/query/pull/8669",
    repo: "TanStack Query",
    tags: ["refactor"],
    createDate: new Date('2025-02-19')
  },
  {
    id: 0,
    url: "https://github.com/e2b-dev/E2B/pull/620",
    repo: "E2B",
    tags: ["typo"],
    createDate: new Date('2025-03-20')
  },
  {
    id: 0,
    url: "https://github.com/e2b-dev/E2B/pull/630",
    repo: "E2B",
    tags: ["typo"],
    createDate: new Date('2025-03-22')
  },
  {
    id: 0,
    url: "https://github.com/e2b-dev/E2B/pull/633",
    repo: "E2B",
    tags: ["chore"],
    createDate: new Date('2025-03-23')
  },
  {
    id: 0,
    url: "https://github.com/e2b-dev/dashboard/pull/16",
    repo: "E2B/dashboard",
    tags: ["typo"],
    createDate: new Date('2025-03-25')
  },
  {
    id: 0,
    url: "https://github.com/nanobrowser/nanobrowser/pull/55",
    repo: "nanobrowser",
    tags: ["refactor"],
    createDate: new Date('2025-03-19')
  },
  {
    id: 0,
    url: "https://github.com/nanobrowser/nanobrowser/pull/56",
    repo: "nanobrowser",
    tags: ["doc"],
    createDate: new Date('2025-03-19')
  },
  {
    id: 0,
    url: "https://github.com/nanobrowser/nanobrowser/pull/57",
    repo: "nanobrowser",
    tags: ["doc"],
    createDate: new Date('2025-03-19')
  },
  {
    id: 0,
    url: "https://github.com/nanobrowser/nanobrowser/pull/64",
    repo: "nanobrowser",
    tags: ["refactor", "perf"],
    createDate: new Date('2025-03-24')
  },
  {
    id: 0,
    url: "https://github.com/nanobrowser/nanobrowser/pull/65",
    repo: "nanobrowser",
    tags: ["feat", "style"],
    createDate: new Date('2025-03-24')
  },
  {
    id: 0,
    url: "https://github.com/nanobrowser/nanobrowser/pull/73",
    repo: "nanobrowser",
    tags: ["style"],
    createDate: new Date('2025-03-28')
  },
  {
    id: 0,
    url: "https://github.com/nanobrowser/nanobrowser/pull/77",
    repo: "nanobrowser",
    tags: ["style"],
    createDate: new Date('2025-03-30')
  },
  {
    id: 0,
    url: "https://github.com/nanobrowser/nanobrowser/pull/92",
    repo: "nanobrowser",
    tags: ["doc"],
    createDate: new Date('2025-04-05')
  },
  {
    id: 0,
    url: "https://github.com/modelcontextprotocol/docs/pull/194",
    repo: "modelcontextprotocol/docs",
    tags: ["doc"],
    createDate: new Date('2025-03-20')
  },
  {
    id: 0,
    url: "https://github.com/modelcontextprotocol/inspector/pull/207",
    repo: "modelcontextprotocol/inspector",
    tags: ["perf"],
    createDate: new Date('2025-03-23')
  },
  {
    id: 0,
    url: "https://github.com/modelcontextprotocol/inspector/pull/263",
    repo: "modelcontextprotocol/inspector",
    tags: ["chore"],
    createDate: new Date('2025-04-04')
  },
  {
    id: 0,
    url: "https://github.com/modelcontextprotocol/inspector/pull/264",
    repo: "modelcontextprotocol/inspector",
    tags: ["chore", "refactor"],
    createDate: new Date('2025-04-04')
  },
  {
    id: 0,
    url: "https://github.com/RyanCardin15/AzureDevOps-MCP/pull/2",
    repo: "AzureDevOps-MCP",
    tags: ["typo"],
    createDate: new Date('2025-03-25')
  },
  {
    id: 0,
    url: "https://github.com/RyanCardin15/AzureDevOps-MCP/pull/3",
    repo: "AzureDevOps-MCP",
    tags: ["perf"],
    createDate: new Date('2025-03-25')
  },
  {
    id: 0,
    url: "https://github.com/RyanCardin15/AzureDevOps-MCP/pull/4",
    repo: "AzureDevOps-MCP",
    tags: ["chore"],
    createDate: new Date('2025-03-25')
  },
  {
    id: 0,
    url: "https://github.com/RyanCardin15/AzureDevOps-MCP/pull/5",
    repo: "AzureDevOps-MCP",
    tags: ["perf"],
    createDate: new Date('2025-03-25')
  },
  {
    id: 0,
    url: "https://github.com/RyanCardin15/AzureDevOps-MCP/pull/8",
    repo: "AzureDevOps-MCP",
    tags: ["feat"],
    createDate: new Date('2025-03-28')
  },
  {
    id: 0,
    url: "https://github.com/RyanCardin15/AzureDevOps-MCP/pull/9",
    repo: "AzureDevOps-MCP",
    tags: ["doc"],
    createDate: new Date('2025-03-31')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2547",
    repo: "cline",
    tags: ["chore"],
    createDate: new Date('2025-03-30')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2548",
    repo: "cline",
    tags: ["perf"],
    createDate: new Date('2025-03-30')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2557",
    repo: "cline",
    tags: ["test"],
    createDate: new Date('2025-03-31')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2602",
    repo: "cline",
    tags: ["chore"],
    createDate: new Date('2025-04-01')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2645",
    repo: "cline",
    tags: ["refactor", "perf"],
    createDate: new Date('2025-04-03')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2650",
    repo: "cline",
    tags: ["refactor", "perf"],
    createDate: new Date('2025-04-03')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2680",
    repo: "cline",
    tags: ["chore"],
    createDate: new Date('2025-04-05')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2686",
    repo: "cline",
    tags: ["refactor", "perf", "style"],
    createDate: new Date('2025-04-05')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2802",
    repo: "cline",
    tags: ["refactor"],
    createDate: new Date('2025-04-11')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2803",
    repo: "cline",
    tags: ["refactor"],
    createDate: new Date('2025-04-11')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2805",
    repo: "cline",
    tags: ["refactor", "perf"],
    createDate: new Date('2025-04-11')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2807",
    repo: "cline",
    tags: ["refactor"],
    createDate: new Date('2025-04-11')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2808",
    repo: "cline",
    tags: ["refactor"],
    createDate: new Date('2025-04-11')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2810",
    repo: "cline",
    tags: ["refactor"],
    createDate: new Date('2025-04-11')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2812",
    repo: "cline",
    tags: ["chore"],
    createDate: new Date('2025-04-11')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2816",
    repo: "cline",
    tags: ["refactor", "perf"],
    createDate: new Date('2025-04-11')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2850",
    repo: "cline",
    tags: ["refactor"],
    createDate: new Date('2025-04-12')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2851",
    repo: "cline",
    tags: ["refactor"],
    createDate: new Date('2025-04-12')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2852",
    repo: "cline",
    tags: ["refactor"],
    createDate: new Date('2025-04-12')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2853",
    repo: "cline",
    tags: ["refactor"],
    createDate: new Date('2025-04-12')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2854",
    repo: "cline",
    tags: ["refactor"],
    createDate: new Date('2025-04-12')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2855",
    repo: "cline",
    tags: ["refactor"],
    createDate: new Date('2025-04-12')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2856",
    repo: "cline",
    tags: ["refactor"],
    createDate: new Date('2025-04-12')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2857",
    repo: "cline",
    tags: ["refactor"],
    createDate: new Date('2025-04-12')
  },
  {
    id: 0,
    url: "https://github.com/langgenius/dify/pull/17426",
    repo: "dify",
    tags: ["doc"],
    createDate: new Date('2025-04-03')
  },
  {
    id: 0,
    url: "https://github.com/langgenius/dify/pull/17431",
    repo: "dify",
    tags: ["refactor"],
    createDate: new Date('2025-04-03')
  },
  {
    id: 0,
    url: "https://github.com/langgenius/dify/pull/17439",
    repo: "dify",
    tags: ["refactor", "perf"],
    createDate: new Date('2025-04-04')
  },
  {
    id: 0,
    url: "https://github.com/langgenius/dify/pull/17443",
    repo: "dify",
    tags: ["fix"],
    createDate: new Date('2025-04-04')
  },
  {
    id: 0,
    url: "https://github.com/langgenius/dify/pull/17444",
    repo: "dify",
    tags: ["refactor", "perf"],
    createDate: new Date('2025-04-04')
  },
  {
    id: 0,
    url: "https://github.com/langgenius/dify/pull/17495",
    repo: "dify",
    tags: ["refactor", "perf"],
    createDate: new Date('2025-04-06')
  },
  {
    id: 0,
    url: "https://github.com/langgenius/dify/pull/17496",
    repo: "dify",
    tags: ["refactor", "perf"],
    createDate: new Date('2025-04-06')
  },
  {
    id: 0,
    url: "https://github.com/langgenius/dify/pull/17497",
    repo: "dify",
    tags: ["refactor"],
    createDate: new Date('2025-04-06')
  },
  {
    id: 0,
    url: "https://github.com/langgenius/dify/pull/17498",
    repo: "dify",
    tags: ["refactor", "perf"],
    createDate: new Date('2025-04-06')
  },
  {
    id: 0,
    url: "https://github.com/langgenius/dify/pull/17656",
    repo: "dify",
    tags: ["refactor", "perf", "chore"],
    createDate: new Date('2025-04-09')
  },
  {
    id: 0,
    url: "https://github.com/langgenius/dify/pull/17951",
    repo: "dify",
    tags: ["refactor", "perf"],
    createDate: new Date('2025-04-13')
  },
  {
    id: 0,
    url: "https://github.com/liam-hq/liam/pull/1166",
    repo: "liam",
    tags: ["chore"],
    createDate: new Date('2025-04-07')
  },
  {
    id: 0,
    url: "https://github.com/liam-hq/liam/pull/1167",
    repo: "liam",
    tags: ["refactor", "perf"],
    createDate: new Date('2025-04-09')
  },
  {
    id: 0,
    url: "https://github.com/liam-hq/liam/pull/1213",
    repo: "liam",
    tags: ["doc"],
    createDate: new Date('2025-04-07')
  },
  {
    id: 0,
    url: "https://github.com/liam-hq/liam/pull/1216",
    repo: "liam",
    tags: ["chore"],
    createDate: new Date('2025-04-07')
  },
  {
    id: 0,
    url: "https://github.com/liam-hq/liam/pull/1326",
    repo: "liam",
    tags: ["refactor"],
    createDate: new Date('2025-04-13')
  },
  {
    id: 0,
    url: "https://github.com/baptisteArno/typebot.io/pull/2120",
    repo: "typebot",
    tags: ["refactor"],
    createDate: new Date('2025-04-06')
  }
];
dataSource.forEach((item, idx) => { item.id = idx });

const columns: TableProps<Row>['columns'] = [
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
];

const pagination: TableProps['pagination'] = { pageSize: 10 }

function App() {
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
