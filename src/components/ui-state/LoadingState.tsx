import LottiePlayer from "@/components/atoms/LottiePlayer";
import loadingAnimation from "@/assets/lotties/Loading.json";

interface Props {
  size?: number;
  className?: string;
}

export default function LoadingState({ size = 220, className }: Props) {
  return (
    <div
      className={
        className ??
        "flex flex-1 items-center justify-center min-h-[60vh]"
      }
    >
      <LottiePlayer data={loadingAnimation} size={size} />
    </div>
  );
}
