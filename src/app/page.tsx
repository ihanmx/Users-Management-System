import Button from "@/components/atoms/Button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button variant="primary" size="md">
        Hello World
      </Button>
    </div>
  );
}
