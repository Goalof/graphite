import React from "react";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import { Text, Button, Box, Image, Hr } from "@quarkly/widgets";
import styled from "styled-components";
import atomize from "@quarkly/atomize";
const SLIDE_WIDTH = 240;
const slides = [{
	isDone: true,
	header: "Сustom domains",
	text: "Custom domains for your published web-sites"
}, {
	isDone: true,
	header: "Resize options",
	text: "Width and height for adaptive resizing"
}, {
	isDone: true,
	header: "Rectangle",
	text: "Square and round shapes for web-page layout"
}, {
	isDone: true,
	header: "Self-align",
	text: "Align every element within a container separately"
}, {
	isDone: true,
	header: "Animation",
	text: "Animate your web-page elements"
}, {
	isDone: true,
	header: "Templates",
	text: "Ready-to-go templates to give you a headstart"
}, {
	isDone: true,
	header: "Forms",
	text: "Collect and process data that customers submit via your web-site"
}, {
	header: "Section library",
	text: "Assemble web-pages in a flash using pre-made sections"
}, {
	header: "Animation improvements",
	text: "Cross-element interaction and new animation options"
}, {
	header: "Performance improvements",
	text: "An even faster and stronger version of the editor "
}, {
	header: "Tutorials",
	text: "A vast supply of learning materials to get you started with web design and our editor in no time"
}, {
	header: "Visual components",
	text: "Create reusable components made of one or multiple elements"
}, {
	header: "Headless CMS",
	text: "Integrate a headless CMS and enjoy full control of your web-site’s data flow"
}, {
	header: "Links",
	text: "A neat interface for adding various links"
}, {
	header: "Dashboard update",
	text: "Improved tools for sorting and managing your projects, as well as some extra options"
}]; // тут надо написать все возможные контейнеры

const DESKTOP_HD = '1280';
const Content = styled(Box)`
	--qtheme-carousel-margin-left: calc((100vw - ${DESKTOP_HD}px) / 2 - 25px);
	--qtheme-carousel-margin-right: calc((100vw - ${DESKTOP_HD}px) / 2 - 30px);

	&::-webkit-scrollbar {
		display: none;
	}
	
	-ms-overflow-style: none;
	scrollbar-width: none;
`;

const CarouselG = () => {
	const contentRef = React.useRef();
	React.useEffect(() => {
		if (contentRef.current) {
			const scrollOptions = {
				left: SLIDE_WIDTH * 7,
				// до 7го слайда
				top: 0
			};
			contentRef.current.scrollTo(scrollOptions);
		}
	}, [contentRef]);
	const handleScrollLeft = React.useCallback(() => {
		if (contentRef.current) {
			const scrollOptions = {
				left: contentRef.current.scrollLeft - SLIDE_WIDTH,
				top: 0,
				behavior: "smooth"
			};
			contentRef.current.scrollTo(scrollOptions);
		}
	}, []);
	const handleScrollRight = React.useCallback(() => {
		if (contentRef.current) {
			const scrollOptions = {
				left: contentRef.current.scrollLeft + SLIDE_WIDTH,
				top: 0,
				behavior: "smooth"
			};
			contentRef.current.scrollTo(scrollOptions);
		}
	}, []);
	return <Section position="relative" padding="120px 0 150px 0" background="--color-white">
		<Text
			margin="0px 0px 30px 0px"
			font="--decs"
			color="--blue"
			text-transform="uppercase"
			letter-spacing="1.8px"
		>
			 UPcOMING FeATURES 
		</Text>
		<Stack>
			<StackItem flex="1 1 auto">
				<Override slot="StackItemContent" align-items="center" justify-content="start" />
				<Text
					as="h3"
					margin="0px 0px 60px 0px"
					color="--background"
					letter-spacing="-0.01em"
					font="--headline25"
					md-font="--headline25"
					text-align="left"
				>
					Roadmap
				</Text>
			</StackItem>
			<StackItem>
				<Override slot="StackItemContent" align-items="center" />
				<Image
					onClick={handleScrollLeft}
					loading="lazy"
					margin="0px 0px 66px 0px"
					src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/leftbutton.svg?v=2021-05-14T08:00:02.435Z"
					width="48px"
					height="48px"
					margin-right="12px"
				/>
				<Image
					onClick={handleScrollRight}
					loading="lazy"
					margin="0px 0px 66px 0px"
					src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/rightbutton.svg?v=2021-05-14T08:00:02.435Z"
					width="48px"
					height="48px"
				/>
			</StackItem>
		</Stack>
		<Box
			display="flex"
			width="100vw"
			align-self="center"
			position="relative"
			justify-content="center"
		>
			<Content
				overflow-x="scroll"
				overflow-y="hidden"
				display="flex"
				position="relative"
				ref={contentRef}
			>
				<Box padding-left="--carousel-margin-left" padding-right="--carousel-margin-right" display="flex" min-width="auto">
					{slides.map(item => <Box
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						position="relative"
						margin="0 30px"
						width="180px"
					>
						{item.isDone && <Text
							position="absolute"
							top="0"
							left="0"
							margin="0px 0px 12px -8px"
							font="700 10px/15px PTRootUIWeb"
							letter-spacing="0.15em"
							color="--white"
							text-transform="uppercase"
							letter-spacing="0.12em"
							padding="3px 9px 3px 9px"
							background="#14CC86"
							border-radius="99px"
						>
							 Done 
						</Text>}
						<Text margin="36px 0px 0px -5px" color="--background" font="--menu">
							{item.header}
						</Text>
						<Text as="p" color="#7F8A9E" font="500 14px/18px PTRootUIWeb, sans-serif" margin="12px 0 60px -5px">
							{item.text}
						</Text>
						<Box
							transform="translate(-15px, 0) rotate(45deg)"
							margin="2px"
							background={item.isDone ? '#14CC86' : "#4870FF"}
							border-radius="5px"
							width="12px"
							height="12px"
							position="absolute"
							bottom="6px"
							z-index="2"
						/>
					</Box>)}
				</Box>
			</Content>
		</Box>
		<Hr
			position="absolute"
			z-index="1"
			left="0px"
			bottom="150px"
			background="linear-gradient(109.7deg, #D2DCE2 13.18%, #4870FF 86.82%)"
			height="2px"
			width="100%"
			padding="0px 0px 0px 0px"
			border-width="0px"
		/>
	</Section>;
};

export default atomize(CarouselG)({
	name: "CarouselG",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "CarouselG — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});