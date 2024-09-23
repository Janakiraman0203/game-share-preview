import { Helmet } from "react-helmet";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function GameShare() {
    const { id } = useParams()
    const [gameDetail, setGameDetails] = useState({})
    const openAppOrRedirect = () => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        return
        // For iOS devices
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            setTimeout(() => {
                window.location.href = "https://apps.apple.com/in/app/terra-by-terrabyte/id6450105686";
            }, 2000);
        } else if (/android/i.test(userAgent)) {
            setTimeout(() => {
                window.location.href = "https://play.google.com/store/apps/details?id=com.terrabyte.terra";
            }, 2000);
        } else {
              setTimeout(()=>{
                window.location.href = "https://play.google.com/store/apps/details?id=com.terrabyte.terra";
              },2000) 
        }
    };

    // useEffect(() => {
    //     openAppOrRedirect()
    // }, [])

    useEffect(() => {
        (async () => {
            const result = await fetch(`https://terra-staging.letsterra.com/game/share/id/${id}`, {
                method: 'GET',
                "Content-Type": "application/json",
            })
            const gameData = await result.json()
            console.log(gameData, 90909);
            setGameDetails(gameData)
        })()
    }, [id])
    return (
        <div>
            {gameDetail &&
                <div>
                    <Helmet>
                        <meta property="og:title" content={gameDetail?.gameName} />
                        <meta property="og:description" content={gameDetail?.gameDescription} />
                        <meta property="og:image" content={gameDetail?.gameIconURL}/>
                        {/* <meta property="og:url" content="https://client-webview-staging-b.letsterra.com/game/share" /> */}
                        <meta property="og:type" content="website" />
                        <meta property="og:site_name" content="Terra " />
                    </Helmet>
                    <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center space-x-4">
                    <img src={gameDetail?.gameIconURL} alt={`${gameDetail?.gameName} icon`} className="w-48 h-48 rounded" />
                    <h1 className="font-bold text-4xl">{gameDetail?.gameName}</h1>
                </div>

                <p className="text-xl text-gray-300 mt-4">{gameDetail?.gameDescription}</p>

                <div className="mt-8 grid grid-cols-2 gap-8 w-full max-w-4xl">
                    <div>
                        <h2 className="font-semibold text-2xl">Game Type</h2>
                        <p className="text-lg text-gray-300">{gameDetail?.gameType}</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-2xl">Genre</h2>
                        <p className="text-lg text-gray-300">{gameDetail?.genre}</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-2xl">Times Played</h2>
                        <p className="text-lg text-gray-300">{gameDetail?.timesPlayed}</p>
                    </div>
                </div>

                <button
                    className="bg-blue-500 text-white py-2 px-6 mt-8 rounded-md hover:bg-blue-600 transition"
                    onClick={openAppOrRedirect}
                >
                    Open App or Redirect
                </button>
            </div>
        </div>
                </div>}
        </div>
    );
}

export default GameShare;

