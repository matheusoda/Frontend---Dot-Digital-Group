export function Empty({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="card" style={{ textAlign: "center", padding: 40 }}>
      <h4>{title}</h4>
      {hint && <div className="muted" style={{ marginTop: 6 }}>{hint}</div>}
    </div>
  );
}
