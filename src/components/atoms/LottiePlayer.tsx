"use client";

import Lottie from "lottie-react";

interface Props {
  data: object;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  size?: number | string;
}

export default function LottiePlayer({
  data,
  loop = true,
  autoplay = true,
  className,
  size = 240,
}: Props) {
  const dimension = typeof size === "number" ? `${size}px` : size;

  return (
    <Lottie
      animationData={data}
      loop={loop}
      autoplay={autoplay}
      className={className}
      style={{ width: dimension, height: dimension }}
    />
  );
}
