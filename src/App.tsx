import { useEffect, useState } from 'react';
import './App.css'

export function App () {
    const [showMenu, setShowMenu] = useState(true);
    const [language, setLanguage] = useState("esp");

    useEffect(() => {
        const handleResize = () => {
            setShowMenu(window.innerWidth > 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleLanguageChange = (newLanguage:any) => {
        setLanguage(newLanguage);
    };

    return (
        <>
            <header className="header">
                <img alt="Betaking Studios" className="logo"  src="src/assets/placeholderTiny.png" />
                <div>
                <div className={`menu-toggle ${showMenu ? 'open' : 'close'}`} onClick={toggleMenu}>
                    <span />
                    <span />
                    <span />
                </div>
                <nav className={`menu ${showMenu ? 'show' : ''}`}>
                    <ul>
                        <li onClick={() => handleLanguageChange('es')}><img alt="Español" src="src/assets/Flag_of_Spain.svg" className='flagIcon'/></li>
                        <li onClick={() => handleLanguageChange('en')}><img alt="English" src="src/assets/Flag_of_the_United_Kingdom.svg" className='flagIcon'/></li>
                        <li onClick={() => handleLanguageChange('fr')}><img alt="Français" src="src/assets/Flag_of_France.svg" className='flagIcon'/></li>
                    </ul>
                </nav>
                </div>
            </header>

            <div className="gameContainer">
                <img alt="Duelite Logo" src="src/assets/placeholder.png" className="gameLogo"/>
            </div>
            <div className="descContainer">
                <img alt="Icon Duelite" src="public/jhony_coust.png" className="gameIcon"/>
                <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis, 
                    convallis nisl praesent facilisis malesuada class per dignissim duis, 
                    condimentum rhoncus at magnis ornare commodo suscipit. 
                    Porta eu mollis libero tellus nibh natoque etiam, 
                    scelerisque vitae nisi fringilla et dignissim, 
                    nec praesent faucibus ac laoreet ornare. 
                    Vivamus iaculis luctus natoque primis dui ligula fames accumsan taciti bibendum,
                    parturient conubia ultrices dictumst id pulvinar enim vulputate class massa, 
                    elementum etiam malesuada sem tincidunt netus phasellus felis dis.
                    <br /><br/>
                    Purus nam platea nulla ante libero feugiat et lacinia urna quisque
                    condimentum litora interdum potenti praesent,
                    magna rutrum tortor proin neque nisl molestie facilisis
                    bibendum faucibus justo netus accumsan etiam.
                    Ultricies class ridiculus sem fermentum egestas orci
                    aliquet suscipit integer, libero ligula velit non pellentesque
                    rutrum conubia tempus. Porta metus id montes imperdiet consequat
                    per facilisi cubilia quam cum commodo, ad vitae pretium fusce 
                    laoreet odio curae faucibus egestas ornare.
                </p>
            </div>

            <h2 className="wishlistText">Añade el juego a la lista de deseados:</h2>
            <div className="wishlistContainer">
                <a href="https://www.google.es">
                    <img alt="Wishlist on Steam" src="src/assets/wishlistSteam.png" className="wishlist"/>
                </a>
            </div>
        </>
    )
}