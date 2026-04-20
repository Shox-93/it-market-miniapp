import type { Specialist } from "@/types/specialist.type";

type Props = {
  specialist: Specialist;
};

export const SpecialistCard = ({ specialist }: Props) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-[17px] font-semibold text-[#111827]">
        {specialist.name}
      </h3>

      <p className="text-gray-500">{specialist.role}</p>

      <p className="text-gray-400">{specialist.location}</p>

      <p className="mt-4 text-gray-600">{specialist.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {specialist.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-gray-200 px-3 py-1 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
