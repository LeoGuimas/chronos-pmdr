import styles from "./Home.module.css";
import { TimerIcon } from "lucide-react";

export function Home() {
  return (
    <div className={styles.home}>
      <button>
        <TimerIcon />
        <h1>Chronos</h1>
      </button>
    </div>
  );
}
