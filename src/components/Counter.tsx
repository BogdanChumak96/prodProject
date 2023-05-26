import { useState } from "react";
import styles from "./Counter.module.scss";

type Props = {};

export const Counter = (props: Props) => {
  const [value, setValue] = useState<number>(0);
  return (
    <div className={styles.main}>
      Counter {value}
      <button onClick={() => setValue(value + 1)}>Increase</button>
      <button onClick={() => setValue(value - 1)}>Decrease</button>
    </div>
  );
};
