import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";

// Página de prueba para validar el login (S1-03). El dashboard real es una historia futura.
export default async function DashboardPage() {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }

  return (
    <main>
      <h1>Hola, {session.email}</h1>
      <a href="/logout">Cerrar sesión</a>
    </main>
  );
}
