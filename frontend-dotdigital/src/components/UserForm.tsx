import { useState } from "react";
import { createUser } from "../api/api";
import { Loading } from "./Loading";
import { Toast } from "./Toast";

interface UserFormProps {
  onUserCreated?: () => void;
}

export function UserForm({ onUserCreated }: UserFormProps) {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email) return setToast("Nome e e-mail são obrigatórios.");
    try {
      setLoading(true);
      await createUser({ name, email });
      setToast("Usuário cadastrado com sucesso!");
      setName(""); 
      setEmail("");
      onUserCreated?.();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Erro ao cadastrar usuário.";
      setToast(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <h3>Novo usuário</h3>
      <form className="grid" onSubmit={onSubmit} style={{gap:12}}>
        <input className="input" placeholder="Nome" value={name} onChange={e=>setName(e.target.value)} />
        <input className="input" placeholder="E-mail" value={email} onChange={e=>setEmail(e.target.value)} />
        <div className="spread">
          <span className="small muted">Informe nome e e-mail válidos.</span>
          <button className="btn" disabled={loading} type="submit">
            {loading ? "Enviando..." : "Cadastrar"}
          </button>
        </div>
      </form>
      {loading && <Loading />}
      {toast && <Toast message={toast} onClose={()=>setToast(null)} />}
    </div>
  );
}
