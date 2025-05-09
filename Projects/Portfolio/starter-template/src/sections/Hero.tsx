import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import HeroOrbit from './HeroOrbit';
import SparkelIcon from '@/assets/icons/sparkle.svg';

export const HeroSection = () => {
  return (
    <div className='relative min-h-screen py-32 md:py-48 overflow-hidden'>
      {/* Background layers */}
      <div className='absolute inset-0 -z-10'>
        {/* Base dark background */}
        <div className='absolute inset-0 bg-gray-950'></div>
        
        {/* Grain texture overlay - maintaining original opacity */}
        <div className='absolute inset-0 opacity-[-4] mix-blend-overlay'>
          <Image
            src={grainImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Static stars in background */}
        <div className='absolute inset-0'>
          {/* Top left quadrant stars */}
          <div className='absolute top-[10%] left-[15%] size-1 bg-white rounded-full shadow-sm shadow-white/80'></div>
          <div className='absolute top-[15%] left-[8%] size-2 bg-emerald-300/90 rounded-full shadow-sm shadow-emerald-300/80'></div>
          <div className='absolute top-[22%] left-[25%] size-1 bg-white/90 rounded-full shadow-sm shadow-white/80'></div>
          <div className='absolute top-[5%] left-[30%] size-1.5 bg-emerald-200/90 rounded-full shadow-sm shadow-emerald-200/80'></div>
          
          {/* Top right quadrant stars */}
          <div className='absolute top-[8%] right-[12%] size-1 bg-white/90 rounded-full shadow-sm shadow-white/80'></div>
          <div className='absolute top-[20%] right-[22%] size-2 bg-emerald-300/90 rounded-full shadow-sm shadow-emerald-300/80'></div>
          <div className='absolute top-[13%] right-[33%] size-1 bg-white/90 rounded-full shadow-sm shadow-white/80'></div>
          <div className='absolute top-[25%] right-[5%] size-1.5 bg-emerald-200/90 rounded-full shadow-sm shadow-emerald-200/80'></div>
          
          {/* Bottom left quadrant stars */}
          <div className='absolute bottom-[18%] left-[14%] size-1 bg-white/90 rounded-full shadow-sm shadow-white/80'></div>
          <div className='absolute bottom-[10%] left-[28%] size-2 bg-emerald-300/90 rounded-full shadow-sm shadow-emerald-300/80'></div>
          <div className='absolute bottom-[25%] left-[5%] size-1 bg-white/90 rounded-full shadow-sm shadow-white/80'></div>
          <div className='absolute bottom-[15%] left-[35%] size-1.5 bg-emerald-200/90 rounded-full shadow-sm shadow-emerald-200/80'></div>
          
          {/* Bottom right quadrant stars */}
          <div className='absolute bottom-[12%] right-[15%] size-1 bg-white/90 rounded-full shadow-sm shadow-white/80'></div>
          <div className='absolute bottom-[20%] right-[8%] size-2 bg-emerald-300/90 rounded-full shadow-sm shadow-emerald-300/80'></div>
          <div className='absolute bottom-[5%] right-[25%] size-1 bg-white/90 rounded-full shadow-sm shadow-white/80'></div>
          <div className='absolute bottom-[28%] right-[18%] size-1.5 bg-emerald-200/90 rounded-full shadow-sm shadow-emerald-200/80'></div>
        </div>
        
        {/* Twinkling stars effect */}
        <div className='absolute inset-0 opacity-80'>
          <div className='absolute top-[35%] left-[45%] size-1 bg-white animate-pulse rounded-full shadow-sm shadow-white/80'></div>
          <div className='absolute top-[65%] left-[28%] size-1 bg-white animate-[pulse_3s_ease-in-out_infinite] rounded-full shadow-sm shadow-white/80'></div>
          <div className='absolute top-[15%] left-[65%] size-1 bg-white animate-[pulse_4s_ease-in-out_infinite] rounded-full shadow-sm shadow-white/80'></div>
          <div className='absolute top-[78%] left-[80%] size-1 bg-white animate-[pulse_2.5s_ease-in-out_infinite] rounded-full shadow-sm shadow-white/80'></div>
          <div className='absolute top-[50%] left-[15%] size-1 bg-white animate-[pulse_3.5s_ease-in-out_infinite] rounded-full shadow-sm shadow-white/80'></div>
          <div className='absolute top-[25%] left-[95%] size-1 bg-white animate-[pulse_4.5s_ease-in-out_infinite] rounded-full shadow-sm shadow-white/80'></div>
        </div>

        {/* Large centered orbit rings - enhanced with shadow */}
        <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_40%,transparent)]'>
          <div className='size-[620px] hero-ring shadow-50 shadow-emerald-900/10'></div>
          <div className='size-[820px] hero-ring shadow-50 shadow-emerald-500/10'></div>
          <div className='size-[1020px] hero-ring shadow-40 shadow-emerald-500/10'></div>
          <div className='size-[1220px] hero-ring shadow-40 shadow-emerald-500/10'></div>
          <div className='size-[1420px] hero-ring shadow-40 shadow-emerald-500/10'></div>
          <div className='size-[1620px] hero-ring shadow-40 shadow-emerald-500/10'></div>
          <div className='size-[1820px] hero-ring shadow-40 shadow-emerald-500/10'></div>
        </div>

        {/* Orbits with stars - increased brightness */}
        {/* Outer orbits */}
        <HeroOrbit size={1000} rotation={-90} rotationDuration={40}>
          <SparkelIcon className='size-14 text-emerald-300/40 drop-shadow-lg shadow-emerald-500' />
        </HeroOrbit>
        <HeroOrbit size={900} rotation={45} rotationDuration={35}>
          <StarIcon className='size-16 text-emerald-300/50 drop-shadow-lg shadow-emerald-500' />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} rotationDuration={30}>
          <StarIcon className='size-12 text-emerald-300/60 drop-shadow-lg shadow-emerald-500' />
        </HeroOrbit>
        
        {/* Middle orbits */}
        <HeroOrbit size={700} rotation={120} rotationDuration={25}>
          <SparkelIcon className='size-10 text-emerald-300/50 drop-shadow-lg shadow-emerald-500' />
        </HeroOrbit>
        <HeroOrbit size={600} rotation={-45} rotationDuration={28}>
          <StarIcon className='size-8 text-emerald-300/70 drop-shadow-lg shadow-emerald-500' />
        </HeroOrbit>
        <HeroOrbit size={500} rotation={160} rotationDuration={32}>
          <SparkelIcon className='size-12 text-emerald-300/60 drop-shadow-lg shadow-emerald-500' />
        </HeroOrbit>
        
        {/* Inner orbits */}
        <HeroOrbit size={400} rotation={90} rotationDuration={20}>
          <StarIcon className='size-6 text-emerald-300/80 drop-shadow-lg shadow-emerald-500' />
        </HeroOrbit>
        <HeroOrbit size={350} rotation={-120} rotationDuration={22}>
          <SparkelIcon className='size-8 text-emerald-300/70 drop-shadow-lg shadow-emerald-500' />
        </HeroOrbit>
        <HeroOrbit size={300} rotation={30} rotationDuration={18}>
          <StarIcon className='size-4 text-emerald-300/90 drop-shadow-lg shadow-emerald-500' />
        </HeroOrbit>

        {/* Additional small elements */}
        <HeroOrbit size={250} rotation={-60} rotationDuration={15}>
          <StarIcon className='size-3 text-emerald-300 drop-shadow-lg shadow-emerald-500' />
        </HeroOrbit>
        <HeroOrbit size={200} rotation={150} rotationDuration={12}>
          <SparkelIcon className='size-6 text-emerald-300/80 drop-shadow-lg shadow-emerald-500' />
        </HeroOrbit>
        
        {/* Additional orbits with more stars */}
        <HeroOrbit size={950} rotation={-10} rotationDuration={38}>
          <StarIcon className='size-5 text-white/70 drop-shadow-lg shadow-white/50' />
        </HeroOrbit>
        <HeroOrbit size={850} rotation={75} rotationDuration={33}>
          <SparkelIcon className='size-7 text-white/60 drop-shadow-lg shadow-white/50' />
        </HeroOrbit>
        <HeroOrbit size={750} rotation={-60} rotationDuration={27}>
          <StarIcon className='size-4 text-white/80 drop-shadow-lg shadow-white/50' />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={100} rotationDuration={24}>
          <SparkelIcon className='size-9 text-white/50 drop-shadow-lg shadow-white/50' />
        </HeroOrbit>
        <HeroOrbit size={450} rotation={-30} rotationDuration={21}>
          <StarIcon className='size-3 text-white/90 drop-shadow-lg shadow-white/50' />
        </HeroOrbit>
        <HeroOrbit size={150} rotation={180} rotationDuration={10}>
          <SparkelIcon className='size-4 text-white/70 drop-shadow-lg shadow-white/50' />
        </HeroOrbit>

        {/* Added glow effect in the center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-64 rounded-full bg-emerald-500/5 blur-3xl"></div>
        
        {/* Additional grain overlay to ensure texture is prominent */}
        <div className='absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none'>
          <Image
            src={grainImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
          <Image 
            src={memojiImage} 
            alt="memoji"
            width={120}
            height={120}
            className="mb-6 drop-shadow-xl"
          />
          
          <div className='bg-gray-900/50 backdrop-blur-sm border border-gray-800 px-4 py-2 rounded-full inline-flex items-center gap-3 mb-8 shadow-lg shadow-emerald-500/10'>
            <div className='bg-emerald-500 size-2 rounded-full shadow-md shadow-emerald-400/50'>
              <div className='bg-green-500 size-2 rounded-full shadow-md shadow-emerald-400/50 animate-ping'></div>
            </div>
            <span className='text-sm text-white/90'>
              Available for new projects
            </span>
          </div>

          <h1 className='font-serif text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-md'>
            Building Exceptional
            <br />
            User Experiences
          </h1>

          <p className='text-lg text-white/70 mb-8 max-w-2xl'>
            I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project.
          </p>

          <div className='flex flex-wrap items-center justify-center gap-4'>
            <button className='inline-flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 px-6 py-3 rounded-full hover:bg-gray-800/50 transition-colors shadow-md shadow-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/20'>
              <span>Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>
            <button className='inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-white/90 transition-colors shadow-md shadow-emerald-900/10 hover:shadow-lg hover:shadow-emerald-700/20'>
              <span className='text-lg'>👋</span>
              <span>Let's Connect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};