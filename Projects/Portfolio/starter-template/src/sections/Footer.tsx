import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  {
    name: 'youtube',
    href: '#'
  },
  {
    name: 'Twitter',
    href: '#'
  },
  {
    name: 'Instagram',
    href: '#'
  },
  {
    name: 'LinkedIn',
    href: '#'
  }
];



export const Footer = () => {
  return (
      <footer className='relative overflow-x-clip'>
        <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
        <div className="container ">
          <div className='border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between'>
            <div className='text-white/70 mb-2'>
            {/* // here href will be the link to the page of portfolio website // */}
              &copy; {new Date().getFullYear()} by <a href="#" className="text-white/70">Ayush Dhanesha</a>
            </div>
            <nav className="flex flex-col items-center gap-8 md:flex-row">
              {footerLinks.map((link) => (
                <a href="#" key={link.name} className="inline-flex items-center gap-2 hover:text-white hover:shadow-lg hover:shadow-emerald-500/20">
                  <span className="text-white/70 font-semibold">{link.name}</span>
                  <ArrowUpRightIcon className="size-4 text-white/70" />
                </a>
              ))}
            </nav>
          </div>
        </div>

      </footer>
    );
};
