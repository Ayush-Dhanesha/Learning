export const Header = () => {
  return (
  <div className="flex justify-center fixed items-center relative top-3 w-full z-10 bg-gray-950">
      <nav className="flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur-sm bg-gray-950">
        <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">Projects</a>
        <a href="#" className="nav-item bg-white/100 text-gray-900 hover:bg-white/20 hover:text-gray-900">Contact</a>
      </nav>
  </div>
    );
};
