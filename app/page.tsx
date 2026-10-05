import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Counter } from "@/components/counter";
import { Greeter } from "@/components/greeter";

const features = [
  { emoji: "📦", title: "Zero setup", text: "No installs on your machine. It just runs." },
  { emoji: "🚀", title: "Blazing fast", text: "Fast enough. Probably. Nobody measured." },
  { emoji: "🎨", title: "Pretty UI", text: "Built with shadcn/ui and Tailwind." },
];

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center overflow-hidden bg-gradient-to-b from-background to-muted/40">
      <div className="pointer-events-none absolute -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <main className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-16 px-6 py-24">
        <section className="flex flex-col items-center gap-6 text-center">
          <Badge variant="secondary">v0.0.1 · totally production ready</Badge>
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            The Dumbest Page
            <br />
            <span className="text-muted-foreground">You&apos;ll Ever Love</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            A very serious demo app with almost no functionality and a very nice
            coat of paint.
          </p>
          <div className="flex gap-3">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </section>

        <section className="grid w-full gap-4 sm:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title}>
              <CardHeader>
                <div className="text-3xl">{f.emoji}</div>
                <CardTitle>{f.title}</CardTitle>
                <CardDescription>{f.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>

        <section className="grid w-full gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Click counter</CardTitle>
              <CardDescription>The pinnacle of interactivity.</CardDescription>
            </CardHeader>
            <CardContent>
              <Counter />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Say hi</CardTitle>
              <CardDescription>Type a name, get a greeting.</CardDescription>
            </CardHeader>
            <CardContent>
              <Greeter />
            </CardContent>
          </Card>
        </section>

        <footer className="text-sm text-muted-foreground">
          Made for a demo. Nothing here does anything important.
        </footer>
      </main>
    </div>
  );
}
