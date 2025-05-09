import StarIcon from '@/assets/icons/star.svg';

const words = [
  "Performant",
  "Scalable",
  "Reliable",
  "Responsive",
  "Secure",
  "Efficient",
  "Fast",
  "Simple",
  "Robust",
  "Flexible",
  "Intuitive",
  "User-Friendly",
  
]


export const TapeSection = () => {
  return(
    <div className="relative py-12 lg:py-24">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-2 animate-tape -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ">
            <div className="flex flex-none gap-4">
              {words.map((word) => (
                <div key={word} className="flex items-center inline-flex gap-4 py-2">
                  <StarIcon className="size-12 text-gray-900 -rotate-12" />
                  <span className="text-gray-900 text-sm uppercase font-extrabold">{word}</span>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  )
};
