import style from './Display.module.css'
const Display=({calval})=>{
 return (
    <input className={style.display} type="text" value={calval} readOnly></input>
 )
}
export default Display;