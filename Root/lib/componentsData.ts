export interface ComponentData {
  slug: string;
  title: string;
  description: string;
  folderName: string;
  icon: string;
  tags: string[];
}

export const components: ComponentData[] = [
  {
    slug: 'hamburger-menu',
    title: 'Animated Hamburger Menu',
    description: 'A beautiful animated hamburger menu for modern web apps.',
    folderName: 'get hamburgur menu',
    icon: 'Menu',
    tags: ['nav', 'animation', 'ui'],
  },
  {
    slug: 'horizontal-scroll',
    title: 'Horizontal Scroll Cards',
    description: 'Smooth horizontal scrolling of cards triggered on vertical scroll.',
    folderName: 'horizontal-scroll of cards on scroll',
    icon: 'MousePointerClick',
    tags: ['scroll', 'animation', 'cards'],
  },
  {
    slug: 'macbook-showcase',
    title: 'MacBook Showcase Landing Page',
    description: 'A React frontend landing page showcasing a 3D-like MacBook scroll animation.',
    folderName: 'MacBook-Showcase-Landing-Page--React-Frontend',
    icon: 'Laptop',
    tags: ['landing-page', '3d', 'scroll'],
  },
  {
    slug: 'ecommerce-template',
    title: 'eCommerce Shop Template',
    description: 'A complete eCommerce shop template built with HTML and CSS.',
    folderName: 'eCommerce Template',
    icon: 'ShoppingCart',
    tags: ['ecommerce', 'template', 'html'],
  }
];
