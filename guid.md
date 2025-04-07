
# Nextjs Guide

---

created: 2025-04-06 03:43:32
---

# Next.js Advanced Public Frontend Guide (with shadcn/ui) - FINAL COMPLETE VERSION

This guide provides an exhaustive, final plan for building a professional, modern, **standalone public-facing frontend application** using Next.js, TypeScript, Tailwind CSS, and `shadcn/ui`. It focuses intensely on page structure, component design, a robust documentation section, and best practices, excluding all backend considerations.



* **Rationale for Extensive List:** This command installs a wide array of components covering:
  * **Basic Elements:** Buttons, Inputs, Labels, Badges, Icons.
  * **Layout & Structure:** Card, Accordion, Collapsible, Separator, Aspect Ratio, Scroll Area, Resizable Drawer, Sidebar.
  * **Navigation:** Navigation Menu, Dropdown Menu, Tabs, Breadcrumb, Pagination, Tree View (for docs sidebar).
  * **Data Display:** Table, Data Table, Progress, Skeleton, Avatar, Typography, Vertical Timeline.
  * **Feedback & Interaction:** Alert, Alert Dialog, Dialog, Sheet, Toast (Sonner recommended), Tooltip, Hover Card, Context Menu, KBD, Command Dialog.
  * **Forms & Input:** Form (integrates react-hook-form/zod), Select, Multi-Select, Switch, Checkbox, Radio Group, Date Picker, Slider, Textarea, Input OTP, Number Input, Segmented Control.
  * **Documentation Specific:** Code Block, Callout.
  * **Advanced:** Carousel, Scroll Snap.

## 3. Advanced Frontend Project Structure (Detailed)

Organize your `src` directory meticulously for clarity, scalability, and maintainability, clearly separating public pages, the dedicated documentation section, reusable components, configuration, and content sources (if using MDX).

```
src/
├── app/                      # === Next.js App Router Root ===
│   ├── (public)/             # === Main Public Pages Route Group (No URL Prefix) ===
│   │   ├── about/            # URL: /about
│   │   │   └── page.tsx      # Renders the About page content
│   │   ├── services/         # URL: /services
│   │   │   └── page.tsx      # Renders the Services page content
│   │   ├── pricing/          # URL: /pricing
│   │   │   └── page.tsx      # Renders the Pricing page content
│   │   ├── contact/          # URL: /contact (Optional, but common)
│   │   │   └── page.tsx      # Renders the Contact page content
│   │   ├── blog/             # URL: /blog (Optional, but common)
│   │   │   ├── page.tsx      # Renders the blog index/listing
│   │   │   └── [slug]/       # URL: /blog/{dynamic-slug}
│   │   │       └── page.tsx  # Renders an individual blog post page
│   │   ├── docs/             # === Documentation Section Route Group === (URL: /docs/...)
│   │   │   ├── layout.tsx    # === SPECIAL LAYOUT for /docs/** routes (Adds Sidebar) ===
│   │   │   ├── page.tsx      # URL: /docs (Docs Introduction/Overview Page)
│   │   │   ├── introduction/ # Category Folder
│   │   │   │   ├── page.tsx  # URL: /docs/introduction (Optional category landing)
│   │   │   │   └── overview/ # Example nested page
│   │   │   │       └── page.tsx # URL: /docs/introduction/overview
│   │   │   ├── getting-started/ # Category Folder
│   │   │   │   ├── page.tsx  # URL: /docs/getting-started
│   │   │   │   └── installation/
│   │   │   │       └── page.tsx # URL: /docs/getting-started/installation
│   │   │   │   └── configuration/
│   │   │   │       └── page.tsx # URL: /docs/getting-started/configuration
│   │   │   ├── core-concepts/ # Category Folder
│   │   │   │   ├── page.tsx  # URL: /docs/core-concepts
│   │   │   │   └── concept-a/
│   │   │   │       └── page.tsx # URL: /docs/core-concepts/concept-a
│   │   │   │   └── concept-b/
│   │   │   │       └── page.tsx # URL: /docs/core-concepts/concept-b
│   │   │   ├── guides/ # Category Folder
│   │   │   │   ├── page.tsx  # URL: /docs/guides
│   │   │   │   └── basic-usage/
│   │   │   │       └── page.tsx # URL: /docs/guides/basic-usage
│   │   │   │   └── advanced-techniques/
│   │   │   │       └── page.tsx # URL: /docs/guides/advanced-techniques
│   │   │   ├── api-reference/ # Category Folder
│   │   │   │   ├── page.tsx  # URL: /docs/api-reference
│   │   │   │   └── component-x/
│   │   │   │       └── page.tsx # URL: /docs/api-reference/component-x
│   │   │   │   └── function-y/
│   │   │   │       └── page.tsx # URL: /docs/api-reference/function-y
│   │   │   └── contributing/ # Category Folder (or single page)
│   │   │       └── page.tsx  # URL: /docs/contributing
│   │   └── layout.tsx        # === Shared layout for NON-DOCS public pages (Applies Navbar, Footer) ===
│   ├── layout.tsx            # === Root Layout (Applies global providers, base HTML structure) ===
│   ├── page.tsx              # === Landing/Home page (Root URL: /) ===
│   ├── sitemap.ts            # Logic to generate sitemap.xml (Consider dynamic routes for docs/blog)
│   ├── robots.ts             # Logic to generate robots.txt
│   └── globals.css           # Global styles, Tailwind base/components/utilities directives
├── components/               # === Reusable UI Components ===
│   ├── common/               # General purpose: Logo.tsx, CallToAction.tsx, IconWrapper.tsx, ThemeToggle.tsx, SearchInput.tsx, Breadcrumbs.tsx
│   ├── layout/               # Structure components: NavBar.tsx, Footer.tsx, MobileNav.tsx
│   ├── sections/             # Page-specific, larger composite components: HeroSection.tsx, FeatureGrid.tsx, PricingTable.tsx, TestimonialSlider.tsx, TeamSection.tsx, ServiceCard.tsx, FaqAccordion.tsx
│   ├── docs/                 # Documentation Specific: DocsLayoutWrapper.tsx (Optional inner wrapper), DocsSidebar.tsx, DocsPageLayout.tsx, DocsPagination.tsx, CodeBlockWrapper.tsx, Callout.tsx, Toc.tsx (Table of Contents), DocsSearch.tsx
│   └── ui/                   # shadcn/ui raw components (as added by CLI)
├── config/                   # === Site & Docs Configuration Data ===
│   ├── site.ts               # General site metadata: name, description, URLs, social links
│   └── docs.ts               # Documentation structure/navigation config: defines sidebar links hierarchy, page titles used for navigation/pagination
├── content/                  # === Content Source (Strongly Recommended for Docs/Blog) ===
│   ├── docs/                 # MDX files for documentation pages (allows writing content separate from code)
│   │   ├── introduction/
│   │   │   └── index.mdx
│   │   │   └── overview.mdx
│   │   └── getting-started/
│   │       └── installation.mdx
│   │       └── configuration.mdx
│   │   └── core-concepts/
│   │   # ... other mdx files mirroring the app/docs structure
│   └── blog/                 # MDX files for blog posts (if implementing blog)
│       └── my-first-post.mdx
├── hooks/                    # Custom React hooks: useMediaQuery.ts, useScrollPosition.ts, useTocHighlighting.ts (for docs TOC active state)
├── lib/                      # Utility functions & constants
│   ├── utils.ts              # General utility functions: formatting dates, class name merging (cn function from shadcn/ui)
│   ├── mdx.ts                # Utilities for processing MDX files: fetching content, extracting metadata (if using MDX)
│   └── constants.ts          # Project-wide constants: maybe API endpoints (if fetching public data), feature flags
├── providers/                # Context providers: ThemeProvider.tsx (essential), QueryProvider.tsx (if using React Query/SWR for client-side fetching)
├── styles/                   # Additional global styles: typography.css (optional, for fine-tuning base typography beyond Tailwind)
├── types/                    # TypeScript definitions: global types, interfaces (e.g., DocsNavItem, Service, PricingPlan, TeamMember)
├── public/                   # Static assets served directly: images/, fonts/, favicons/, robots.txt (alternative static generation), sitemap.xml (alternative static generation)
└── middleware.ts             # Optional: Next.js middleware for edge logic: redirects, localization, A/B testing flags (frontend-focused logic)
```

## 4. Defining Core Public Pages (Detailed Content Outline)

Plan the essential content and components for each primary public-facing page.

* **`/` (Home/Landing Page):** `src/app/page.tsx`
  * **Components:** `HeroSection` (primary visual/message), `FeatureGrid` (concise benefits), `TestimonialSlider` (social proof), secondary `FeatureGrid` or `ServiceCard` previews, `CallToAction` (clear primary action).
  * **Content Focus:** Instantly communicate value. Answer "What is this?" and "Why should I care?". Build immediate trust. Guide the user toward the main conversion goal (e.g., sign up, view demo, browse services).
* **`/services`:** `src/app/(public)/services/page.tsx`
  * **Components:** Page Header (e.g., "Our Services"), repeating `ServiceCard` component (one per service, with icon, title, brief description, link to learn more if applicable), potentially grouped by category, `FaqAccordion` (addressing common service questions), `CallToAction` (e.g., "Get a Custom Quote", "Contact Us").
  * **Content Focus:** Clearly articulate each service offered. Explain the benefits and outcomes for the client/user. Detail the target audience if specific. Use clear, benefit-oriented language. Provide easy pathways to learn more or engage.
* **`/about`:** `src/app/(public)/about/page.tsx`
  * **Components:** Page Header ("About Us"), Content Blocks for Mission/Vision/Story (using `typography` components), `TeamSection` (using `Card` or custom component for member photos, names, titles/bios), Values List/Grid (icon + text), potentially a timeline (`vertical-timeline`), `CallToAction` (relevant to company culture, e.g., "View Open Positions").
  * **Content Focus:** Humanize the brand. Build trust and connection by sharing the origin story, mission, and values. Showcase the people behind the product/service. Make the company relatable and credible.
* **`/pricing`:** `src/app/(public)/pricing/page.tsx`
  * **Components:** Page Header ("Pricing Plans"), `PricingTable` (use `shadcn/table` or custom `Card`-based layout for comparing tiers), Feature comparison checklist within the table (using check/cross icons), `ToggleSwitch` or `SegmentedControl` (for Monthly/Annual billing cycles), `FaqAccordion` (addressing pricing, billing, and feature specifics), `CallToAction` buttons prominently displayed for each tier.
  * **Content Focus:** Present pricing options clearly and transparently. Make comparisons easy. Highlight the value proposition of each tier. Address potential customer objections or questions proactively via FAQs. Ensure the path to purchase/sign-up is frictionless.

## 5. The Documentation Section (`/docs`) - EXTREME DETAIL

This section requires a dedicated structure, layout, and specialized components for an optimal user experience.

### 5.1. Documentation Layout (`src/app/(public)/docs/layout.tsx`)

This special layout component wraps *all* pages residing under the `/docs` route segment. It establishes the consistent navigational frame.

* **Purpose:** Provides the persistent documentation sidebar and main content area structure.
* **Structure Example:**

    ```tsx
    // src/app/(public)/docs/layout.tsx
    import { DocsSidebar } from '@/components/docs/DocsSidebar';
    import { ScrollArea } from '@/components/ui/scroll-area'; // For sidebar scroll if needed
    import { docsConfig } from '@/config/docs'; // Import sidebar config

    export default function DocsLayout({ children }: { children: React.ReactNode }) {
      return (
        <div className="container mx-auto flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          {/* Sidebar */}
          <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
            <ScrollArea className="h-full py-6 pr-6 lg:py-8">
              <DocsSidebar items={docsConfig.sidebarNav} />
            </ScrollArea>
          </aside>

          {/* Main Content Area */}
          <main className="relative py-6 lg:py-8">
            {children}
          </main>
        </div>
      );
    }
    ```

* **Key Components Used:** `DocsSidebar`, `ScrollArea`. Uses Tailwind CSS for responsive grid layout. Assumes a main site header exists above this layout (handled in root layout or public layout).

### 5.2. Documentation Sidebar (`src/components/docs/DocsSidebar.tsx`)

The core navigation element for browsing documentation content.

* **Purpose:** Enable users to easily discover and navigate the documentation hierarchy.
* **Features:**
  * **Hierarchical Navigation:** Render nested links based on `docsConfig.sidebarNav`. Use `shadcn/collapsible` for parent items or implement a custom tree structure.
  * **Active Link Highlighting:** Use `usePathname()` from `next/navigation` to compare with item `href` and apply visual styling (e.g., background color, font weight) to the active link/section.
  * **Scrollspy (Advanced):** Implement a custom hook (`useTocHighlighting`) that uses `IntersectionObserver` on main content headings to update the active state in the sidebar as the user scrolls.
  * **Search Functionality (Optional):** Integrate `shadcn/command-dialog` triggered by a search input, filtering the `docsConfig.sidebarNav` items based on user input.
* **Configuration Driven (`src/config/docs.ts`):** The structure is defined centrally.

    ```typescript
    // src/config/docs.ts
    import type { DocsNavItem } from '@/types'; // Define this type in src/types/index.ts

    // Example type definition in src/types/index.ts
    // export type DocsNavItem = {
    //   title: string;
    //   href?: string; // Optional if it's just a category header
    //   disabled?: boolean;
    //   external?: boolean;
    //   label?: string; // Optional label (e.g., "New", "Beta")
    //   items?: DocsNavItem[]; // Nested items
    // };

    export const docsConfig: { sidebarNav: DocsNavItem[] } = {
      sidebarNav: [
        { title: "Introduction", href: "/docs" }, // Link to /docs/page.tsx
        { title: "Getting Started", items: [
            { title: "Installation", href: "/docs/getting-started/installation" },
            { title: "Configuration", href: "/docs/getting-started/configuration", label: "Essential" },
          ]},
        { title: "Core Concepts", items: [
            { title: "Concept A", href: "/docs/core-concepts/concept-a" },
            { title: "Concept B", href: "/docs/core-concepts/concept-b" },
          ]},
        { title: "Guides", items: [
            { title: "Basic Usage", href: "/docs/guides/basic-usage" },
            { title: "Advanced Techniques", href: "/docs/guides/advanced-techniques" },
          ]},
        { title: "API Reference", items: [
             { title: "Component X", href: "/docs/api-reference/component-x" },
             { title: "Function Y", href: "/docs/api-reference/function-y" },
           ]},
        { title: "Contributing", href: "/docs/contributing" },
      ],
    };
    ```

* **Key Components Used:** `collapsible`, `link` (Next.js Link), `badge` (for labels), potentially `command-dialog`, `input`.

### 5.3. Documentation Page Content Structure (`src/components/docs/DocsPageLayout.tsx` or logic within MDX processing)

Provides consistent structure and elements wrapping the main content of each individual documentation page. Can be a dedicated component or integrated into MDX rendering.

* **Purpose:** Ensure consistent layout, typography, header, footer, and utility elements (like TOC, pagination) for every docs page.
* **Features:**
  * **Page Title:** Large, clear `h1` extracted from page frontmatter (MDX) or props.
  * **Breadcrumbs:** `shadcn/breadcrumb` component showing the path from Docs home (e.g., Docs > Getting Started > Installation). Generate dynamically based on current path and `docsConfig`.
  * **Main Content Area:** Renders the primary page content (typically from an MDX file). Apply `shadcn/typography` styles here or globally.
  * **Table of Contents (`Toc`):** On-page navigation based on `h2`, `h3` headings. Positioned typically on the right side on larger screens. Needs logic to extract headings and link to their IDs (requires `rehype-slug` or similar for MDX).
  * **Page Pagination (`DocsPagination`):** "Previous" and "Next" links at the bottom, guiding users linearly through the docs based on `docsConfig` structure.
  * **"Edit this page" Link (Optional):** Link pointing to the source file (e.g., `.mdx` file on GitHub), facilitating community contributions.
* **Key Components Used:** `breadcrumb`, `typography` component or class, `Toc`, `DocsPagination`, `link`.

### 5.4. Documentation Content Components (`src/components/docs/`)

Specialized components used *within* the documentation content itself for clarity and interactivity. Often used via MDX component mapping.

* **`CodeBlockWrapper`:** Wraps `<pre><code>` elements. Integrates a syntax highlighting library (`shiki`, `prism-react-renderer`, or leverage `shadcn/code-block`'s capabilities). Adds a "Copy" button using `navigator.clipboard.writeText()`. Displays language name.
* **`Callout`:** Renders styled notification boxes. Use `shadcn/callout` or `shadcn/alert`. Define variants (e.g., `type="info"`, `type="warning"`, `type="danger"`, `type="tip"`). Accept title and children props.
* **`Toc` (Table of Contents Component):** Renders the list of links generated from page headings. Uses `useTocHighlighting` hook to apply active styles based on viewport scroll position.
* **`DocsPagination` (Component Logic):** Takes the current page `href` and the flattened `docsConfig.sidebarNav` structure. Finds the current page index and determines the previous and next navigable page `href` and `title`. Renders `Link` components accordingly.
* **`Kbd` (Keyboard Shortcut Component):** Styles text to look like keyboard keys using `shadcn/kbd`. Example: `<Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>P</Kbd>`.
* **MDX Component Mapping (`mdx-components.tsx`):** If using MDX, create this file to override default HTML element rendering with your custom/styled components.

    ```tsx
    // src/mdx-components.tsx
    import type { MDXComponents } from 'mdx/types';
    import Image from 'next/image';
    import { Callout } from '@/components/docs/Callout';
    import { CodeBlockWrapper } from '@/components/docs/CodeBlockWrapper';
    import { Kbd } from '@/components/ui/kbd';
    // ... import other components like custom Link, heading components if needed

    export function useMDXComponents(components: MDXComponents): MDXComponents {
      return {
        // Override default elements
        h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>, // Example styling
        h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6 mb-3 border-b pb-2">{children}</h2>, // Example
        // ... other headings
        p: ({ children }) => <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>, // Example
        a: ({ href, children }) => <a href={href} className="font-medium text-primary underline underline-offset-4">{children}</a>, // Example link
        pre: ({ children, ...props }) => <CodeBlockWrapper {...props}>{children}</CodeBlockWrapper>,
        // Custom components accessible in MDX
        Image,
        Callout,
        Kbd,
        ...components, // Include any components passed down
      };
    }
    ```

### 5.5. Documentation Pages (Example Content Outlines)

Structure the content for key documentation pages.

* **`/docs` (Introduction):** `src/app/(public)/docs/page.tsx` or `src/content/docs/index.mdx`
  * **Content:** Welcome message. High-level purpose and value proposition of the documented subject. Target audience. Core features/capabilities list. Links to key sections like "Getting Started" and "Core Concepts". Maybe a quick illustrative code snippet or diagram.
* **`/docs/getting-started/installation`:** (e.g., `src/content/docs/getting-started/installation.mdx`)
  * **Content:** Prerequisites (Node.js version, OS, etc.). Step-by-step commands using `CodeBlockWrapper` for `npm install`, `yarn add`, `pnpm add`. Environment setup if needed. Verification steps (e.g., running a command, checking a version). Troubleshooting common installation issues using `Callout type="warning"`.
* **`/docs/core-concepts/concept-a`:** (e.g., `src/content/docs/core-concepts/concept-a.mdx`)
  * **Content:** Clear definition of the concept (`h2`). Explanation of why it's important. Detailed breakdown using paragraphs, lists, and diagrams (`Image` component). `CodeBlockWrapper` examples demonstrating the concept in action. Use `Callout type="tip"` for best practices or related concepts.
* **`/docs/guides/basic-usage`:** (e.g., `src/content/docs/guides/basic-usage.mdx`)
  * **Content:** Title indicating the task (`h1`). Introduction stating the goal of the guide. Numbered steps with clear instructions. `CodeBlockWrapper` for each code segment needed. Screenshots (`Image`) showing expected UI/output if applicable. Conclude with a summary of what was achieved.
* **`/docs/api-reference/component-x`:** (e.g., `src/content/docs/api-reference/component-x.mdx`)
  * **Content:** Component name (`h1`). Brief description of its purpose. Import statement (`CodeBlockWrapper`). Props section (`h2`) with a `shadcn/table` detailing: Prop Name, Type, Default Value, Description. Usage examples (`h3` + `CodeBlockWrapper`) demonstrating different configurations or common use cases. `Callout type="info"` for related components or important notes.

## 6. Key Custom Component Implementation Details (Summary)

Summarize the core logic needed for custom documentation components.

* **`DocsSidebar` Logic:** Map over `docsConfig.sidebarNav`. Render `Link` for items with `href`. If an item has `items`, render a `Collapsible` trigger with the parent `title`, and recursively render the nested `items` within the `CollapsibleContent`. Apply active styling based on `pathname === item.href`.
* **`DocsPageLayout`/MDX Logic:**
  * **Headings/TOC:** Use `rehype-slug` (MDX plugin) to add `id` attributes to headings. Extract headings (either via MDX AST manipulation or client-side DOM query) to build the data structure for the `Toc` component.
  * **Pagination:** Create a flattened list of all navigable pages from `docsConfig`. Find the index of the current page `href` in this list. The previous link is `list[index - 1]` and the next is `list[index + 1]`. Pass `href` and `title` to the `DocsPagination` component.
* **`Toc` Logic:** Receive heading data (text, id, level). Render nested lists based on heading levels (`h2`, `h3`). Implement `useTocHighlighting` hook: use `IntersectionObserver` to watch heading elements; when a heading enters/leaves the viewport threshold, update state to indicate the active ID; apply styling to the corresponding link in the TOC.
* **`CodeBlockWrapper` Logic:** Detect the code language (often from `className="language-xxx"` added by MDX/highlighting). Pass code content and language to the syntax highlighter. Implement the "Copy" button's `onClick` handler using `navigator.clipboard.writeText(codeString)`. Provide visual feedback on copy success/failure (e.g., change button icon/text briefly).

## 7. Tooling & Frontend Best Practices

Maintain high standards throughout development.

* **Linting/Formatting:** Configure ESLint (`eslint-config-next/core-web-vitals`, `eslint-plugin-tailwindcss`) and Prettier strictly. Use Husky + `lint-staged` to automate linting and formatting on Git commits, ensuring code consistency.
* **TypeScript:** Enable `strict: true` in `tsconfig.json`. Define specific types/interfaces in `src/types/` for data structures (like `DocsNavItem`, `Service`, etc.) and component props. Avoid `any`.
* **Accessibility (a11y):** Prioritize semantic HTML (use `nav`, `main`, `aside`, `article`, etc., correctly). Ensure sufficient color contrast. Test thoroughly with keyboard navigation (tab order, focus indicators). Use ARIA attributes where necessary (though `shadcn/ui` handles much of this). Use ESLint accessibility plugins (`eslint-plugin-jsx-a11y`).
* **Performance:**
  * **Images:** Use `next/image` for automatic optimization (resizing, format conversion like WebP), lazy loading. Provide explicit `width` and `height`.
  * **Bundles:** Periodically analyze bundle size using `@next/bundle-analyzer` to identify large dependencies or chunks.
  * **Loading:** Leverage RSCs (default in App Router) for server-rendered components. Use `next/dynamic` for code-splitting large client components that aren't needed immediately (e.g., complex charts, heavy libraries). Use `Suspense` boundaries for better loading state UX.
  * **Fonts:** Optimize font loading using `next/font`.
* **MDX Tooling (If Used):** Install necessary packages: `@next/mdx`, `mdx-bundler` (alternative with more control), `rehype-slug`, `rehype-autolink-headings`, `remark-gfm`, `shiki` or `prism-react-renderer`. Configure `next.config.js` and `mdx-components.tsx`.

## 8. Deployment (Google Cloud Run Example)

Google Cloud Run is a suitable serverless platform for hosting the Next.js frontend application.

1. **Dockerfile:** Create an optimized, multi-stage `Dockerfile`.
    <smtcmp_block language="dockerfile">

    # Stage 1: Base Image with Node.js and OS dependencies

    FROM node:20-alpine AS base

    # Set working directory

    WORKDIR /app

    # Install necessary OS packages if needed (e.g., for image processing)

    # RUN apk update && apk add --no-cache some-package

    # Stage 2: Install Dependencies

    # Copy package manager files

    COPY package.json yarn.lock*package-lock.json* pnpm-lock.yaml* ./

    # Install dependencies based on the lockfile found

    RUN \
      if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
      elif [ -f package-lock.json ]; then npm ci; \
      elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
      else echo "Lockfile not found." && exit 1; \
      fi

    # Stage 3: Build the Next.js Application

    FROM base AS builder
    WORKDIR /app

    # Copy installed dependencies from the previous stage

    COPY --from=base /app/node_modules ./node_modules

    # Copy the rest of the application code

    COPY . .

    # Set build-time environment variables if needed (e.g., NEXT_PUBLIC_...)

    # ARG NEXT_PUBLIC_SITE_URL

    # ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}

    # Run the Next.js build command

    RUN npm run build

    # Stage 4: Production Image

    FROM base AS runner
    WORKDIR /app

    # Set environment to production

    ENV NODE_ENV production

    # Optionally disable Next.js telemetry

    # ENV NEXT_TELEMETRY_DISABLED 1

    # Create a non-root user for security

    RUN addgroup --system --gid 1001 nodejs
    RUN adduser --system --uid 1001 nextjs

    # Copy necessary artifacts from the builder stage

    # Copy public assets

    COPY --from=builder /app/public ./public

    # Copy standalone Next.js server output (recommended for smaller images)

    COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

    # Copy static assets generated during build

    COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

    # Set the user to the non-root user

    USER nextjs

    # Expose the port Next.js runs on (default 3000)

    EXPOSE 3000

    # Set the PORT environment variable (Cloud Run sets this automatically)

    ENV PORT 3000

    # Command to run the standalone Next.js server

    CMD ["node", "server.js"]
    </smtcmp_block>
2. **Build & Push Image:**
    * Use Google Cloud Build: Create a `cloudbuild.yaml` file to define build steps (e.g., `docker build`, `docker push`). Trigger builds manually or via Git integration.
    * Use Local Docker: Run `docker build -t gcr.io/YOUR_PROJECT_ID/my-public-frontend:latest .`. Authenticate Docker with gcloud (`gcloud auth configure-docker`) and push the image: `docker push gcr.io/YOUR_PROJECT_ID/my-public-frontend:latest`. (Replace `gcr.io` with Artifact Registry path if using that).
3. **Deploy Cloud Run Service:**
    * Navigate to Cloud Run in the Google Cloud Console.
    * Click "Create Service".
    * Select the container image you pushed (from Container Registry or Artifact Registry).
    * Choose a service name and region.
    * Configure CPU allocation, memory limits, min/max instances (scaling).
    * Set any necessary runtime **Environment Variables**. Use Secret Manager for sensitive values (though for a purely public frontend, there might be few secrets needed at runtime, perhaps `NEXT_PUBLIC_...` vars if not baked in at build).
    * Configure Ingress control (allow all traffic for a public site).
    * Configure Authentication (allow unauthenticated).
    * Deploy the service.
    * **Custom Domain:** After deployment, navigate to the "Custom Domains" tab for your Cloud Run service and follow the steps to map your domain name (verifying ownership, updating DNS records).

---

*This final, extremely detailed guide provides a comprehensive blueprint for constructing the standalone public-facing Next.js frontend, with a particular focus on a feature-rich documentation section.*
</smtcmp_block>
