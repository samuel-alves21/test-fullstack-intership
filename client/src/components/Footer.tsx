export const Footer = () => {
  return (
    <footer className="py-3 bg-amazon_primary text-amazon_tertiaty font-bold text-xl font-amazon_ember w-full lg:px-16 px-6 text-center">
      <div className="max-w-[1800px] flex justify-center items-center mx-auto gap-4">
        <p>Develop by <span className="">Samuel Alves</span></p>
        <a href="https://github.com/samuel-alves21" target="_blank"><i className="hover:opacity-80 text-2xl cursor-pointer bi bi-github"></i></a>
        <a href="https://www.linkedin.com/in/samuel-theodoro/" target="_blank"><i className="hover:opacity-80 text-2xl cursor-pointer bi bi-linkedin"></i></a>
        <a href="https://samuel-alves21.github.io/portfolio/" target="_blank"><i className="hover:opacity-80 text-2xl cursor-pointer bi bi-globe"></i></a>
      </div>
    </footer>
  )
}