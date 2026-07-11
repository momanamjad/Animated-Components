'use client'
import style from '@/components/Main.module.css'
import Image from 'next/image';


const Card = ({data}) => {

    const {src,title} = data
   

  return (
    <main className={style.card_container}
     >
      <div className={style.img_wrapper}>
             <h2 className='text-xl'>{title}</h2>
            <Image src={src} width={450} height={100} alt='images'/>
      </div>
    </main>
  );
}

export default Card;
