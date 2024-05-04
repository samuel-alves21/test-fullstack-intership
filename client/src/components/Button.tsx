type ButtonProps  = React.PropsWithChildren<React.ComponentPropsWithRef<'button'>>

export const Button:  React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="w-40 h-10 bg-amazon_button font-amazon_ember text-amazon_tertiaty rounded-3xl hover:opacity-90 cursor-pointer">
      {children}
    </button>
  ) 
}