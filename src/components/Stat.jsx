export default function Stat({ value, suffix = '', label }) {
  return (
    <div className="stat">
      <strong>{value}<span>{suffix}</span></strong>
      <p>{label}</p>
    </div>
  );
}
