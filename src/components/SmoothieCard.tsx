import { Smoothie } from '../page/Home';

interface Props {
  smoothie: Smoothie;
}

export default function SmoothieCard({ smoothie }: Props) {
  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">{smoothie.rating}</div>
    </div>
  );
}
