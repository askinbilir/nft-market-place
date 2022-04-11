import React from "react";

import Button from "./Button";
import styles from "../styles/Global";
import assets from "../assets";

const SectionWrapper = ({
	title,
	description,
	showBtn,
	mockupImg,
	banner,
	reverse,
}) => {
	return (
		<div
			className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}
			${reverse ? styles.bgWhite : styles.bgPrimary}`}
		>
			<div
				className={`flex items-center w-11/12 sm:w-full minmd:w-3/4
				${reverse ? styles.boxReverseClass : styles.boxClass}
				${reverse ? styles.textRight : styles.textLeft}`}
			>
				<div
					className={`${styles.descDiv} 
					${reverse ? "fadeRightMini" : "fadeLeftMini"}`}
				>
					<h1
						className={`${styles.h1Text}
						${reverse ? styles.blackText : styles.whiteText}`}
					>
						{title}
					</h1>
					<p
						className={`${styles.descriptionText}
						${reverse ? styles.blackText : styles.whiteText}`}
					>
						{description}
					</p>
					{showBtn && (
						<Button assetUrl={assets.expo} link="https://expo.dev/@askinploud/nft-market-app?serviceType=classic&distribution=expo-go&releaseChannel=default" />
					)}
				</div>
				<div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
					<img
						src={mockupImg}
						alt="mockup"
						className={`${styles.sectionImg} 
						${reverse ? "fadeLeftMini" : "fadeRightMini"}`}
					/>
				</div>
			</div>
		</div>
	);
};

export default SectionWrapper;
