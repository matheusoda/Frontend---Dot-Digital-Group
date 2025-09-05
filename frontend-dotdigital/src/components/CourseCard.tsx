import type { Course } from "../types";

export function CourseCard({ title, description, theme, imageUrl, classes }: Course) {
  const availableCount = (classes || []).filter(c => (c.status.toLowerCase() === "disponível" || c.status.toLowerCase() === "disponivel")).length;

  return (
    <div className="card">
      {imageUrl && (
        <div style={{borderRadius:10, overflow:"hidden", marginBottom:10, border:"1px solid var(--border)"}}>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <img src={imageUrl} alt={title} style={{display:"block", width:"100%", height:160, objectFit:"cover"}} />
        </div>
      )}
      <h3>{title}</h3>
      <div className="muted" style={{marginBottom:8}}>{description}</div>
      <div className="spread">
        <span className="badge">{theme}</span>
        <span className="kv">Turmas disponíveis: <strong style={{marginLeft:4}}>{availableCount}</strong></span>
      </div>
    </div>
  );
}
