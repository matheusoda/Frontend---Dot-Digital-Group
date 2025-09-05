import { useEffect, useState } from "react";
import { getUsers } from "../api/api";
import type { User } from "../types";
import { UserForm } from "../components/UserForm";
import { Loading } from "../components/Loading";
import { Empty } from "../components/Empty";

export function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  async function load(){
    setLoading(true);
    try {
      const data = await getUsers();
      setUsers(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load(); 
  }, []);

  return (
    <section className="grid" style={{gap:16}}>
      <h2>Usuários</h2>
      <UserForm onUserCreated={load} />
      <div className="card">
        <h3>Lista</h3>
        {loading ? <Loading/> : (
          users.length ? (
            <div className="list">
              {users.map(u => (
                <div key={u.id} className="spread" style={{borderBottom:"1px solid var(--border)", padding:"8px 0"}}>
                  <div>
                    <div><strong>{u.name}</strong></div>
                    <div className="small">{u.email}</div>
                  </div>
                  <span className="badge">ID {u.id}</span>
                </div>
              ))}
            </div>
          ) : <Empty title="Nenhum usuário" />
        )}
      </div>
    </section>
  );
}
