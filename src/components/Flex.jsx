

const Flex = ({children, className}) => {
  return (
    <div className={`flex items-center ${className}`}>{children}</div>
  )
}

export default Flex