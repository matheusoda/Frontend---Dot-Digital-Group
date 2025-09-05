import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCourses } from "../../api/api";
import type { Course } from "../../types";
import { Filters } from "../../components/Filters";
import { CourseCard } from "../../components/CourseCard";
import { Empty } from "../../components/Empty";
import { Loading } from "../../components/Loading";

export function ListCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [title, setTitle] = useState("");
  const [themes, setThemes] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function toggleTheme(t: string) {
    setThemes((cur) => cur.includes(t) ? cur.filter(x=>x!==t) : [...cur, t]);
  }

  useEffect(() => {
    setLoading(true);
    getCourses({ title, theme: themes[0] ?? "" })
      .then(setCourses)
      .finally(()=>setLoading(false));
  }, [title, themes]);

  const filtered = useMemo(() => courses, [courses]);

  return (
    <section className="grid" style={{gap:16}}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Cursos</h2>
        <button
          onClick={() => navigate("/courses/new")}
          style={{
            padding: "8px 16px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#2563eb",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          + Adicionar Curso
        </button>
      </div>
      <Filters title={title} onTitle={setTitle} selectedThemes={themes} onToggleTheme={toggleTheme} />
      {loading ? <Loading/> : (
        filtered.length ? (
          <div className="grid cards">
            {filtered.map(c => <CourseCard key={c.id} {...c} />)}
          </div>
        ) : <Empty title="Nenhum curso encontrado" hint="Ajuste os filtros ou tente novamente." />
      )}
    </section>
  );
}
