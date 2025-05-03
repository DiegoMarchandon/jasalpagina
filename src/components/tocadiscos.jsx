// FUERA de la función Inicio:
// import './css/Tocadiscos.css';
import "./css/Tocadiscos2.css"; // Asegúrate de importar los estilos si tienes un archivo CSS separado

import { useState } from 'react'; 
function Tocadiscos() {
    const tracks = [
      "https://open.spotify.com/embed/track/2KrnN2pSnBdqpUwDla280S?utm_source=generator",
      "https://open.spotify.com/embed/track/75AJjnenUQz2AbhbhIfQ3d?utm_source=generator",
      "https://open.spotify.com/embed/track/6fTQVC2o7CWweKQC1xoEEI?utm_source=generator",
    ];

    const trackNames = [
        "Vacaciones",
        "Mijita, ¿Cuándo va a pololear?",
        "Mundo irreal",
      ];
    
    const [currentTrack, setCurrentTrack] = useState(0);
  
    const nextTrack = () => {
      setCurrentTrack((currentTrack + 1) % tracks.length);
    };
  
    const prevTrack = () => {
      setCurrentTrack((currentTrack - 1 + tracks.length) % tracks.length);
    };
  
    return (
    
    <div>
        <div className="vinilos-container">
            <div className="discos-container">
                {tracks.map((track, index) => (
                <div 
                key={index}
                className={`disco ${index === currentTrack ? "girando" : ""}`}
                onClick={() => setCurrentTrack(index)}
                >
                <p>{trackNames[index]}</p>
                </div>
            ))}
            </div>

            <iframe
            src={tracks[currentTrack]}
            width="300"
            height="80"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Canción actual"
            ></iframe>
        </div>    
        <div className="jukebox-container">
            {/* <p>parrafo</p> */}
            <div className="jukebox">
            <div className="base">
                <div className="notes">
                <svg id="note" width="34" height="34" viewBox="0 0 24 24">
                    <path d="M12,3V12.26C11.5,12.09 11,12 10.5,12C8,12 6,14 6,16.5C6,19 8,21 10.5,21C13,21 15,19 15,16.5V6H19V3H12Z" />
                </svg>
                <svg id="note1" width="34" height="34" viewBox="0 0 24 24">
                    <path d="M12,3V12.26C11.5,12.09 11,12 10.5,12C8,12 6,14 6,16.5C6,19 8,21 10.5,21C13,21 15,19 15,16.5V6H19V3H12Z" />
                </svg>
                <svg id="note2" width="34" height="34" viewBox="0 0 24 24">
                    <path d="M12,3V12.26C11.5,12.09 11,12 10.5,12C8,12 6,14 6,16.5C6,19 8,21 10.5,21C13,21 15,19 15,16.5V6H19V3H12Z" />
                </svg>
                <svg id="note3" width="34" height="34" viewBox="0 0 24 24">
                    <path d="M12,3V12.26C11.5,12.09 11,12 10.5,12C8,12 6,14 6,16.5C6,19 8,21 10.5,21C13,21 15,19 15,16.5V6H19V3H12Z" />
                </svg>
                </div>
                <div className="rside">
                <div className="detail" />
                <div className="detail1" />
                <div className="detail2" />
                <div className="rside1" />
                </div>
                <div className="lside">
                <div className="detail3" />
                <div className="detail4" />
                <div className="detail5" />
                <div className="trim" />
                <div className="trim1" />
                <div className="lside1" />
                </div>
                <div className="base1" />
            </div>
            <div className="jukebox1">
                <div className="que">
                <div className="tbar" />
                <div className="lbar" />
                <div className="lbar1" />
                <div className="lbar2" />
                <div className="lbar3" />
                <div className="lbar4" />
                <div className="lbar5" />
                <div className="eye" />
                <div className="eye1" />
                <div className="mouth" />
                <div className="que1">
                    <div className="speaker">
                    <div className="selection">
                        <div className="flip" />
                        <div className="flip1" />
                        <p>Queue</p>
                    </div>
                    <div className="coin">
                        <div className="coinhole" />
                        <p>COINS</p>
                    </div>
                    </div>
                </div>
                <div className="center">
                    <div className="center2">
                    <div className="center3">
                        <div className="star">
                        <svg id="cstare" style={{ width: "50px", height: "50px" }} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
                        </svg>
                        </div>
                        <div className="innerbar" />
                        <div className="innerbar1" />
                        <div className="innerbar2" />
                    </div>
                    </div>
                    <div className="center1" />
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
  }
export default Tocadiscos;  

