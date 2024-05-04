export const ProductsNotFound = ({keyword}: { keyword: string }) => {
  return (
    <section className="text-center w-full">
      <h1 className="text-amazon_primary font-amazon_display text-5xl font-bold mt-20">Product Not Found</h1>
      <p className="text-xl mt-10">There are no products matching your search for <span className="font-bold text-amazon_primary">{keyword}</span></p>
    </section>
  )
}