// components/GameItem.tsx
import Image from 'next/image';
import styles from './styles/game.module.scss';


const GameItem  = ({ title, description, img }: { title: string, description: string, img: string }) => {

  return (
    <div className={styles['game-item']}>
      <div className={styles.content}>
        <Image src={img} alt={title} layout="responsive" width={300} height={300} className={styles.gameitemsimg} />
        <h2>{title}</h2>
        <div className={styles.line}></div> {/* Линия снизу */}
        <p>{description}</p>
        {/* <button className={styles['more-button']}>MORE</button> */}
      </div>
    </div>
  );
};

export default GameItem;
