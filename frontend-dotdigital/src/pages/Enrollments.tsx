import { useEffect, useState } from "react";
import { getEnrollmentsByUser, getUsers } from "../api/api";
import type { Enrollment, User } from "../types";
import { UserSelect } from "../components/UserSelect";
import { Empty } from "../components/Empty";
import { Loading } from "../components/Loading";
import { formatDate } from "../utils";

export function Enrollment() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{ getUsers().then(setUsers); }, []);

  useEffect(()=> {
    if (!selectedUser) { setEnrollments([]); return; }
    setLoading(true);
    getEnrollmentsByUser(selectedUser)
      .then(setEnrollments)
      .finally(()=>setLoading(false));
  }, [selectedUser]);

  return (
    <section className="grid" style={{gap:16}}>
      <h2>Matrículas</h2>
      <div className="card">
        <h3>Filtrar por usuário</h3>
        <UserSelect users={users} selectedId={selectedUser} onChange={setSelectedUser} />
      </div>

      <div className="card">
        <h3>Resultados</h3>
        {loading ? <Loading/> : (
          enrollments.length ? (
            <div className="list">
              {enrollments.map(e => (
                <div key={e.id} className="spread" style={{borderBottom:"1px solid var(--border)", padding:"10px 0"}}>
                  <div>
                    <div><strong>{e.class.course?.title}</strong> — {e.class.title}</div>
                    <div className="small">
                      {formatDate(e.class.startDate)} — {formatDate(e.class.endDate)} | Status: {e.class.status}
                    </div>
                  </div>
                  <span className="badge">Matrícula #{e.id}</span>
                </div>
              ))}
            </div>
          ) : <Empty title="Nenhuma matrícula para este usuário" />
        )}
      </div>
    </section>
  );
}
