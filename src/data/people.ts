export interface Person {
  id: string;
  name: string;
  team: string;
  role: string;
  skills: string[];
}

export const people: Person[] = [
  { id: "1", name: "M S Dhoni", team: "Platform", role: "Staff Engineer", skills: ["TypeScript", "React", "System Design"] },
  { id: "2", name: "Sourav Ganguly", team: "Payments", role: "Senior Engineer", skills: ["Node.js", "PostgreSQL", "Stripe API"] },
  { id: "3", name: "Kapil Dev", team: "Design", role: "Product Designer", skills: ["Figma", "Design Systems", "Accessibility"] },
  { id: "4", name: "Azharuddin Mohammad", team: "Platform", role: "Engineering Manager", skills: ["Kubernetes", "Go", "Mentoring"] },
  { id: "5", name: "Sachin Tendulkar", team: "Growth", role: "Frontend Engineer", skills: ["React", "A/B Testing", "Analytics"] },
  { id: "6", name: "Rahul Dravid", team: "Payments", role: "Backend Engineer", skills: ["Java", "Kafka", "PostgreSQL"] },
  { id: "7", name: "Suryakumar Yadav", team: "Data", role: "Data Engineer", skills: ["Python", "Airflow", "SQL"] },
  { id: "8", name: "Rohit Sharma", team: "Growth", role: "Product Manager", skills: ["Roadmapping", "Analytics", "Figma"] },
  { id: "9", name: "Sunil Gavaskar", team: "Design", role: "UX Researcher", skills: ["User Interviews", "Accessibility"] },
  { id: "10", name: "Lala Amarnath", team: "Data", role: "Senior Data Scientist", skills: ["Python", "Machine Learning"] },
];