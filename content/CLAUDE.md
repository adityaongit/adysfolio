---
title: "Blog Writing Instructions for Claude"
description: Guidelines for creating Netflix/Amazon/Spotify style engineering blog posts
date: 2024-01-01
tags:
  - internal
  - documentation
---

# Blog Writing Instructions for Claude

**Purpose**: Create engineering blogs that sound like Netflix/Amazon/Spotify engineering posts — human, engaging, catchy.

**Location**: Save all blogs as `.mdx` files in `content/blog/`

**Required Frontmatter**:
```yaml
---
title: "Catchy, Specific Title With Hook"
description: Two-sentence summary with problem + surprising result.
date: 2025-XX-XX
tags:
  - tag1
  - tag2
  - tag3
---
```

---

## Voice & Tone

### Netflix/Amazon/Spotify Engineering Style

**Write like you're the engineer who built it:**
- First-person narrative: "I was working on X when I discovered Y"
- Problem-first storytelling: Start with the pain point, not the solution
- Concrete numbers: "Latency dropped from 340ms to 87ms" not "we improved performance"
- Real trade-offs: "We chose X over Y because Z" with actual reasons
- Honest failures: "This broke in production because..." not "we followed best practices"

**Paragraph Structure:**
- Short and punchy: 1-3 sentences per paragraph max
- One idea per paragraph
- Active voice: "We shipped this" not "This was shipped by us"
- Conversational but technical: Assume readers are engineers

### What Makes Blogs Catchy

**Title Hooks:**
- Specific numbers: "150ms on CPU" beats "Fast Video Processing"
- Contrarian claims: "LLMs Won't Return Clean JSON" beats "JSON Extraction Tips"
- Surprising results: "Reached 129 Countries Without Marketing" beats "How to Grow Users"
- Problem + solution: "How I Built X to Fix Y"

**Opening Hooks:**
```
❌ Bad: "In this blog post, I'll explain how to..."
✅ Good: "The problem was simple: I needed to process video in real-time, but everyone said I needed a GPU."
✅ Good: "I was building ColdCraft's AI resume tailor when the feature worked 70% of the time."
```

---

## Content Structure

### Standard Engineering Blog Structure

```
1. Hook (2-3 sentences)
   - State the problem directly
   - Why it matters
   - What makes it interesting

2. Solution Overview (1-2 sentences)
   - What you built
   - The surprising result/number

3. Technical Deep Dive (3-5 sections)
   - Each section = ONE key decision or insight
   - Include real code
   - Explain trade-offs
   - Show numbers where applicable

4. What I'd Do Differently (always include)
   - 2-3 honest reflections
   - What surprised you
   - What you'd change next time

5. Broader Takeaway (1-2 sentences)
   - Universal lesson readers can apply
   - Punchy closing
```

### Section Examples

**Hook:**
```
Sales reps spend 20–30% of their day on CRM updates. That's not a complaint — it's a number that shows up in every sales productivity study, and it's been true for years.
```

**Technical Section:**
```
## Reading the Right Context

The hardest part wasn't the LLM work — it was building reliable integrations with four different platforms that each expose data differently.

Gmail via the Gmail API gives you structured message data. Clean JSON, well-documented, predictable.

Zoom recordings require working with the Zoom API to pull meeting metadata and transcripts. The transcript format is clean but you need to handle speaker attribution carefully if you want to extract who said what.
```

**What I'd Do Differently:**
```
The gate thresholds are the hardest part to tune. Too sensitive and you run the LLM constantly. Too conservative and you miss events. I built a video streaming mode that lets you test with pre-recorded content at controlled speeds, which made tuning much easier.

I'd also explore running gate 3 on a separate thread entirely. Currently it's synchronous in the main loop, and even at 8–15ms, occasional spikes on busy scenes can cause frame drops.
```

**Broader Takeaway:**
```
Build something people search for. Make sure they can find it. Make sure it works when they do.

That's the whole playbook.
```

---

## Code Snippets

### Requirements
- **Real code only**: No pseudocode
- **Show imports**: Full context
- **Comment non-obvious parts**: Explain the "why" inline
- **Match existing conventions**: TypeScript/Python style
- **Relevant only**: Code that illustrates the point

### Code Block Format
```typescript
// Brief comment explaining what this does
import { X } from 'library';

function example() {
  const result = doThing();
  return result;
}
```

### When to Use Code
- To show actual implementation
- To demonstrate a clever optimization
- To illustrate a decision point
- To provide copy-pasteable value

**Never use code to:**
- Explain a concept better described in text
- Show trivial boilerplate
- Fake complexity

---

## Rough.js Diagrams

Use hand-drawn, sketchy diagrams for architecture, flows, and concepts. They feel more authentic and engaging than clean diagrams.

### When to Use Diagrams
- Architecture overview of the system
- Data flow between components
- Decision trees/flowcharts
- System evolution/timeline
- Mental models and concepts

### Diagram Placement
- **At the start**: Architecture overview to set the stage
- **Before code sections**: Visual of what you're about to explain
- **Before trade-off discussions**: Show the options being compared
- **One diagram per major section**: Don't overwhelm

### How to Create Rough.js Diagrams

Create a reusable component in your blog posts:

```tsx
import { RoughCanvas } from 'roughjs/bin/rough';
import { useEffect, useRef } from 'react';

export function RoughDiagram({ 
  draw,
  width = 600,
  height = 400 
}: {
  draw: (rc: any) => void;
  width?: number;
  height?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const rc = new RoughCanvas(canvas);
    
    draw(rc);
  }, [draw]);
  
  return <canvas 
    ref={canvasRef} 
    width={width} 
    height={height}
    className="my-8 mx-auto rounded-lg"
  />;
}
```

### Example Diagram: Architecture

```tsx
<RoughDiagram width={500} height={350} draw={(rc) => {
  // Video Input
  rc.rectangle(20, 20, 100, 60, {
    roughness: 2,
    stroke: '#60a5fa',
    strokeWidth: 2
  });
  rc.text('Video\nInput', 45, 50, { fontSize: 12 });
  
  // Arrow
  rc.line(120, 50, 180, 50, {
    stroke: '#9ca3af',
    strokeWidth: 2
  });
  
  // Motion Gate
  rc.rectangle(180, 20, 100, 60, {
    roughness: 2,
    stroke: '#34d399',
    strokeWidth: 2
  });
  rc.text('Motion\nGate', 205, 50, { fontSize: 12 });
  
  // Scene Gate
  rc.rectangle(180, 100, 100, 60, {
    roughness: 2,
    stroke: '#fbbf24',
    strokeWidth: 2
  });
  rc.text('Scene\nGate', 205, 130, { fontSize: 12 });
  
  // Arrow to Object Gate
  rc.line(280, 80, 350, 80, {
    stroke: '#9ca3af',
    strokeWidth: 2
  });
  
  // Object Gate
  rc.rectangle(350, 20, 100, 60, {
    roughness: 2,
    stroke: '#f87171',
    strokeWidth: 2
  });
  rc.text('Object\nGate', 375, 50, { fontSize: 12 });
  
  // LLM
  rc.rectangle(350, 100, 100, 60, {
    roughness: 2,
    stroke: '#a78bfa',
    strokeWidth: 2
  });
  rc.text('LLM\nAsync', 375, 130, { fontSize: 12 });
  
  // Output
  rc.rectangle(470, 50, 80, 80, {
    roughness: 2,
    stroke: '#ec4899',
    strokeWidth: 2
  });
  rc.text('Real-time\nResponse', 490, 90, { fontSize: 12 });
}} />
```

### Example Diagram: Decision Flow

```tsx
<RoughDiagram width={400} height={300} draw={(rc) => {
  // Start
  rc.circle(200, 30, 20, {
    roughness: 1.5,
    stroke: '#60a5fa',
    strokeWidth: 2
  });
  rc.text('Motion?', 190, 35, { fontSize: 11 });
  
  // Decision branches
  rc.line(200, 50, 200, 80, { stroke: '#9ca3af', strokeWidth: 2 });
  rc.line(200, 80, 120, 120, { stroke: '#ef4444', strokeWidth: 2 });
  rc.line(200, 80, 280, 120, { stroke: '#22c55e', strokeWidth: 2 });
  
  // No motion - discard
  rc.rectangle(60, 120, 100, 50, {
    roughness: 2,
    stroke: '#ef4444',
    strokeWidth: 2
  });
  rc.text('Discard', 95, 145, { fontSize: 11 });
  
  // Yes - check scene
  rc.rectangle(240, 120, 100, 50, {
    roughness: 2,
    stroke: '#22c55e',
    strokeWidth: 2
  });
  rc.text('Check Scene', 265, 145, { fontSize: 11 });
  
  // Continue arrow
  rc.line(290, 170, 290, 220, {
    stroke: '#9ca3af',
    strokeWidth: 2
  });
  
  // Object gate
  rc.rectangle(240, 220, 100, 50, {
    roughness: 2,
    stroke: '#f87171',
    strokeWidth: 2
  });
  rc.text('Object Gate', 260, 245, { fontSize: 11 });
}} />
```

### Diagram Best Practices
- **Roughness: 1.5–2.5** for sketchy, authentic feel
- **Color coding**: Different colors for different components
- **Simple shapes**: Rectangles, circles, arrows, text
- **Label everything**: No ambiguity
- **Caption below**: Brief explanation of what diagram shows

---

## TypographyMark Component

Use sparingly — maximum 1-2 times per post. Only for the most important insight.

```tsx
import { TypographyMark } from "@/components/ui/typography";

<TypographyMark>Real-time inference is fundamentally a filtering problem before it's a prediction problem.</TypographyMark>
```

**When to use:**
- The core thesis of the article
- A counterintuitive insight
- The most important technical insight

**When NOT to use:**
- Routine explanations
- Multiple times in quick succession
- For emphasis only (not insight)

---

## Tags

Use 4-6 relevant tags:

```
Common tags:
- python, typescript, javascript
- nextjs, react
- ai, llm, computer-vision
- performance, optimization
- infrastructure, architecture
- chrome-extension
- security
- open-source
- indie-hacking
- seo
- database
```

**Format:** Lowercase, hyphenated for multi-word tags

---

## Things to AVOID

### ❌ Don't Write Like This
- Long meandering paragraphs
- Abstract concepts without concrete examples
- "In this article we will..." intros
- Generic "lessons learned" without specifics
- Fake humble-brags
- Overusing emphasis (bold, italics, TypographyMark)
- Lecturing tone ("You should...", "Always remember...")

### ❌ Common AI Patterns to Avoid
- "In today's fast-paced world..."
- "As engineers, we often face..."
- "Let me walk you through..."
- "This is important because..."
- "It's worth noting that..."
- "In conclusion..."
- "Thank you for reading!"

### ❌ Code Smells
- `// TODO` comments
- `// FIXME` comments
- Placeholder text in code
- Unclear variable names
- Missing error handling in production code

---

## Netflix/Amazon/Spotify Style Examples

### Good Hooks
1. "Sales reps spend 20–30% of their day on CRM updates. That's not a complaint — it's a number that shows up in every sales productivity study, and it's been true for years."

2. "When I started building Soteira, the assumption from most people I talked to was: *you need a GPU for anything real-time with ML*."

3. "I was building an AI feature for ColdCraft that takes a job description and rewrites your resume bullet points to match it. The feature worked. The problem was that it worked maybe 70% of the time."

### Good Section Transitions
1. "Before any of the distribution story, there's a technical story."
2. "The hardest part wasn't the LLM work — it was building reliable integrations."
3. "One thing that surprised me: you don't need the Salesforce API to read data from Salesforce."

### Good Closing Lines
1. "Build something people search for. Make sure they can find it. Make sure it works when they do. That's the whole playbook."

2. "The broader lesson: when everyone tells you a thing requires hardware you don't have, it's worth asking whether the problem is actually the problem — or whether you're solving the expensive version of it when a cheaper, smarter version exists."

3. "The model is the easy part. The integrations, the data normalization, the edge cases — that's where the work actually lives."

---

## Quality Checklist

Before finalizing, ensure:

- [ ] First-person narrative throughout
- [ ] Short paragraphs (1-3 sentences max)
- [ ] Concrete numbers/metrics included
- [ ] Real code with imports
- [ ] "What I'd Do Differently" section present
- [ ] Broader takeaway at the end
- [ ] TypographyMark used ≤2 times
- [ ] Rough.js diagram at start or before key sections
- [ ] Frontmatter complete and accurate
- [ ] No fluff or filler paragraphs
- [ ] Every section advances the narrative
- [ ] Tags are relevant and properly formatted
- [ ] No "thank you for reading" ending
- [ ] No generic blog post opening/closing

---

## Post-Generation Review

After generating content, ask:

1. **Does this sound like something a Netflix/Amazon/Spotify engineer would write?**
   - Problem-first storytelling
   - Honest about failures
   - Concrete numbers
   - Real code examples

2. **Is every technical claim backed by real code or numbers?**

3. **Would this be useful to someone solving a similar problem?**

4. **Is it concise?**
   - Could you cut 20% without losing meaning?
   - Are paragraphs too long?

5. **Does it end with a broader lesson readers can apply?**

6. **Do the diagrams feel authentic and sketchy, not over-polished?**

---

## Key Principles

### Be Specific
❌ "We improved performance"
✅ "Latency dropped from 340ms to 87ms"

### Be Honest
❌ "Following best practices, we implemented..."
✅ "This broke in production because we didn't account for..."

### Be Concise
❌ "It is worth noting that one of the key considerations when approaching this problem..."
✅ "The key consideration: ..."

### Be Useful
❌ "In conclusion, we've learned that..."
✅ "Build something people search for. Make sure they can find it."

### Be Human
❌ "This article demonstrated the importance of..."
✅ "Here's what I'd do differently."

---

## When in Doubt

- **Shorter is better**: If a paragraph is 4+ sentences, split it
- **Specific > General**: Replace "optimizations improved performance" with "LCP dropped from 2.3s to 1.1s"
- **Stories > Lectures**: Frame everything as a problem you solved, not a lesson you're teaching
- **Honest > Perfect**: Admit mistakes and uncertainties
- **Code > Text**: If code explains it better than text, use code
- **Sketchy > Polished**: Rough.js diagrams feel more authentic than clean, perfect ones
