// src/components/talleres/TallerList.tsx
import { TallerCard } from "./TallerCard";
import { talleres } from "@/data/talleres";

export const TallerList = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
      {talleres.map((taller) => (
        <TallerCard key={taller.id} taller={taller} />
      ))}
    </div>
  );
};
