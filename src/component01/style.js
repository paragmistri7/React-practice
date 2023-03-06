import './style.css'
import style from './style01.module.css'

function Stylecompo() {
    return (
        <>
            <div className='box'>

                <h1>All css style type</h1>
                <br/>
                <h1 className='style1'>style type - 1</h1>
                <h1 style={{backgroundColor :"green" , color : "black"}}>style type - 2</h1>
                <h1 className={style.td}>style type - 3</h1>
            </div>
            
        </>
    )
}
export default Stylecompo