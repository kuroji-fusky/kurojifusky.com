import Link from 'next/link';
import styles from '../styles/Layouts.module.scss';

interface IntroButtonsProps {
  title: string;
  link: string;
}

export default function IntroButtons({title, link}: IntroButtonsProps) {
  return (
    <Link href={`/${link}`}>
      <a
        id={styles.introBtn}
        className="h-[6.5rem] w-[6.5rem] relative bg-slate-300 rounded-lg grid place-items-center select-none"
      >
        <span>icon</span>
        <div className="absolute w-[6rem] flex justify-center translate-y-[5.5rem] p-1 bg-slate-400 rounded-md">
          <span>{title}</span>
        </div>
      </a>
    </Link>
  );
};
