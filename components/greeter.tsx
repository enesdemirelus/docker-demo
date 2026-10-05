"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Greeter() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState<string | null>(null);

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setGreeting(name.trim() ? `Hello, ${name.trim()}! 👋` : "Hello, stranger! 👋");
      }}
    >
      <div className="flex gap-2">
        <Input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit">Greet</Button>
      </div>
      <p className="min-h-6 text-sm text-muted-foreground">{greeting}</p>
    </form>
  );
}
