import Image from "next/image";

import { Counter } from "@/components/counter/Counter";

export default function Home() {
  return (
    <div className="p-16">
      <div className="mb-8">Writing Test with Jest</div>
      <div>
        <Counter />
      </div>
    </div>
  );
}
