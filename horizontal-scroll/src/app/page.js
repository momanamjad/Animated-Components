'use client'
import style from "@/app/page.module.css";
import Horizontal from "@/components/Horizontal";
import { useScroll, useTransform ,motion} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger)
function Home() {
const wrapper = useRef()
const page_2 = useRef()
// const {x,y,x1,y1,x2,y2,x3,y3,x4,y4} = useControls({
//     x:{value:0 ,min:-300,max:300},
//     y:{value:0 ,min:-300,max:300},
//     x1:{value:0 ,min:-300,max:300},
//     y1:{value:0 ,min:-300,max:300},
//     x2:{value:0 ,min:-300,max:300},
//     y2:{value:0 ,min:-300,max:300},
//     x3:{value:0 ,min:-300,max:300},
//     y3:{value:0 ,min:-300,max:300},
//     x4:{value:0 ,min:-300,max:300},
//     y4:{value:0 ,min:-300,max:300},
// })
useEffect(()=>{
      const text = new SplitType('.text',{types:'chars'})
      const text1 = new SplitType('.text1',{types:'chars'})
      const chrs = text1.chars;


      gsap.set(chrs[0],{x:-210,y:-150}) //-210 //-150
      gsap.set(chrs[1],{x:-138,y:252}) //-138 //252
      gsap.set(chrs[2],{x:-300,y:96}) //-300 //96
      gsap.set(chrs[3],{x:-84,y:-222}) //-84 //-222
      gsap.set(chrs[4],{x:-150,y:-24}) //-150 //-24
       const ctx = gsap.context(()=>{
          gsap.from(text.chars,{
              y:"200%",
              stagger:{amount:2}
          })

        const TimeLine = gsap.timeline({
          scrollTrigger:{
            trigger:page_2.current,
            start:'top 50%',
            end:'bottom bottom',
            scrub:true,
            // markers:true
          }
        })
        TimeLine.to(chrs,{x:0,y:0,})
        
        
      })
      return () => ctx.revert()
  })

    const {scrollYProgress} = useScroll({
      target:wrapper
    })
    const yUp = useTransform(scrollYProgress,[0,1],[0,-400])
    const yUp1 = useTransform(scrollYProgress,[0,1],[0,900])
  return (
    <>
      <main ref={wrapper} className={style.home}>
        <div className={style.page_1}>
          <motion.h1 style={{y:yUp}} className="text-9xl text overflow-hidden y">Horizontal Scroll</motion.h1>
          <motion.h1 style={{y:yUp1}} className="text-9xl text overflow-hidden">Creative Dev</motion.h1>
        </div>
        <Horizontal />
        <div ref={page_2} className={style.page_2}>
          <h1 className="text-9xl text1">Horizontal Scroll</h1>
        </div>
      </main>
    </>
  );
}

export default Home;
