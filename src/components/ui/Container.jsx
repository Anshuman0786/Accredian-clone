export default function Container({ className = '', children }) {
  return <div className={`mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}
