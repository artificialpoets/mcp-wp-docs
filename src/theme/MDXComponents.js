import React from 'react';
import CodeBlock from '@site/src/components/CodeBlock';
import MermaidDiagram from '@site/src/components/MermaidDiagram';

export default {
  // Only apply CodeBlock to actual code blocks (with pre tags)
  pre: (props) => {
    const { children } = props;
    // Check if the pre contains a code element
    if (children && children.props && children.props.className) {
      return <CodeBlock {...children.props} />;
    }
    return <pre {...props} />;
  },
  // For inline code, use regular code styling
  code: (props) => {
    // If it's a code block (has className with language), let pre handle it
    if (props.className) {
      return <code {...props} />;
    }
    // For inline code, just return a regular code element
    return <code {...props} />;
  },
  // Mermaid diagram component
  MermaidDiagram: (props) => <MermaidDiagram {...props} />,
}; 