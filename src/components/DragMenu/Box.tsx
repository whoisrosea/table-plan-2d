import type { CSSProperties, FC } from "react";
import { memo } from "react";



export interface BoxProps {
  src: string;
  styles: CSSProperties;
}

export const Box: FC<BoxProps> = memo(function Box({ src, styles }) {
  return (
    <div
      style={{ ...styles }}
    >
      <img src={src} height={styles.height} width={styles.width} alt="imgErr"/>
    </div>
  );
});
