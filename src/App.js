import './App.css';
import { Helmet } from "react-helmet";
import { useEffect } from 'react';

function App() {
  const openAppOrRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // For iOS devices
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // Try opening the app using Universal Link
      // window.location.href = "terra://open";  // Replace 'terra' with your actual app scheme

      // Fallback to App Store after 2 seconds if the app is not installed
      setTimeout(() => {
        window.location.href = "https://apps.apple.com/in/app/terra-world-of-arcade-games/id6450105686";
      }, 2000);

    // For Android devices
    } else if (/android/i.test(userAgent)) {
      // Try opening the app using the Intent URL
      // window.location.href = "intent://open#Intent;scheme=terra;package=com.terra.app;end"; // Replace with your app package

      // Fallback to Play Store after 2 seconds if the app is not installed
      setTimeout(() => {
        window.location.href = "https://play.google.com/store/search?q=terra&c=apps&hl=en";
      }, 2000);

    // For other devices, redirect to your website or a default URL
    } else {
      window.location.href = "https://your-website.com"; // Replace with your default website URL
    }
  };
  
  useEffect(()=>{
    openAppOrRedirect()
  },[])
  return (
    <div>
      <Helmet>
        <meta property="og:title" content="janaki" />
        <meta property="og:description" content="janaki-111" />
        <meta property="og:image" content="https://dxovcbhhspgz7.cloudfront.net/game-icons-mvp5/beam-battles-icon.png" />
        <meta property="og:url" content="https://client-webview-staging-b.letsterra.com/game/share" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Your Website Name" />
      </Helmet>
      <div className="flex items-center justify-center">
        <div className="font-bold text-5xl text-white">Hello</div>
        <button 
        className="bg-blue-500 text-white p-4 rounded"
        onClick={openAppOrRedirect}
      >
        Open App or Redirect
      </button>
      </div>
    </div>
  );
}

export default App;

