import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
const defaultProps = {
	"className": "gradient",
	"margin": "0px 0px 0px 0px",
	"font": "bold 15px/21px --fontFamily-googleInter",
	"letter-spacing": "0.12em",
	"background": " linear-gradient(287.43deg, #774DFF 33.27%, #239EB9 61.72%, #D73E87 82.93%);",
	"text-transform": "uppercase",
	"color": "--white",
	"children": "Responsive. Pixel-Perfect. Code-Free."
};
const overrides = {};

const Masks = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Text {...rest}>
		{children}
	</Text>;
};

Object.assign(Masks, { ...Text,
	defaultProps,
	overrides
});
export default Masks;