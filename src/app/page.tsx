import Events from "@/components/Events";
import { Users } from "@/components/Users";

export default function Home() {
  return (
    <div className="w-full  grid grid-cols-2 gap-10 h-full">
      <Users />
      <Events />
    </div>
  );
}
