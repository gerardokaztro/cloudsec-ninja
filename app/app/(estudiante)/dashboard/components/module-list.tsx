import type { ModuleView } from "@/lib/progress/view-model";
import { ModuleRow } from "./module-row";

export function ModuleList({ modules }: { modules: ModuleView[] }) {
  return (
    <div className="mb-8 flex flex-col gap-2.5">
      {modules.map((module) => (
        <ModuleRow key={module.id} module={module} />
      ))}
    </div>
  );
}
