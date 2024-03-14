import style from './Buttons.module.css'

export default function Buttons({handleOnclick}) {
    const Buttonarr=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.','clr']
   
  return (
    <>
        <div className={style.buttonsContainer}>
        {Buttonarr.map(btn=><button key={btn} onClick={()=>handleOnclick(btn)} className={style.button}>{btn}</button>)}
         
      </div>
      </>
  )
}
