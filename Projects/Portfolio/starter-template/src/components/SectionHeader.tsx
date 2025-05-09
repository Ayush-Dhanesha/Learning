export const SectionHeader = ({ title,eyebrow,description }: { title: string, eyebrow: string, description: string }) => {
  return (
    <>
      <div className="flex justify-center">
          <p className="uppercase font-semibold text-emerald-500 text-4xl tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            {eyebrow}
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6">
          {title}
        </h2>
        <p className="text-white/60 text-center mt-4">
          {description}
        </p>
    </>
  );
};
