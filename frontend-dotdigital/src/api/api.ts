import type { Course, ClassItem, User, Enrollment } from "../types";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

async function http<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `HTTP ${res.status}`);
  }
  if (res.status === 204) return undefined as unknown as T;
  return res.json() as Promise<T>;
}

export function getCourses(q?: { title?: string; theme?: string }) {
  const params = new URLSearchParams();
  if (q?.title) params.set("title", q.title);
  if (q?.theme) params.set("theme", q.theme);
  return http<Course[]>(`/courses${params.toString() ? `?${params}` : ""}`);
}

export function createCourse(payload: { title: string; description: string; theme: string }) {
  return http<Course>("/courses", { method: "POST", body: JSON.stringify(payload) });
}

export function getClasses() {
  return http<ClassItem[]>("/classes");
}

export function createClass(payload: { title: string; vacancies: number; status: string; startDate: string; endDate: string; courseId: number;}) {
  return http<Course>("/classes", { method: "POST", body: JSON.stringify(payload) });
}

export function getUsers() {
  return http<User[]>("/users");
}

export function createUser(payload: { name: string; email: string }) {
  return http<User>("/users", { method: "POST", body: JSON.stringify(payload) });
}

export function enrollUser(userId: number, classId: number) {
  return http<Enrollment>("/enrollments", { method: "POST", body: JSON.stringify({ userId, classId }) });
}

export function getEnrollmentsByUser(userId: number) {
  return http<Enrollment[]>(`/enrollments/user/${userId}`);
}
