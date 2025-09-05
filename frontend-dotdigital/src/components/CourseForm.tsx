// src/components/forms/CursoForm.tsx
import { useState } from "react";
import { Toast } from "./Toast";

export interface CursoFormValues {
  title: string;
  description: string;
  theme: string;
  imageUrl: string;
}

interface CursoFormProps {
  initialValues?: CursoFormValues;
  onSubmit: (values: CursoFormValues) => void;
}

export function CursoForm({ initialValues, onSubmit }: CursoFormProps) {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [values, setValues] = useState<CursoFormValues>(
    initialValues ?? { title: "", description: "", theme: "", imageUrl: "" }
  );

  const [customTheme, setCustomTheme] = useState("");
  // const [setDescription, description] = useState("");
  // const [setTitle, title] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const finalValues = {
      ...values,
      theme: values.theme === "custom" ? customTheme : values.theme,
    };

    onSubmit(finalValues);
    setToast("Curso cadastrado com sucesso!");
    setLoading(false);
    setValues({ title: "", description: "", theme: "", imageUrl: "" });
    setCustomTheme("");
  };

  return (
    <div className="card">
      <h3>Novo curso</h3>
      <form className="grid" onSubmit={handleSubmit} style={{gap:12}}>
        <input 
          className="input" 
          placeholder="Nome"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        <textarea
          className="input"
          name="description"
          placeholder="Descrição"
          value={values.description}
          onChange={handleChange}
        />
        <select
          className="input"
          name="theme"
          value={values.theme}
          onChange={handleChange}
        >
          <option value="">Selecione um tema</option>
          <option value="inovacao">Inovação</option>
          <option value="tecnologia">Tecnologia</option>
          <option value="marketing">Marketing</option>
          <option value="empreendedorismo">Empreendedorismo</option>
          <option value="agro">Agro</option>
          <option value="custom">Outro...</option>
        </select>

        {values.theme === "custom" && (
          <input
            className="input"
            placeholder="Digite o tema"
            value={customTheme}
            onChange={(e) => setCustomTheme(e.target.value)}
          />
        )}

        <input
            className="input"
            name="imageUrl"
            placeholder="Adicione o link da imagem de capa do curso"
            value={values.imageUrl}
            onChange={handleChange}
          />

        <div className="spread">
          <span className="small muted">Informe Nome e descrição.</span>
          <button className="btn" disabled={loading} type="submit">
            {loading ? "Enviando..." : "Cadastrar"}
          </button>
        </div>
      </form>
      {toast && <Toast message={toast} onClose={()=>setToast(null)} />}
    </div>
  );
}
