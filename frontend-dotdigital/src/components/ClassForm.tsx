import { useState, useEffect } from "react";
import { getCourses } from "../api/api";
import type { Course } from "../types";

export interface ClassFormValues {
  title: string;
  description: string;
  vacancies: number;
  status: string;
  startDate: string;
  endDate: string;
  courseId: number;
}

interface Props {
  onSubmit: (values: ClassFormValues) => void;
}

export function ClassForm({ onSubmit }: Props) {
  const [values, setValues] = useState<ClassFormValues>({
    title: "",
    description: "",
    vacancies: 0,
    status: "disponivel",
    startDate: "",
    endDate: "",
    courseId: 0,
  });

  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    getCourses({}).then(setCourses);
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: name === "vacancies" || name === "courseId" ? Number(value) : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(values);
  }

  return (
    <div className="card">
      <h3>Nova Turma</h3>
      <form className="grid" style={{ gap: 12 }} onSubmit={handleSubmit}>
        <input
          className="input"
          placeholder="Título"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        <textarea
          className="input"
          placeholder="Descrição"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <input
          className="input"
          placeholder="Vagas"
          type="number"
          name="vacancies"
          value={values.vacancies}
          onChange={handleChange}
        />
        <select
          className="input"
          name="status"
          value={values.status}
          onChange={handleChange}
        >
          <option value="disponivel">Disponível</option>
          <option value="encerrado">Encerrado</option>
        </select>
        <input
          className="input"
          type="date"
          name="startDate"
          value={values.startDate}
          onChange={handleChange}
        />
        <input
          className="input"
          type="date"
          name="endDate"
          value={values.endDate}
          onChange={handleChange}
        />
        <select
          className="input"
          name="courseId"
          value={values.courseId}
          onChange={handleChange}
        >
          <option value={0}>Selecione um curso</option>
          {courses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.title}
            </option>
          ))}
        </select>

        <button className="btn" type="submit">
          Criar Turma
        </button>
      </form>
    </div>
  );
}
