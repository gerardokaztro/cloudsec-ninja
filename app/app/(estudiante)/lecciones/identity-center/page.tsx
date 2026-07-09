import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { CURRICULUM } from "@/lib/progress/curriculum";
import { CodeBlock } from "./components/code-block";
import { CompleteLessonButton } from "./components/complete-lesson-button";
import { DownloadIcon, InfoIcon, PlayIcon } from "./components/icons";

const MODULE_ID = "gestion-de-identidad-y-accesos";
const LESSON_ID = "aws-identity-center";

const TRUST_POLICY_JSON = `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::123456789012:saml-provider/AWSSSO_..."
      },
      "Action": ["sts:AssumeRoleWithSAML", "sts:TagSession"],
      "Condition": {
        "StringEquals": { "SAML:aud": "https://signin.aws.amazon.com/saml" }
      }
    }
  ]
}`;

const SCP_JSON = `{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "DenyUnapprovedRegions",
    "Effect": "Deny",
    "Action": "*",
    "Resource": "*",
    "Condition": {
      "StringNotEquals": {
        "aws:RequestedRegion": ["us-east-1", "us-west-2"]
      }
    }
  }]
}`;

const STS_COMMAND = `$ aws sts get-caller-identity

{
    "UserId": "AROAEXAMPLE:jgarcia",
    "Account": "123456789012",
    "Arn": "arn:aws:sts::123456789012:assumed-role/AWSReservedSSO_ReadOnlyAccess_a1b2c3/jgarcia"
}`;

export default async function IdentityCenterLessonPage() {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }

  const module = CURRICULUM.find((m) => m.id === MODULE_ID)!;
  const lesson = module.lessons.find((l) => l.id === LESSON_ID)!;

  return (
    <main className="min-h-screen bg-bg">
      <div className="mx-auto max-w-[820px] px-8 py-10">
        <Link href="/dashboard" className="text-xs font-medium text-ink-3 hover:text-ink-2">
          ← Volver al dashboard
        </Link>

        <p className="mt-5 text-xs text-ink-3">
          {module.title} / {lesson.title}
        </p>
        <h1 className="mt-1 font-display text-2xl font-semibold text-ink">
          AWS Identity Center: acceso centralizado multi-cuenta
        </h1>

        <div className="mt-3 mb-6 flex gap-1.5">
          <span className="rounded-md bg-accent-soft px-2.5 py-1 text-[11px] font-semibold text-accent-dark">
            nivel 200
          </span>
          <span className="rounded-md bg-surface-2 px-2.5 py-1 text-[11px] text-ink-2">identity-center</span>
          <span className="rounded-md bg-surface-2 px-2.5 py-1 text-[11px] text-ink-2">sso</span>
        </div>

        <div className="relative mb-6 flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-black">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
            <PlayIcon className="h-6 w-6 text-white" />
          </div>
          <div className="absolute bottom-3 left-3.5 text-xs text-white/85">
            Clase en vivo · AWS Identity Center paso a paso · 41:07
          </div>
        </div>

        <h2 className="mb-2.5 font-display text-lg font-semibold text-ink">¿Qué problema resuelve?</h2>
        <p className="mb-4 text-[14.5px] leading-relaxed text-ink-2">
          Cuando una organización maneja <strong>más de una cuenta de AWS</strong>, administrar accesos usuario por
          usuario en cada cuenta se vuelve inmanejable. <code>AWS Identity Center</code> (antes conocido como{" "}
          <code>AWS SSO</code>) centraliza esto: un solo punto de federación, y desde ahí defines qué usuarios acceden
          a qué cuentas, con qué nivel de permiso.
        </p>
        <p className="mb-5 text-[14.5px] leading-relaxed text-ink-2">
          A diferencia de IAM tradicional, Identity Center <em>no crea usuarios ni contraseñas nuevas</em> — se
          conecta a tu proveedor de identidad existente (Okta, Microsoft Entra ID, Active Directory) o usa su propio
          directorio interno, y desde ahí sincroniza usuarios y grupos.
        </p>

        <div className="mb-1.5 overflow-hidden rounded-xl border border-border">
          <div className="flex items-center gap-1.5 bg-[#1a1a1a] px-3.5 py-2">
            <div className="h-2.5 w-2.5 rounded-full bg-[#EE6A5F]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#F5BD4F]" />
            <div className="h-2.5 w-2.5 rounded-full bg-[#61C454]" />
            <span className="ml-1.5 text-[11px] text-[#8a8a8a]">consola AWS — IAM Identity Center</span>
          </div>
          <svg viewBox="0 0 700 280" className="block w-full bg-[#f4f6f5]">
            <rect x="0" y="0" width="700" height="44" fill="#232f3e" />
            <text x="16" y="27" fontFamily="Inter, sans-serif" fontSize="13" fill="#fff" fontWeight="600">
              AWS IAM Identity Center
            </text>
            <text x="600" y="27" fontFamily="Inter, sans-serif" fontSize="11" fill="#9fb3c8">
              us-east-1
            </text>
            <rect x="20" y="64" width="200" height="196" fill="#fff" stroke="#d5dbdb" />
            <text x="34" y="90" fontFamily="Inter, sans-serif" fontSize="12" fill="#16191f" fontWeight="600">
              Usuarios
            </text>
            <text x="34" y="114" fontFamily="Inter, sans-serif" fontSize="12" fill="#0972d3">
              Grupos
            </text>
            <text x="34" y="138" fontFamily="Inter, sans-serif" fontSize="12" fill="#0972d3">
              Cuentas de AWS
            </text>
            <text x="34" y="162" fontFamily="Inter, sans-serif" fontSize="12" fill="#0972d3">
              Conjuntos de permisos
            </text>
            <text x="34" y="186" fontFamily="Inter, sans-serif" fontSize="12" fill="#0972d3">
              Aplicaciones
            </text>
            <rect x="240" y="64" width="440" height="196" fill="#fff" stroke="#d5dbdb" />
            <text x="256" y="90" fontFamily="Inter, sans-serif" fontSize="13" fill="#16191f" fontWeight="600">
              Conjuntos de permisos
            </text>
            <rect x="256" y="104" width="408" height="28" fill="#f2f8fd" />
            <text x="264" y="122" fontFamily="Inter, sans-serif" fontSize="11" fill="#16191f">
              AdministratorAccess
            </text>
            <text x="560" y="122" fontFamily="Inter, sans-serif" fontSize="10" fill="#5f6b7a">
              PT1H
            </text>
            <rect x="256" y="134" width="408" height="28" fill="#fff" />
            <text x="264" y="152" fontFamily="Inter, sans-serif" fontSize="11" fill="#16191f">
              ReadOnlyAccess
            </text>
            <text x="560" y="152" fontFamily="Inter, sans-serif" fontSize="10" fill="#5f6b7a">
              PT4H
            </text>
            <rect x="256" y="164" width="408" height="28" fill="#f2f8fd" />
            <text x="264" y="182" fontFamily="Inter, sans-serif" fontSize="11" fill="#16191f">
              SecurityAudit
            </text>
            <text x="560" y="182" fontFamily="Inter, sans-serif" fontSize="10" fill="#5f6b7a">
              PT2H
            </text>
          </svg>
        </div>
        <p className="mb-6 text-center text-[11.5px] text-ink-3">
          Captura: panel de conjuntos de permisos en IAM Identity Center
        </p>

        <h2 className="mb-2.5 font-display text-lg font-semibold text-ink">Permission sets, la pieza central</h2>
        <p className="mb-3.5 text-[14.5px] leading-relaxed text-ink-2">
          Un <strong>permission set</strong> es una plantilla reutilizable de permisos. Internamente, Identity Center
          crea un <code>IAM Role</code> por cada combinación de permission set + cuenta asignada — tú no gestionas
          esos roles a mano.
        </p>

        <table className="mb-5 w-full border-collapse text-[13px]">
          <thead>
            <tr>
              <th className="border border-border bg-surface-2 px-3 py-2 text-left">Permission set</th>
              <th className="border border-border bg-surface-2 px-3 py-2 text-left">Duración de sesión</th>
              <th className="border border-border bg-surface-2 px-3 py-2 text-left">Uso típico</th>
            </tr>
          </thead>
          <tbody className="text-ink-2">
            <tr>
              <td className="border border-border px-3 py-2">
                <code>AdministratorAccess</code>
              </td>
              <td className="border border-border px-3 py-2">1 hora</td>
              <td className="border border-border px-3 py-2">Break-glass, uso puntual</td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2">
                <code>ReadOnlyAccess</code>
              </td>
              <td className="border border-border px-3 py-2">4 horas</td>
              <td className="border border-border px-3 py-2">Auditoría, soporte</td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2">
                <code>SecurityAudit</code>
              </td>
              <td className="border border-border px-3 py-2">2 horas</td>
              <td className="border border-border px-3 py-2">Equipo de seguridad</td>
            </tr>
          </tbody>
        </table>

        <p className="mb-2 text-[14px] leading-relaxed text-ink-2">
          Cosas que <strong>debes recordar</strong> sobre permission sets:
        </p>
        <ul className="mb-5 list-disc space-y-1 pl-5 text-[14px] leading-relaxed text-ink-2">
          <li>Un permission set define <em>qué</em> puede hacer un usuario, no <em>quién</em> es</li>
          <li>
            La duración de sesión (<code>SessionDuration</code>) limita cuánto dura la credencial temporal antes de
            expirar
          </li>
          <li>
            Identity Center <strong>no modifica</strong> tus IAM users o roles existentes — convive con ellos
          </li>
        </ul>

        <h2 className="mb-2.5 font-display text-lg font-semibold text-ink">El rol que se crea por detrás</h2>
        <p className="mb-3.5 text-[14.5px] leading-relaxed text-ink-2">
          Cuando asignas un permission set a un usuario sobre una cuenta, Identity Center provisiona un{" "}
          <code>IAM Role</code> con un nombre reservado (<code>AWSReservedSSO_*</code>). Su trust policy confía en el
          proveedor SAML interno de Identity Center — nunca directamente en el usuario final:
        </p>

        <CodeBlock code={TRUST_POLICY_JSON} lang="json" />

        <p className="mb-3.5 text-[14.5px] leading-relaxed text-ink-2">
          Nota el uso de <code>sts:TagSession</code> — esto permite que el rol asumido lleve atributos del usuario
          (como su departamento o equipo), habilitando <strong>ABAC</strong> incluso dentro de sesiones federadas.
        </p>

        <div className="mb-4 flex items-center justify-between rounded-xl border border-border bg-surface-2 px-4.5 py-3.5">
          <div className="flex items-center gap-2.5">
            <DownloadIcon className="h-4.5 w-4.5 text-accent-dark" />
            <span className="text-[13px]">identity-center-permission-sets.tf</span>
          </div>
          <button
            type="button"
            disabled
            title="Generación real de archivos: historia futura"
            className="cursor-not-allowed rounded-lg border border-border px-3.5 py-1.5 text-xs font-medium text-ink-3"
          >
            Descargar Terraform
          </button>
        </div>
        <div className="mb-6 flex items-center justify-between rounded-xl border border-border bg-surface-2 px-4.5 py-3.5">
          <div className="flex items-center gap-2.5">
            <DownloadIcon className="h-4.5 w-4.5 text-accent-dark" />
            <span className="text-[13px]">identity-center-scp-baseline.yaml</span>
          </div>
          <button
            type="button"
            disabled
            title="Generación real de archivos: historia futura"
            className="cursor-not-allowed rounded-lg border border-border px-3.5 py-1.5 text-xs font-medium text-ink-3"
          >
            Descargar CloudFormation
          </button>
        </div>

        <h2 className="mb-2.5 font-display text-lg font-semibold text-ink">
          Reforzando con Service Control Policies
        </h2>
        <p className="mb-3.5 text-[14.5px] leading-relaxed text-ink-2">
          Un permission set mal configurado no es el fin del mundo si tienes <strong>SCPs</strong> (Service Control
          Policies) a nivel de organización — estas actúan como un techo que <em>ni siquiera un administrador</em>{" "}
          puede traspasar, sin importar qué permission set tenga asignado:
        </p>

        <CodeBlock code={SCP_JSON} lang="json" />

        <div className="mb-6 flex items-center gap-2.5 rounded-xl bg-accent-soft px-4 py-3">
          <InfoIcon className="h-4.5 w-4.5 shrink-0 text-accent-dark" />
          <span className="text-[13px] text-accent-dark">
            <strong>Dato clave:</strong> las SCPs restringen, nunca otorgan permisos. Un permission set con{" "}
            <code>AdministratorAccess</code> sigue bloqueado si la SCP lo deniega explícitamente.
          </span>
        </div>

        <h2 className="mb-2.5 font-display text-lg font-semibold text-ink">Ejercicio práctico</h2>
        <p className="mb-3.5 text-[14.5px] leading-relaxed text-ink-2">
          Verifica desde tu terminal qué identidad federada estás usando en este momento:
        </p>

        <CodeBlock code={STS_COMMAND} lang="bash" />

        <p className="mb-8 text-[14.5px] leading-relaxed text-ink-2">
          Observa el <code>Arn</code>: confirma que estás operando bajo un rol de Identity Center (
          <code>AWSReservedSSO_*</code>), no con credenciales de un <code>IAM User</code> tradicional.
        </p>

        <CompleteLessonButton moduleId={MODULE_ID} lessonId={LESSON_ID} />
      </div>
    </main>
  );
}
