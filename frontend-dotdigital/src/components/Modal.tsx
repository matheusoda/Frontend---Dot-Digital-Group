import React from "react";
import type { PropsWithChildren } from "react";

export function Modal({ open, title, onClose, children }: PropsWithChildren<{
  open: boolean; title: string; onClose(): void;
}>) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e)=>e.stopPropagation()}>
        <div className="spread">
          <h3>{title}</h3>
          <button className="btn ghost" onClick={onClose}>✕</button>
        </div>
        <div className="hr" />
        {children}
      </div>
    </div>
  );
}
