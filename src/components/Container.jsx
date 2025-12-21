

const Container = ({children, className}) => {
  return (
    <div className={`max-w-[1280px] mx-auto ${className}`}>{children}</div>
  )
}

export default Container