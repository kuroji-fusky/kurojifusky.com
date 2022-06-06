import { createContext } from "react";

export type ContextTypes = {
	disableParallax?: boolean;
	setDisableParallax?: any;
	animationsDisable?: boolean;
	setanimationsDisable?: any;
};

export const ParallaxDisable = createContext<ContextTypes>({
	disableParallax: false,
	setDisableParallax: () => {}
});

export const AnimationsDisable = createContext<ContextTypes>({
	animationsDisable: false,
	setanimationsDisable: () => {}
});
