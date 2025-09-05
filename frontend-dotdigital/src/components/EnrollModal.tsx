import { Modal } from "./Modal";
import { UserSelect } from "./UserSelect";
import type { User } from "../types";
import { useState } from "react";

export function EnrollModal({
  open, onClose, users, onConfirm
}: {
  open: boolean; onClose(): void;
  users: User[]; onConfirm(userId: number): Promise<void> | void;
}) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Modal open={open} title="Matricular usuário" onClose={onClose}>
      <div className="grid" style={{gap:12}}>
        <UserSelect users={users} selectedId={selected} onChange={setSelected} />
        <div className="spread">
          <div className="small muted">Escolha um usuário existente para realizar a matrícula.</div>
          <button className="btn" disabled={!selected} onClick={async ()=>{
            if (!selected) return;
            await onConfirm(selected);
            onClose();
          }}>
            Confirmar
          </button>
        </div>
      </div>
    </Modal>
  );
}
