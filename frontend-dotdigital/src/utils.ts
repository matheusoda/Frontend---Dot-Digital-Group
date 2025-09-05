export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(d: string | Date) {
  const date = typeof d === "string" ? new Date(d) : d;
  if (isNaN(date.getTime())) return "-";
  return date.toLocaleDateString();
}

export function isAvailable(status: string) {
  const s = status.toLowerCase();
  return s === "disponível" || s === "disponivel";
}
