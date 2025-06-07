import type { TableProps, TagProps } from "antd";
import type { Row, TagTypes } from "../types";

export const dataSource: TableProps<Row>['dataSource'] = [
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
        url: "https://github.com/cline/cline/pull/2600",
        repo: "cline",
        tags: ["chore"],
        createDate: new Date('2025-04-01')
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
        url: "https://github.com/cline/cline/pull/2684",
        repo: "cline",
        tags: ["style"],
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
        url: "https://github.com/cline/cline/pull/2878",
        repo: "cline",
        tags: ["refactor"],
        createDate: new Date('2025-04-14')
    },
    {
        id: 0,
        url: "https://github.com/cline/cline/pull/2879",
        repo: "cline",
        tags: ["refactor"],
        createDate: new Date('2025-04-14')
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
        url: "https://github.com/langgenius/dify/pull/17970",
        repo: "dify",
        tags: ["refactor"],
        createDate: new Date('2025-04-14')
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
    },
    {
        id: 0,
        url: "https://github.com/nodejs/node/pull/58093",
        repo: "node",
        tags: ["doc"],
        createDate: new Date('2025-05-01')
    },
    {
        id: 0,
        url: "https://github.com/nodejs/node/pull/58188",
        repo: "node",
        tags: ["doc"],
        createDate: new Date('2025-05-06')
    },
    {
        id: 0,
        url: "https://github.com/DefinitelyTyped/DefinitelyTyped/pull/72673",
        repo: "DefinitelyTyped",
        tags: ["doc"],
        createDate: new Date('2025-05-03')
    },
    {
        id: 0,
        url: "https://github.com/DefinitelyTyped/DefinitelyTyped/pull/72754",
        repo: "DefinitelyTyped",
        tags: ["doc"],
        createDate: new Date('2025-05-11')
    },
    {
        id: 0,
        url: "https://github.com/aszx87410/beyond-xss/pull/8",
        repo: "beyond-xss",
        tags: ["doc"],
        createDate: new Date('2025-05-11')
    },
    {
        id: 0,
        url: "https://github.com/mdn/content/pull/39556",
        repo: "mdnContent",
        tags: ["doc"],
        createDate: new Date('2025-05-18')
    },
    {
        id: 0,
        url: "https://github.com/mdn/content/pull/39580",
        repo: "mdnContent",
        tags: ["doc"],
        createDate: new Date('2025-05-20')
    },
    {
        id: 0,
        url: "https://github.com/mdn/content/pull/39583",
        repo: "mdnContent",
        tags: ["doc"],
        createDate: new Date('2025-05-20')
    },
    {
        id: 0,
        url: "https://github.com/mdn/content/pull/39586",
        repo: "mdnContent",
        tags: ["doc"],
        createDate: new Date('2025-05-20')
    },
    {
        id: 0,
        url: "https://github.com/microsoft/vscode-html-languageservice/pull/209",
        repo: "vscode-html-languageservice",
        tags: ["doc"],
        createDate: new Date('2025-05-21')
    }
];
dataSource.forEach((item, idx) => { item.id = idx });

export const TagColorMapping: { [key in TagTypes]: TagProps['color'] } = {
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

export const TagList = Object.keys(TagColorMapping) as TagTypes[];

export const pagination: TableProps['pagination'] = { pageSize: 10 };