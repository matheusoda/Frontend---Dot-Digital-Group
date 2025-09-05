import React from "react";
import type { Theme } from "../types";

const THEMES: Array<{ value: Theme; label: string }> = [
  { value: "inovacao", label: "Inovação" },
  { value: "tecnologia", label: "Tecnologia" },
  { value: "marketing", label: "Marketing" },
  { value: "empreendedorismo", label: "Empreendedorismo" },
  { value: "agro", label: "Agro" },
];

export function Filters({
  title, onTitle,
  selectedThemes, onToggleTheme
}: {
  title: string; onTitle(v: string): void;
  selectedThemes: string[]; onToggleTheme(theme: string): void;
}) {
  return (
    <div className="card">
      <div className="row">
        <input className="input" placeholder="Buscar por título..."
               value={title} onChange={e=>onTitle(e.target.value)} />
      </div>
      <div className="hr"/>
      <div className="row" role="group" aria-label="filtros-tema">
        {THEMES.map(t => {
          const checked = selectedThemes.includes(t.value);
          return (
            <label key={t.value} className="checkboxes" style={{display:"inline-flex", width:"auto", gap:8, padding:"8px 10px", cursor:"pointer"}}>
              <input type="checkbox" checked={checked} onChange={()=>onToggleTheme(t.value)} />
              {t.label}
            </label>
          );
        })}
      </div>
    </div>
  );
}
