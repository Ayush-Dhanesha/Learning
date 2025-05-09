import { PropsWithChildren } from "react";

interface HeroOrbitProps {
  size: number;
  rotation: number;
  pulseDuration?: number;
  pulseDelay?: number;
  rotationDuration?: number;
}

export default function HeroOrbit({ 
  children, 
  size, 
  rotation, 
  pulseDuration = 2,
  pulseDelay = 0,
  rotationDuration = 20
}: PropsWithChildren<HeroOrbitProps>) {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <div className={`size-[${size}px]`} style={{
          animation: `rotate ${rotationDuration}s linear infinite`,
          height: `${size}px`,
          width: `${size}px`,
        }}>
          <div className='inline-flex'
          style={{
            animation: `pulse ${pulseDuration}s ease-in-out infinite, counter-rotate ${rotationDuration}s linear infinite`,
            animationDelay: `${pulseDelay}s`
          }}
          >
            {children}
          </div>
        </div>
      </div>
  )
}