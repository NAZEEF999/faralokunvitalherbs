export default function SectionHeading({ eyebrow, title, lead }) {
  return (
    <>
      <div className="eb">{eyebrow}</div>
      <h2>{title}</h2>
      {lead && <p className="l">{lead}</p>}
    </>
  )
}
