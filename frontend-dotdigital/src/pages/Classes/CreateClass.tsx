// src/pages/CreateCourse.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClass } from "../../api/api"; // Nova função para centralizar chamada
import { Loading } from "../../components/Loading";
import { Toast } from "../../components/Toast";
import { ClassForm, type ClassFormValues } from "../../components/ClassForm";

export function CreateClass() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (values: ClassFormValues) => {
    try {
      setLoading(true);
      await createClass(values);
      setToast({ type: "success", message: "Curso criado com sucesso!" });
      setTimeout(() => navigate("/courses"), 1200); // pequeno delay para exibir toast
    } catch (error) {
      console.error(error);
      setToast({ type: "error", message: "Erro ao criar curso." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="grid" style={{ gap: 16 }}>
      <h2>Criar Turma</h2>
      {loading ? (
        <Loading />
      ) : (
        <div className="max-w-xl">
          <ClassForm onSubmit={handleSubmit} />
        </div>
      )}
      {toast && <Toast message={toast.message} onClose={() => setToast(null)} />}
    </section>
  );
}
