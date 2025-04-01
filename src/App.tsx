import styles from './App.module.css';
import { Link, Chip, SxProps } from '@mui/material';
import { DataGrid, GridColDef, getGridStringOperators } from '@mui/x-data-grid';

type Repo = 
  "SWR" |
  "TanStack Query" |
  "E2B" |
  "E2B/dashboard" |
  "nanobrowser" |
  "modelcontextprotocol/docs" |
  "modelcontextprotocol/inspector" |
  "AzureDevOps-MCP" | 
  "cline";

type TagTypes = 
  "React" |
  "NodeJS" |
  "AI" |
  "documentation" |
  "test" |
  "feature" |
  "performance" |
  "typeImprovement" |
  "typo" |
  "UIUX" |
  "package.json";

// todo-yusheng
// const TagColorMapping: { [key in TagTypes]: ChipTypeMap['props']['color'] } = {
//   "React": "default",
//   "NodeJS": "default",
//   "AI": "default",
//   "documentation": "default",
//   "test": "default",
//   "feature": "default",
//   "performance": "default",
//   "typeImprovement": "default",
//   "typo": "default",
//   "UIUX": "default",
//   "package.json": "default"
// }

type Row = {
  id: number;
  url: string;
  repo: Repo;
  tags: Array<TagTypes>;
  createDate: Date;
};

const rows: Array<Row> = [
  {
    id: 0,
    url: "https://github.com/vercel/swr/pull/4075",
    repo: "SWR",
    tags: ["React", "typeImprovement"],
    createDate: new Date('2025-01-26')
  },
  {
    id: 0,
    url: "https://github.com/TanStack/query/pull/8669",
    repo: "TanStack Query",
    tags: ["React", "typeImprovement"],
    createDate: new Date('2025-02-19')
  },
  {
    id: 0,
    url: "https://github.com/e2b-dev/E2B/pull/620",
    repo: "E2B",
    tags: ["AI", "typo"],
    createDate: new Date('2025-03-20')
  },
  {
    id: 0,
    url: "https://github.com/e2b-dev/E2B/pull/630",
    repo: "E2B",
    tags: ["AI", "typo"],
    createDate: new Date('2025-03-22')
  },
  {
    id: 0,
    url: "https://github.com/e2b-dev/E2B/pull/633",
    repo: "E2B",
    tags: ["AI", "package.json"],
    createDate: new Date('2025-03-23')
  },
  {
    id: 0,
    url: "https://github.com/e2b-dev/dashboard/pull/16",
    repo: "E2B/dashboard",
    tags: ["AI", "typo"],
    createDate: new Date('2025-03-25')
  },
  {
    id: 0,
    url: "https://github.com/nanobrowser/nanobrowser/pull/55",
    repo: "E2B/dashboard",
    tags: ["AI", "typeImprovement"],
    createDate: new Date('2025-03-19')
  },
  {
    id: 0,
    url: "https://github.com/nanobrowser/nanobrowser/pull/56",
    repo: "E2B/dashboard",
    tags: ["AI", "documentation"],
    createDate: new Date('2025-03-19')
  },
  {
    id: 0,
    url: "https://github.com/nanobrowser/nanobrowser/pull/57",
    repo: "E2B/dashboard",
    tags: ["AI", "documentation"],
    createDate: new Date('2025-03-19')
  },
  {
    id: 0,
    url: "https://github.com/nanobrowser/nanobrowser/pull/64",
    repo: "E2B/dashboard",
    tags: ["React", "AI", "typeImprovement", "performance"],
    createDate: new Date('2025-03-24')
  },
  {
    id: 0,
    url: "https://github.com/nanobrowser/nanobrowser/pull/65",
    repo: "E2B/dashboard",
    tags: ["React", "AI", "feature", "UIUX"],
    createDate: new Date('2025-03-24')
  },
  {
    id: 0,
    url: "https://github.com/nanobrowser/nanobrowser/pull/73",
    repo: "E2B/dashboard",
    tags: ["React", "AI", "UIUX"],
    createDate: new Date('2025-03-28')
  },
  {
    id: 0,
    url: "https://github.com/nanobrowser/nanobrowser/pull/77",
    repo: "E2B/dashboard",
    tags: ["React", "AI", "UIUX"],
    createDate: new Date('2025-03-30')
  },
  {
    id: 0,
    url: "https://github.com/modelcontextprotocol/docs/pull/194",
    repo: "modelcontextprotocol/docs",
    tags: ["NodeJS", "AI", "documentation"],
    createDate: new Date('2025-03-20')
  },
  {
    id: 0,
    url: "https://github.com/modelcontextprotocol/inspector/pull/207",
    repo: "modelcontextprotocol/inspector",
    tags: ["React", "AI", "performance"],
    createDate: new Date('2025-03-23')
  },
  {
    id: 0,
    url: "https://github.com/RyanCardin15/AzureDevOps-MCP/pull/2",
    repo: "AzureDevOps-MCP",
    tags: ["AI", "typo"],
    createDate: new Date('2025-03-25')
  },
  {
    id: 0,
    url: "https://github.com/RyanCardin15/AzureDevOps-MCP/pull/3",
    repo: "AzureDevOps-MCP",
    tags: ["AI", "performance"],
    createDate: new Date('2025-03-25')
  },
  {
    id: 0,
    url: "https://github.com/RyanCardin15/AzureDevOps-MCP/pull/4",
    repo: "AzureDevOps-MCP",
    tags: ["AI", "package.json"],
    createDate: new Date('2025-03-25')
  },
  {
    id: 0,
    url: "https://github.com/RyanCardin15/AzureDevOps-MCP/pull/5",
    repo: "AzureDevOps-MCP",
    tags: ["AI", "performance"],
    createDate: new Date('2025-03-25')
  },
  {
    id: 0,
    url: "https://github.com/RyanCardin15/AzureDevOps-MCP/pull/8",
    repo: "AzureDevOps-MCP",
    tags: ["NodeJS", "AI", "feature"],
    createDate: new Date('2025-03-28')
  },
  {
    id: 0,
    url: "https://github.com/RyanCardin15/AzureDevOps-MCP/pull/9",
    repo: "AzureDevOps-MCP",
    tags: ["AI", "documentation"],
    createDate: new Date('2025-03-31')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2547",
    repo: "cline",
    tags: ["AI", "package.json"],
    createDate: new Date('2025-03-30')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2548",
    repo: "cline",
    tags: ["AI", "performance"],
    createDate: new Date('2025-03-30')
  },
  {
    id: 0,
    url: "https://github.com/cline/cline/pull/2557",
    repo: "cline",
    tags: ["AI", "test"],
    createDate: new Date('2025-03-31')
  },
];
rows.forEach((row, idx) => { row.id = idx });

const chipCss: SxProps = { mr: 0.5 };
const stringOperators = getGridStringOperators();
const tagsOperators = stringOperators.filter(operator => operator.value === "contains");
const columns: Array<GridColDef<Row>> = [
  {
    field: 'url',
    width: 300,
    disableColumnMenu: true,
    renderCell: (params) => (
      <Link href={params.value} target="_blank">
        {params.value.split("https://github.com/")[1]}
      </Link>
    )
  },
  {
    field: 'createDate',
    type: 'date',
    width: 150,
    disableColumnMenu: true
  },
  // todo-yusheng 想要有 tag 多選的功能
  {
    field: 'tags',
    width: 380,
    sortable: false,
    hideSortIcons: true,
    filterOperators: tagsOperators,
    renderCell: (params) => params.value.map((tag: string) => 
      <Chip key={tag} label={tag} variant="filled" color="info" sx={chipCss} />
    )
  }
];

function App() {
  return (
    <div className={styles.container}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
      ></DataGrid>
    </div>
  )
}

export default App
