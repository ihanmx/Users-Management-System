import Link from "next/link";
import Button from "@/components/atoms/Button";
import LottiePlayer from "@/components/atoms/LottiePlayer";
import notFoundAnimation from "@/assets/lotties/404.json";

interface Props {
  title?: string;
  description?: string;
  homeHref?: string;
  homeLabel?: string;
}

export default function NotFoundState({
  title = "Page not found",
  description = "The page you’re looking for doesn’t exist or was moved.",
  homeHref = "/",
  homeLabel = "Back to home",
}: Props) {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-6 min-h-[70vh] p-6 text-center">
      <LottiePlayer data={notFoundAnimation} size={320} />
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-zinc-600 dark:text-zinc-400 max-w-md">{description}</p>
      <Link href={homeHref}>
        <Button>{homeLabel}</Button>
      </Link>
    </div>
  );
}
