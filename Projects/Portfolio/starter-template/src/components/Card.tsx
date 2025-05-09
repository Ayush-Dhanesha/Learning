import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

interface CardProps {
    className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, children }: CardProps) => {
  return (
      <div className={twMerge("bg-gray-900 rounded-3xl relative z-0 after:content-[''] after:absolute after:inset-0 after:blur-3xl after:z-10 overflow-hidden after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:pointer-events-none after:opacity-0 after:transition-opacity after:duration-300 after:hover:opacity-100 p-6", className)}>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-emerald-300 to-sky-400 opacity-15 blur-3xl" style={{backgroundImage: "url(${grainImage.src})",}}></div>
        {children}
      </div>
  );
};