import ArrowUpRight from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
  <div className="bg-gray-950 pt-12 py-16 lg:py-24">
    <div className="relative container mx-auto px-4 text-center">
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center shadow-xl shadow-emerald-500/10 relative'>
      <div className="absolute inset-0 -z-10 opacity-5 mix-blend-overlay">
        <img src={grainImage.src} alt="" className="object-cover" />
      </div>
      
        <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-md">
          Contact Me
        </h2>
        <p className="text-sm mt-2">
          I'm always happy to hear from you. Feel free to reach out to me on any of the social media platforms below.Are you looking for a new project? Let's discuss your next project.
        </p>
        <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 hover:bg-gray-800 transition-colors shadow-md shadow-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/20 mt-8">
          <span className="text-lg">👋</span>
          <span className="ml-2 font-semibold">Let's Connect</span>
          <ArrowUpRight className="size-4" />
        </button>
    </div>
  </div>
  </div>
  )

};
