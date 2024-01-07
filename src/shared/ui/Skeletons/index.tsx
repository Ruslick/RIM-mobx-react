import { Skeleton } from "@mantine/core";
import { FC } from "react";

interface SkeletonProps {
  count: number;
  w: React.CSSProperties["width"];
  h: React.CSSProperties["height"];
  visible?: boolean;
}

export const Skeletons: FC<SkeletonProps> = ({ count, w, h, visible }) => {
  if (!visible) return null;
  const skeletons = Array(count).fill(null);
  const skeletonsComps = skeletons.map((_, index) => (
    <Skeleton radius={"md"} height={h} width={w} key={index} />
  ));

  return <>{skeletonsComps}</>;
};
