// src/types.ts

export type Theme = "inovacao" | "tecnologia" | "marketing" | "empreendedorismo" | "agro";


export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  theme: string;
  imageUrl?: string;
  classes?: ClassItem[];
}

export interface ClassItem  {
  id: number;
  title: string;
  status: "disponível" | "disponivel" | "encerrado";
  startDate: string;
  endDate: string;
  courseId: number;
  course: Course;
  vacancies?: number;
  enrolledCount: number;
  remainingVacancies: number;
}

export interface Enrollment {
  id: number;
  userId: number;
  classId: number;
  class: ClassItem & { course: Course };
}
