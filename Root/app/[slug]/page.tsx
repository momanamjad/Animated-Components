import fs from 'fs';
import path from 'path';
import { components } from '@/lib/componentsData';
import Link from 'next/link';
import { ArrowLeft, Code, FileText, Play } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import CodeViewer from './CodeViewer';

// Required for Next.js dynamic routing
export function generateStaticParams() {
  return components.map((comp) => ({
    slug: comp.slug,
  }));
}

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const component = components.find((c) => c.slug === slug);

  if (!component) {
    return <div className="p-20 text-white text-center text-2xl">Component not found</div>;
  }

  // Define paths
  const componentDir = path.join(process.cwd(), '..', component.folderName);
  
  // Read README
  const readmePath = path.join(componentDir, 'README.md');
  let readmeContent = 'No README.md found.';
  try {
    if (fs.existsSync(readmePath)) {
      readmeContent = fs.readFileSync(readmePath, 'utf8');
    }
  } catch (error) {
    console.error('Error reading README:', error);
  }

  // Try to find a main component file
  let mainCodeContent = 'No main source file found to display.';
  let mainCodePathDisplay = '';
  
  const possibleCodePaths = [
    'src/app/page.jsx',
    'src/app/page.tsx',
    'src/App.jsx',
    'src/App.tsx',
    'src/index.js',
    'app/page.tsx',
    'index.html'
  ];

  for (const p of possibleCodePaths) {
    const fullPath = path.join(componentDir, p);
    try {
      if (fs.existsSync(fullPath)) {
        mainCodeContent = fs.readFileSync(fullPath, 'utf8');
        mainCodePathDisplay = p;
        break;
      }
    } catch (e) {
      // ignore
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-indigo-500/30 font-sans pb-32">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center text-neutral-400 hover:text-white transition-colors group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Hub
          </Link>
          <h1 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 hidden sm:block">
            {component.title}
          </h1>
          <div className="w-24" /> {/* Spacer */}
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-12">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">{component.title}</h2>
          <p className="text-xl text-neutral-400">{component.description}</p>
        </div>

        {/* Action Bar */}
        <div className="flex flex-wrap gap-4 mb-16">
          <div className="flex items-center bg-indigo-500/10 text-indigo-400 px-6 py-3 rounded-full border border-indigo-500/20">
            <Play className="w-5 h-5 mr-2" />
            <span className="font-medium text-sm">
              cd "../{component.folderName}" && npm run dev
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Area: README */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8">
              <div className="flex items-center text-white mb-6 pb-6 border-b border-neutral-800">
                <FileText className="w-6 h-6 mr-3 text-cyan-400" />
                <h3 className="text-2xl font-semibold">Documentation</h3>
              </div>
              
              <div className="prose prose-invert prose-indigo max-w-none 
                prose-headings:font-bold prose-a:text-indigo-400 prose-pre:bg-neutral-950 prose-pre:border prose-pre:border-neutral-800">
                <ReactMarkdown>{readmeContent}</ReactMarkdown>
              </div>
            </div>
          </div>

          {/* Sidebar Area: Codebase */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-3xl overflow-hidden flex flex-col h-[600px] sticky top-28">
              <div className="flex items-center text-white p-6 pb-4 border-b border-neutral-800 bg-neutral-900">
                <Code className="w-6 h-6 mr-3 text-indigo-400" />
                <div>
                  <h3 className="font-semibold">Core Codebase</h3>
                </div>
              </div>
              <CodeViewer code={mainCodeContent} filePath={mainCodePathDisplay || 'Not Found'} />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
