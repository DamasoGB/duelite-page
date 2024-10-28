// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import logo from '../assets/betakingweb/paginawweb-BLANCO.webp'
import Steam from '../assets/betakingweb/boton-steam-WEB.webp'
import Discord from '../assets/betakingweb/boton-discord-WEB.webp'
import Twitter from '../assets/betakingweb/boton-twitter-WEB.webp'
import Mail from '../assets/betakingweb/boton-mail-WEB.webp'

import '../styles/Footer.css'

export function Footer(){

return(
    <footer>
        <a href="https://store.steampowered.com/curator/45097743" className='footerlink' aria-label="See what games have BetakingStudios done"><img src={Steam} className='footerimg' alt='Steam'/></a>
        <a href="https://discord.gg/c46PUqhxqp" className='footerlink' aria-label='Join the official Discord'><img src={Discord} className='footerimg' alt='Discord'/></a>
        <a href="https://twitter.com/duelitegame" className='footerlink' aria-label='See what BetakingStudios have posted on Twitter'><img src={Twitter} className='footerimg' alt='Twitter'/></a>
        <a href="mailto:betakingstudios@gmail.com" className='footerlink' aria-label='Contact us'><img src={Mail} className='footerimg' alt='Mail'/></a>
    </footer>
)
}