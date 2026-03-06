import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Mermaid } from '@/components/ui/mermaid';
import { RoughDiagram } from '@/components/ui/rough-diagram';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Mermaid,
    RoughDiagram,
    ...components,
  };
}
