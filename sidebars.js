module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Start Here',
      collapsible: false,
      items: [
        'basics/before-you-start',
        'basics/whats-mcp',
        'basics/llm-basics',
        'basics/technical-considerations',
        'basics/glossary',
        'basics/faq',
        'basics/user-stories',
        'basics/provider-integrations',
      ],
    },
    {
      type: 'category',
      label: 'Quickstart & Usage',
      collapsible: false,
      items: [
        'usage/getting-started',
        'usage/admin-ui',
        'usage/tool-management',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsible: true,
      items: [
        'advanced/advanced-usage',
      ],
    },
    {
      type: 'category',
      label: 'Extending & Contributing',
      collapsible: true,
      items: [
        'extending/extensibility',
        'extending/contributing',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsible: true,
      items: [
        'reference/api-reference',
        'reference/logs',
        'reference/security',
        'reference/migration-guide',
        'reference/troubleshooting',
        'reference/changelog',
      ],
    },
    {
      type: 'category',
      label: 'Architecture & Visuals',
      collapsible: true,
      items: [
        'architecture/plugin-architecture',
        'architecture/data-model',
        'architecture/extensibility-hooks',
        'architecture/diagrams',
        {
          type: 'link',
          label: 'SVG: Plugin Architecture',
          href: '/img/plugin-architecture.svg',
        },
        {
          type: 'link',
          label: 'SVG: Data Model',
          href: '/img/data-model.svg',
        },
        {
          type: 'link',
          label: 'SVG: LLM Flow',
          href: '/img/llm-flow.svg',
        },
        {
          type: 'link',
          label: 'SVG: Setup Flow',
          href: '/img/setup-flow.svg',
        },
        {
          type: 'link',
          label: 'SVG: REST API Flow',
          href: '/img/rest-api-flow.svg',
        },
        {
          type: 'link',
          label: 'SVG: Extensibility Hooks',
          href: '/img/extensibility-hooks.svg',
        },
        {
          type: 'link',
          label: 'SVG: Provider Selection',
          href: '/img/provider-selection.svg',
        },
        {
          type: 'link',
          label: 'SVG: UI Data Flow',
          href: '/img/ui-data-flow.svg',
        },
      ],
    },
  ],
}; 