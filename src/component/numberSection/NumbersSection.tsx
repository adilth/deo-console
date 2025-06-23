import { useEffect, useRef, useState } from "react";
import styles from "./NumbersSection.module.css";

const numbers = [
  { value: 20, label: "Ans D'expérience & <br/> D'expertise" },
  { value: 90000, label: "Collaborateurs <br/> Évalués" },
  { value: 200, label: "Structures <br/> Accompagnées" },
  { value: 1000, label: "Cadres & Dirigeants <br/> Coachés" },
  { value: 20000, label: "Collaborateurs <br/> Formés" },
];

function useCountUp(to: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    let start = 0;
    const step = Math.ceil(to / (duration / 16));
    function update() {
      start += step;
      if (start >= to) {
        setCount(to);
        if (ref.current) window.clearTimeout(ref.current);
        return;
      }
      setCount(start);
      ref.current = window.setTimeout(update, 16);
    }
    update();
    return () => {
      if (ref.current) window.clearTimeout(ref.current);
    };
  }, [to, duration]);
  return count;
}

const NumberItem = ({
  value,
  label,
  duration,
}: {
  value: number;
  label: string;
  duration: number;
}) => {
  const count = useCountUp(value, duration);
  return (
    <div className={styles.numberItem}>
      <div className={styles.value}>{count.toLocaleString()}</div>
      <div className={styles.label} dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  );
};

const NumbersSection = () => (
  <section className={styles.numbersSection}>
    {numbers.map((item, idx) => (
      <NumberItem
        key={item.label}
        value={item.value}
        label={item.label}
        duration={1800 + idx * 200}
      />
    ))}
  </section>
);

export default NumbersSection;
