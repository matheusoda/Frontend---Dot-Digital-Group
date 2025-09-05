import { useEffect, useState } from "react";
import { enrollUser, getClasses, getUsers } from "../../api/api";
import type { ClassItem, User } from "../../types";
import { ClassCard } from "../../components/ClassCard";
import { Loading } from "../../components/Loading";
import { Empty } from "../../components/Empty";
import { EnrollModal } from "../../components/EnrollModal";
import { Toast } from "../../components/Toast";
import { useNavigate } from "react-router-dom";

export function ListClasses() {
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [targetClassId, setTargetClassId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  
  const navigate = useNavigate();

  async function load() {
    setLoading(true);
    try {
      const [cls, us] = await Promise.all([getClasses(), getUsers()]);
      setClasses(cls);
      setUsers(us);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function onEnrollAsk(classId: number){
    setTargetClassId(classId);
    setEnrollOpen(true);
  }

  async function onEnrollConfirm(userId: number){
    if (!targetClassId) return;
    try {
      await enrollUser(userId, targetClassId);
      setToast("Matrícula realizada com sucesso!");
      await load();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Erro ao matricular.";
      setToast(msg);
    }
  }

  return (
    <section className="grid" style={{gap:16}}>
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Turmas</h2>
        <button
          onClick={() => navigate("/classes/new")}
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
          + Adicionar Turma
        </button>
      </div>
      

      {loading ? 
        <Loading/> : (
        classes.length ? (
          <div className="grid cards">
            {classes.map(c => (
              <ClassCard key={c.id} {...c} onEnroll={onEnrollAsk} />
            ))}
          </div>
        ) : <Empty title="Nenhuma turma encontrada" />
      )}

      <EnrollModal
        open={enrollOpen}
        onClose={()=>{
          setEnrollOpen(false);
          setTargetClassId(null);
        }}
        users={users}
        onConfirm={onEnrollConfirm}
      />

      {toast && <Toast message={toast} onClose={()=>setToast(null)} />}
    </section>
  );
}
