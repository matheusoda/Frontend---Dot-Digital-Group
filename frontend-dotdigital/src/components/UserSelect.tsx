import type { User } from "../types";

export function UserSelect({
  users, selectedId, onChange
}: {
  users: User[]; selectedId: number | null; onChange(id: number | null): void;
}) {
  return (
    <select className="select" value={selectedId ?? ""} onChange={(e)=>onChange(e.target.value ? Number(e.target.value) : null)}>
      <option value="">Selecione um usuário…</option>
      {users.map(u => <option key={u.id} value={u.id}>{u.name} — {u.email}</option>)}
    </select>
  );
}
