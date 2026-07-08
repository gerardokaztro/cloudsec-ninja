export interface CurriculumLesson {
  id: string;
  title: string;
}

export interface CurriculumModule {
  id: string;
  title: string;
  /** Path del landing page del módulo en el sitio de docs (Docusaurus), relativo a DOCS_BASE_URL. */
  docsPath: string;
  lessons: CurriculumLesson[];
}

// Sitio de documentación real (Docusaurus, docusaurus.config.js: url + routeBasePath por defecto "/docs").
export const DOCS_BASE_URL = "https://acloudsecurity.ninja/docs";

export function moduleDocsUrl(module: { docsPath: string }): string {
  return `${DOCS_BASE_URL}${module.docsPath}`;
}

/**
 * Los 8 módulos reales de docs/ (sidebars.js del repo cloudsec-ninja),
 * no los 4 módulos de demo del mockup — sus ids/slugs son estables porque
 * ya son contenido publicado, así que van a coincidir sin migración
 * cuando el contenido de módulos/lecciones se vuelva dinámico (leído
 * desde GitHub) en una historia futura.
 *
 * lesson.id es el nombre de archivo del doc (sin ruta de carpeta) — es
 * la parte que compone la SK de DynamoDB (MODULE#{module_id}#LESSON#{lesson_id}),
 * no necesariamente el path completo del doc en el sitio (ver docsPath
 * a nivel de módulo para el link "empezar/continuar").
 */
export const CURRICULUM: CurriculumModule[] = [
  {
    id: "bienvenida",
    title: "Bienvenida",
    docsPath: "/",
    lessons: [
      { id: "index", title: "Bienvenida" },
      { id: "valores-y-objetivos", title: "Valores y objetivos" },
      { id: "autor", title: "Sobre el autor" },
      { id: "coautores", title: "Nuestros co-autores" },
      { id: "ruta-de-aprendizaje", title: "Ruta de aprendizaje" },
      { id: "como-ser-parte", title: "Cómo ser parte" },
      { id: "comunidad", title: "Comunidad" },
    ],
  },
  {
    id: "fundamentos-de-tecnologia",
    title: "Fundamentos de TI",
    docsPath: "/fundamentos-de-tecnologia",
    lessons: [
      { id: "redes", title: "Redes" },
      { id: "serverless", title: "Serverless" },
      { id: "devops", title: "DevOps" },
      { id: "iac", title: "Infraestructura como Código" },
      { id: "terraform", title: "Introducción a Terraform" },
    ],
  },
  {
    id: "fundamentos-de-nube",
    title: "Computación en la Nube",
    docsPath: "/fundamentos-de-nube",
    lessons: [
      { id: "introduccion", title: "Introducción al Cloud Computing" },
      { id: "aws", title: "Fundamentos de AWS" },
    ],
  },
  {
    id: "fundamentos-de-ciberseguridad",
    title: "Ciberseguridad",
    docsPath: "/fundamentos-de-ciberseguridad",
    lessons: [
      { id: "introduccion", title: "Introducción a la Ciberseguridad" },
      { id: "ethical-hacking", title: "Ethical Hacking" },
      { id: "metodologias-y-frameworks", title: "Metodologías y Frameworks" },
      { id: "mitre", title: "MITRE ATT&CK" },
      { id: "nist", title: "NIST Cybersecurity Framework" },
      { id: "zerotrust", title: "Zero Trust" },
      { id: "principio-del-minimo-privilegio", title: "Principio del mínimo privilegio" },
    ],
  },
  {
    id: "fundamentos-de-seguridad-aws",
    title: "Seguridad DE la Nube",
    docsPath: "/fundamentos-de-seguridad-aws",
    lessons: [
      { id: "responsabilidad-compartida", title: "Modelo de responsabilidad compartida" },
      { id: "programas-de-cumplimiento", title: "Programas de cumplimiento" },
      { id: "well-architected-sec", title: "Pilar de seguridad del Well-Architected Framework" },
    ],
  },
  {
    id: "estructuras-multi-cuenta",
    title: "Estructuras Multi-Cuentas",
    docsPath: "/estructuras-multi-cuenta",
    lessons: [
      { id: "introduccion", title: "Introducción" },
      { id: "aws-organizations", title: "AWS Organizations" },
      { id: "aws-control-tower", title: "AWS Control Tower" },
    ],
  },
  {
    id: "gestion-de-identidad-y-accesos",
    title: "Gestión de Identidad y Accesos",
    docsPath: "/gestion-de-identidad-y-accesos",
    lessons: [
      { id: "aws-iam", title: "AWS IAM" },
      { id: "aws-identity-center", title: "AWS Identity Center" },
      { id: "aws-access-analyzer", title: "AWS Access Analyzer" },
      { id: "aws-secret-manager", title: "AWS Secrets Manager" },
      { id: "amazon-cognito", title: "Amazon Cognito" },
    ],
  },
  {
    id: "compliance-continuo",
    title: "Compliance Continuo",
    docsPath: "/compliance-continuo",
    lessons: [{ id: "aws-config", title: "AWS Config" }],
  },
];
