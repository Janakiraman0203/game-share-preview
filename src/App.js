import './App.css';
import { Helmet } from "react-helmet";

function App() {
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
      </div>
    </div>
  );
}

export default App;

