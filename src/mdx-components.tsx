import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Mermaid } from '@/components/ui/mermaid';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Mermaid,
    ...components,
  };
}
