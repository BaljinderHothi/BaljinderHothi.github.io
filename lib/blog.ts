export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string // "Baljinder Hothi" or "Baljinder Hothi & Someone Else"
  content: string // Supports LaTeX with $$ delimiters
  sources?: { title: string; url: string }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "aws-mcp-server",
    title: "Building an MCP Server at AWS Lambda",
    date: "August 2025",
    author: "Baljinder Hothi",
    content: `
When I joined AWS Lambda as an intern, I didn't expect to be tackling one of the most interesting problems in LLM reliability: hallucination in Model Context Protocol (MCP) interactions.

## The Problem

Our initial research revealed a concerning pattern: LLMs interacting with MCP tools had only a **7% success rate** when left unconstrained. Even worse, some failures carried ethical risks—the models would confidently execute incorrect operations.

The root cause? LLMs are fundamentally probabilistic. When given free reign over tool execution, they often:

- Chain tools in nonsensical orders
- Hallucinate parameters that don't exist
- Skip required validation steps

## The Solution: Constrained Execution

We designed a tool chaining framework with three key components:

1. **Execution Guardrails** - Hard constraints on which tools can follow which
2. **Parameter Validation** - Schema enforcement before any tool invocation
3. **State Tracking** - Maintaining context across multi-step operations

The result? **100% reliability** on valid inputs.

## Technical Implementation

The MCP server itself handles CRUDL operations linking Kafka message queues to Lambda functions. What used to take engineers hours of manual configuration now takes **10 seconds**.

$$\\text{Time Saved} = \\frac{\\text{Manual Time} - \\text{Automated Time}}{\\text{Manual Time}} \\approx 99.7\\%$$

## Impact

The framework was adopted by multiple internal teams and is now deployed to **16,000+ customers**. It's been open-sourced and continues to evolve.
    `,
    sources: [
      { title: "Model Context Protocol Spec", url: "https://modelcontextprotocol.io" },
      { title: "AWS Lambda Documentation", url: "https://docs.aws.amazon.com/lambda" },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}
