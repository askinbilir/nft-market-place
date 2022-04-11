import { Download, Features, SectionWrapper } from "./components";

import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
	return (
		<>
			<SectionWrapper
				title="You own store of Nifty NFTs. Start Selling & Growing"
				description="Buy, store, collect NFTs exchange & earn crypto. 
        Join 25+ million people using ProNef Marketplace"
				showBtn
				mockupImg={assets.homeHero}
				banner="banner"
			/>

			<SectionWrapper
				title="Smart User Interface Marketplace"
				description="Experience a buttery UI of ProNef NFT MarketPlace. Smooth constant colors of fluent UI design."
				mockupImg={assets.homeCards}
				reverse
			/>

			<Features />

			<SectionWrapper
				title="Deployment"
				description="ProNef is built using Expo which runs natively on all users devices. You can easily get your app into people's hands."
				mockupImg={assets.feature}
				reverse
			/>

			<SectionWrapper
				title="Creative way to showcase the store"
				description="The app contains tow screens. The first screen lists all NFTs while the second one show the details of a specific NFT."
				mockupImg={assets.mockup}
				banner="banner02"
			/>

			<Download />

			<div className="px-4 py-2 bg-primary text-center banner04">
				<p className={`${styles.pText} ${styles.whiteText}`}>
					Coded by <span className="font-bold">Askin Bilir</span>
				</p>
        <p className={`${styles.pText} ${styles.whiteText}`}>
					Tutorialized by <span className="font-bold">JavaScript Mastery</span>
				</p>
			</div>
		</>
	);
};

export default App;
