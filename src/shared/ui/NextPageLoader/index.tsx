import { FC, useEffect, useRef } from "react";
import { Box } from "@mantine/core";

export const NextPageLoader: FC<{
  onIntersection: VoidFunction;
  visible?: boolean;
}> = ({ onIntersection, visible = true }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) return;
    const intObserver = new IntersectionObserver(([el]) => {
      if (el.isIntersecting) {
        onIntersection();
      }
    });

    if (ref.current) {
      intObserver.observe(ref.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return <Box ref={ref} />;
};
