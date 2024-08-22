export default function TechUsed({ tools }) {
  return (
  <div>
      {tools.map((tool) => (
      <span>{tool} </span>
      ))}
  </div>
  )
}
