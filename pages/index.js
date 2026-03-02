import dynamic from "next/dynamic";

const Clock = dynamic(() => import("../components/Clock"), { ssr: false });
const Currency = dynamic(() => import("../components/Currency"), { ssr: false });
const ShareDropdown = dynamic(() => import("../components/ShareDropdown"), { ssr: false });

import ArticleCard from "../components/ArticleCard";
import EmailCapture from "../components/EmailCapture";

export default function Home() {

  return (

    <main style={{
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px"
    }}>

      <Clock />

      <Currency />

      <ArticleCard
        title="Global Markets Surge in 2026"
        category="Finance"
        date="March 2, 2026"
        image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
      />

      <ShareDropdown />

      <EmailCapture />

    </main>

  );
}
