import React from "react";

export function Toast({ message, onClose }: { message: string; onClose(): void }) {
  return (
    <div className="toast">
      <div className="spread">
        <div>{message}</div>
        <button className="btn ghost" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}
