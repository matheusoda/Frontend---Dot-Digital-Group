import type { ClassItem } from "../types";
import { cx, formatDate, isAvailable } from "../utils";

export function ClassCard({
  id, title, status, startDate, endDate, vacancies, remainingVacancies, onEnroll
}: ClassItem & { onEnroll?: (classId: number) => void }) {
  const available = isAvailable(status);

  return (
    <div className="card">
      <div className="spread">
        <h4>{title}</h4>
        <span className={cx("badge", available ? "" : "danger")}>
          {available ? "disponível" : "encerrado"}
        </span>
      </div>

      <div className="small" style={{margin:"6px 0"}}>
        {formatDate(startDate)} — {formatDate(endDate)}
        {typeof vacancies === "number" && <span style={{marginLeft:8}} className="badge">{remainingVacancies} vagas</span>}
      </div>

      <div className="spread" style={{marginTop:8}}>
        <div className="muted">ID: {id}</div>
        {onEnroll && (
          <button className="btn" disabled={!available || remainingVacancies <= 0} onClick={()=>onEnroll(id)}>
            Matricular
          </button>
        )}
      </div>
    </div>
  );
}









// import React from "react";

// interface ClasseCardProps {
//   id: number;
//   title: string;
//   status: string;
//   startDate: string;
//   endDate: string;
//   onEnroll?: (classId: number) => void;
// }

// export const ClasseCard: React.FC<ClasseCardProps> = ({ id, title, status, startDate, endDate, onEnroll }) => (
//   <div style={{
//     border: "1px solid #ddd",
//     borderRadius: "10px",
//     padding: "15px",
//     backgroundColor: status === "encerrado" ? "#f8d7da" : "#d1e7dd",
//     marginBottom: "15px"
//   }}>
//     <h4>{title}</h4>
//     <p>Status: {status}</p>
//     <p>Início: {new Date(startDate).toLocaleDateString()} | Fim: {new Date(endDate).toLocaleDateString()}</p>
//     {onEnroll && <button onClick={() => onEnroll(id)} disabled={status === "encerrado"} style={{
//       padding: "6px 10px",
//       borderRadius: "6px",
//       border: "none",
//       backgroundColor: "#1976d2",
//       color: "#fff",
//       cursor: "pointer"
//     }}>Matricular</button>}
//   </div>
// );




















// import React from "react";

// interface ClasseCardProps {
//   id: number;
//   name: string;
//   startDate: string;
//   endDate: string;
//   status: string;
//   onEnroll?: (classId: number) => void;
// }

// export const ClasseCard: React.FC<ClasseCardProps> = ({ id, name, startDate, endDate, status, onEnroll }) => {
//   return (
//     <div className="card">
//       <h4>{name}</h4>
//       <p>{new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}</p>
//       <p>Status: <strong>{status}</strong></p>
//       {status === "disponível" && onEnroll && (
//         <button onClick={() => onEnroll(id)}>Matricular</button>
//       )}
//     </div>
//   );
// };
