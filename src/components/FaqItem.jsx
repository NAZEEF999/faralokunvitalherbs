export default function FaqItem({ q, a }) {
  return (
    <details>
      <summary>{q}</summary>
      <p>{a}</p>
    </details>
  )
}
