import React from 'react'
import {useRouter} from 'next/router'
import style from '../styles/Nav.module.css'
import Brightness2Icon from '@material-ui/icons/Brightness2';

const Nav = () => {
    
    const darkmode=() =>{
        document.body.style.background = "white"
        document.body.style.color = "black"

    }

    const Router = useRouter()

    return (
        <div className={style.navbar}>

            <div className={style.icon}>
                <img src="" alt="" srcset="https://www.flaticon.com/premium-icon/icons/svg/2644/2644746.svg"/>
            </div>

            <ul className={style.navflex}>
                <li onClick={() =>Router.push('/')}>Home</li>
                <li onClick={() =>Router.push('/feed/1')}>Global News</li>
                <li onClick={() =>Router.push('/')}>Indian News</li>
                <li onClick={() =>window.location.href='https://instagram.com/_bha_win'}>Contact us</li>

            </ul>
        </div>
    )
}

export default Nav
