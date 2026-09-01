'use client';
import { useState } from 'react';
import Link from 'next/link';
import { components } from '@/lib/componentsData';
import { Menu, MousePointerClick, Laptop, ArrowRight, ShoppingCart, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ReactNode> = {
  Menu: <Menu className="w-8 h-8" />,
  MousePointerClick: <MousePointerClick className="w-8 h-8" />,
  Laptop: <Laptop className="w-8 h-8" />,
  ShoppingCart: <ShoppingCart className="w-8 h-8" />
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredComponents = components.filter(comp => 
    comp.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    comp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-indigo-500/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-neutral-950 to-neutral-950" />
        
        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 sm:pt-40 sm:pb-32">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-7xl font-bold tracking-tight mb-8"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Animation
              </span>
              <br /> Components Hub
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-400 mb-10 leading-relaxed"
            >
              Explore a collection of premium animated React and Next.js components. 
              View the whole component, get the codebase, and copy installation instructions.
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-md mx-auto relative"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search components or tags..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-900/50 border border-neutral-800 rounded-full py-3 pl-12 pr-6 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Components Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-32">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredComponents.map((comp) => (
            <motion.div 
              key={comp.slug}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Link 
                href={`/${comp.slug}`} 
                className="group relative flex flex-col justify-between h-full p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 hover:border-indigo-500/50 hover:bg-neutral-900 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
                    {iconMap[comp.icon]}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{comp.title}</h3>
                  <p className="text-neutral-400 leading-relaxed mb-6">
                    {comp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {comp.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="relative z-10 flex items-center text-indigo-400 font-medium">
                  View Component 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
          
          {filteredComponents.length === 0 && (
            <div className="col-span-full py-12 text-center text-neutral-500">
              No components found matching "{searchQuery}"
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
