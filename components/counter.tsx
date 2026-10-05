"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center gap-3">
      <Button variant="outline" onClick={() => setCount((c) => c - 1)}>
        −
      </Button>
      <span className="w-12 text-center text-2xl font-semibold tabular-nums">
        {count}
      </span>
      <Button onClick={() => setCount((c) => c + 1)}>+</Button>
    </div>
  );
}
