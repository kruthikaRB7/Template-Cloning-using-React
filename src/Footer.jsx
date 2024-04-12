import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'




function Footer() {
    return (
        <footer>
            <div className="bg-black text-white m-4 text-center pt-10 pb-4">
            
                <button className="bg-white text-black py-3 px-6 text-xl mt-16 mb-12"> <FontAwesomeIcon icon={faArrowUp} /> To the top</button>
                
                <div className="justify-center flex gap-1 text-lg">
                    <p>Powered by</p>
                    <p className="underline">w3.css</p>
                </div>
            </div>
        </footer >

    );
}
export default Footer;