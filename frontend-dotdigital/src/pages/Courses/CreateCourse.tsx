// src/pages/CreateCourse.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CursoForm } from "../../components/CourseForm";
import type { CursoFormValues } from "../../components/CourseForm";
import { createCourse } from "../../api/api"; // Nova função para centralizar chamada
import { Loading } from "../../components/Loading";
import { Toast } from "../../components/Toast";

export function CreateCourse() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (values: CursoFormValues) => {
    try {
      setLoading(true);
      await createCourse(values);
      setToast({ type: "success", message: "Curso criado com sucesso!" });
      setTimeout(() => navigate("/courses"), 1200);
    } catch (error) {
      console.error(error);
      setToast({ type: "error", message: "Erro ao criar curso." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid" style={{ gap: 16 }}>
      <h2>Criar Curso</h2>
      {loading ? (
        <Loading />
      ) : (
        <div className="max-w-xl">
          <CursoForm onSubmit={handleSubmit} />
        </div>
      )}
      {toast && <Toast message={toast.message} onClose={() => setToast(null)} />}
    </section>
  );
}
