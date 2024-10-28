// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import logo from '../assets/betakingweb/paginawweb-BLANCO.png'
import Steam from '../assets/betakingweb/boton-steam-WEB.png'
import Discord from '../assets/betakingweb/boton-discord-WEB.png'
import Twitter from '../assets/betakingweb/boton-twitter-WEB.png'
import Mail from '../assets/betakingweb/boton-mail-WEB.png'

import '../styles/Footer.css'

export function Footer(){

return(
    <footer>
        <a href="https://twitter.com/duelitegame" className='footerlink'><img src={Steam} className='footerimg'/></a>
        <a href="https://discord.gg/c46PUqhxqp" className='footerlink'><img src={Discord} className='footerimg'/></a>
        <a href="https://twitter.com/duelitegame" className='footerlink'><img src={Twitter} className='footerimg'/></a>
        <a href="mailto:betakingstudios@gmail.com" className='footerlink'><img src={Mail} className='footerimg'/></a>
    </footer>
)
}