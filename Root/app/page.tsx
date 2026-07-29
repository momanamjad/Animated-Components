import Link from 'next/link';
import { components } from '@/lib/componentsData';
import { Menu, MousePointerClick, Laptop, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Menu: <Menu className="w-8 h-8" />,
  MousePointerClick: <MousePointerClick className="w-8 h-8" />,
  Laptop: <Laptop className="w-8 h-8" />
};

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-indigo-500/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-neutral-950 to-neutral-950" />
        
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Animation
              </span>
              <br /> Components Hub
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-400 mb-10 leading-relaxed">
              Explore a collection of premium animated React and Next.js components. 
              View the whole component, get the codebase, and copy installation instructions.
            </p>
          </div>
        </div>
      </div>

      {/* Components Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((comp) => (
            <Link 
              href={`/${comp.slug}`} 
              key={comp.slug}
              className="group relative flex flex-col justify-between p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-indigo-500/50 hover:bg-neutral-900 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
                  {iconMap[comp.icon]}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{comp.title}</h3>
                <p className="text-neutral-400 leading-relaxed mb-8">
                  {comp.description}
                </p>
              </div>
              
              <div className="relative z-10 flex items-center text-indigo-400 font-medium">
                View Component 
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
