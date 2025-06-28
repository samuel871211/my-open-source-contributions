export type Row = {
    id: number;
    url: string;
    repo: Repo;
    tags: Array<TagTypes>;
    createDate: Date;
};

export type Repo =
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
    "typebot" |
    "node" |
    "DefinitelyTyped" |
    "beyond-xss" |
    "mdnContent" |
    "vscode-html-languageservice" |
    "ws";

export type TagTypes =
    "doc" |
    "test" |
    "feat" |
    "perf" |
    "refactor" |
    "typo" |
    "style" |
    "chore" |
    "fix";