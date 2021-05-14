import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text, Hr, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Graphite — Create real sites
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/favicon.png?v=2021-05-13T15:36:21.485Z"} type={"image/x-icon"} />
			<meta name={"msapplication-TileColor"} content={"#020203"} />
		</Helmet>
		<Box padding="0px 0px 0px 0px" quarkly-title="Overview" background="--color-background url(https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/bgoverview.png?v=2021-05-14T12:10:19.303Z) 0/cover no-repeat scroll padding-box">
			<Box min-height="100vh">
				<Section padding="36px 0 36px 0" quarkly-title="Header" sm-padding="37px 0 37px 0" justify-content="center">
					<Override
						slot="SectionContent"
						max-width="1600px"
						hd-margin="0px 90px 0px 90px"
						lg-margin="0px 45px 0px 45px"
						md-margin="0px 30px 0px 30px"
						margin="0px 90px 0px 90px"
						flex-direction="row"
					/>
					<Box
						width="30%"
						display="flex"
						align-items="center"
						justify-content="flex-start"
						quarkly-title="logo-head"
						md-width="25%"
						sm-width="50%"
					>
						<Link
							href="/"
							display="flex"
							align-items="center"
							justify-content="center"
							quarkly-title="Logo"
						>
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Logo.svg?v=2021-05-05T10:20:19.531Z"
								width="136px"
								height="auto"
								quarkly-title="Logo-Image"
							/>
						</Link>
					</Box>
					<Box
						width="70%"
						display="flex"
						align-items="center"
						justify-content="flex-end"
						quarkly-title="menu-head"
						md-width="75%"
						sm-width="50%"
						sm-padding="0px 0px 0px 0px"
					>
						<Box
							quarkly-title="MobileMenu"
							display="none"
							sm-display="flex"
							sm-align-items="center"
							sm-justify-content="center"
							sm-margin="0px 0px 0px 0px"
						>
							<Components.MobileSide2
								flex="1 0 auto"
								lg-position="relative"
								lg-z-index="5"
								lg-display="flex"
								lg-justify-content="flex-end"
								lg-align-items="center"
								display="flex"
								align-items="center"
								justify-content="flex-end"
							>
								<Override
									slot="Content"
									display="flex"
									align-items="center"
									lg-position="fixed"
									lg-top={0}
									lg-left={0}
									lg-z-index="1"
									lg-width="100%"
									lg-height="100%"
									lg-background="white"
									lg-flex-direction="column"
									sm-background="--color-background"
								/>
								<Override
									slot="Button"
									display="none"
									lg-display="block"
									lg-width="44px"
									lg-height="28px"
									lg-position="relative"
									lg-z-index="6"
									md-margin="0px 0px 0px 0px"
									sm-width="38px"
								/>
								<Override
									slot="Button Line"
									lg-background="black"
									lg-min-height="4px"
									lg-position="absolute"
									sm-left="0px"
									sm-background="--color-snow"
								/>
								<Override
									slot="Button Line1"
									lg-width="44px"
									lg-top="0px"
									lg-right="0px"
									sm-border-radius="12px"
									sm-width="38px"
								/>
								<Override
									slot="Button Line2"
									lg-top="12px"
									lg-right="0px"
									sm-left="0px"
									sm-border-radius="12px"
									sm-width="29px"
								/>
								<Override
									slot="Button Line3"
									lg-top="24px"
									lg-right="0px"
									sm-border-radius="12px"
									sm-width="20px"
								/>
								<Override slot="Button Line1 :closed" lg-width="44px" />
								<Override slot="Button Line2 :closed" lg-width="32px" />
								<Override slot="Button Line3 :closed" lg-width="20px" />
								<Override slot="Button Line2 :open" lg-opacity="0" lg-width="32px" />
								<Override slot="Button Line1 :open" lg-width="36px" lg-transform="translateY(12px) rotate(225deg)" />
								<Override slot="Button Line3 :open" lg-width="36px" lg-transform="translateY(-12px) rotate(135deg)" md-margin="0px 0px 0px 0px" />
								<Override slot="Content :closed" lg-opacity="0" lg-transition="transform --transitionDuration-normal step-end 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" lg-transform="translateY(-100%)" />
								<Override slot="Content :open" lg-transform="translateY(0%)" lg-transition="transform --transitionDuration-normal step-start 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" lg-opacity="1" />
								<Override slot="Button :open" lg-position="fixed" md-margin="14px 0px 0px 0px" />
								<Box
									display="flex"
									align-items="center"
									justify-content="center"
									lg-flex-direction="column"
									lg-margin="80px 0px 0px 0px"
									lg-width="100%"
								>
									<Link href="#">
										Some text
									</Link>
								</Box>
							</Components.MobileSide2>
						</Box>
						<Box quarkly-title="Menu" display="flex" sm-display="none">
							<Link
								href="#"
								text-decoration-line="initial"
								font="--menu"
								color="--white"
								padding="6px 18px 6px 18px"
								margin="0px 6px 0px 6px"
								display="flex"
								align-items="center"
								justify-content="center"
								transition="color 0.3s ease 0s"
								hover-color="--blue"
							>
								Features
							</Link>
							<Link
								href="#"
								text-decoration-line="initial"
								font="--menu"
								color="--white"
								padding="6px 18px 6px 18px"
								margin="0px 6px 0px 6px"
								display="flex"
								align-items="center"
								justify-content="center"
								transition="color 0.3s ease 0s"
								hover-color="--blue"
							>
								About us
							</Link>
						</Box>
						<Box
							display="flex"
							quarkly-title="Button-Log"
							margin="0px 0px 0px 66px"
							md-margin="0px 0px 0px 20px"
							sm-display="none"
						>
							<Link
								href="/signup"
								text-decoration-line="initial"
								font="--menu"
								color="--white"
								padding="6px 18px 6px 18px"
								margin="0px 6px 0px 6px"
								display="flex"
								align-items="center"
								justify-content="center"
								transition="color 0.3s ease 0s"
								hover-color="--blue"
							>
								Log in
							</Link>
							<Link
								href="/signup"
								text-decoration-line="initial"
								font="--menu"
								color="--white"
								padding="6px 21px 6px 21px"
								margin="0px 0px 0px 6px"
								border-radius="99px"
								border-width="2px"
								border-style="solid"
								border-color="--color-blue"
								display="flex"
								align-items="center"
								justify-content="center"
								transition="background-color 0.3s ease 0s"
								hover-background="--color-blue"
							>
								Sign up
							</Link>
						</Box>
					</Box>
					{" "}
				</Section>
				<Section quarkly-title="HeroBlock" md-padding="60px 0 90px 0" justify-content="center">
					<Override
						slot="SectionContent"
						max-width="1600px"
						hd-width="100%"
						lg-margin="0px 0px 0px 45px"
						lg-padding="35px 0px 35px 0px"
						md-margin="0px 50px 0px 50px"
						md-background="none"
						md-padding="0px 0px 0px 0px"
						sm-margin="0px 30px 0px 30px"
						hd-max-width="1600px"
						margin="0px 90px 0px 90px"
					/>
					<Box margin="0px -15px 0px -15px" display="flex" quarkly-title="Row" justify-content="space-between">
						<Box
							display="flex"
							width="33.33333%"
							flex-direction="column"
							align-items="flex-start"
							justify-content="center"
							hd-width="40%"
							lg-width="45%"
							md-width="100%"
							md-align-items="center"
							md-margin="0px 0px 66px 0px"
							padding="0px 15px 0px 15px"
							box-sizing="border-box"
							quarkly-title="Col"
						>
							<Box
								display="flex"
								flex-direction="column"
								lg-margin="0px 50px 0px 0px"
								md-align-items="center"
								md-justify-content="center"
								md-margin="0px 60px 0px 60px"
								sm-margin="0px 0px 0px 0px"
								align-items="flex-start"
							>
								<Components.Masks
									as="h3"
									font="--decs"
									sm-text-align="center"
									sm-width="110%"
									sm-font="600 13px/21px &quot;Inter&quot;, sans-serif"
									letter-spacing="1.8px"
								/>
								<Text
									margin="30px 0px 0px 0px"
									font="normal 800 68px/72px --fontFamily-googleEpilogue"
									color="--white"
									as="h1"
									hd-width="100%"
									lg-font="normal 800 57px/61px &quot;Epilogue&quot;, sans-serif"
									md-text-align="center"
									md-font="normal 800 60px/66px &quot;Epilogue&quot;, sans-serif"
									letter-spacing=" -1%"
									sm-width="100%"
									sm-font="normal 800 35px/42px &quot;Epilogue&quot;, sans-serif"
								>
									Make web design feel like home
								</Text>
								<Text
									margin="12px 0px 0px 0px"
									font="--lead"
									color="--gray"
									md-text-align="center"
									sm-font="normal 400 20px/27px &quot;Inter&quot;, sans-serif"
									padding="0px 60px 0px 0px"
								>
									Use familiar graphic editor tools to create pixel-perfect Web Pages, and not just mockups. Focus on the creative part, and we'll take care of the rest.
								</Text>
							</Box>
							<Box display="flex" margin="54px 0px 0px 0px" quarkly-title="Buttons">
								<Link
									href="/signup"
									padding="9px 25px 9px 25px"
									font="--menu"
									text-decoration-line="initial"
									border-radius="99px"
									background="--color-orange"
									color="--background"
									margin="0px 18px 0px 0px"
									border-width="2px"
									border-style="solid"
									border-color="--color-orange"
									transition="background-color 0.3s ease 0s"
									hover-color="--background"
									sm-padding="9px 15px 9px 15px"
									hover-background="#F9DD6D"
									hover-border-color="#F9DD6D"
									active-background="#E59010"
									active-border-color="#E59010"
								>
									Try for free
								</Link>
								<Link
									href="#"
									padding="9px 25px 9px 25px"
									font="--menu"
									text-decoration-line="initial"
									border-radius="99px"
									margin="0px 0px 0px 0px"
									color="--gray"
									border-width="2px"
									border-style="solid"
									border-color="--color-space"
									transition="background-color 0.3s ease 0s"
									hover-background="--color-space"
									hover-color="--white"
									sm-padding="9px 15px 9px 15px"
								>
									Watch video
								</Link>
							</Box>
						</Box>
						<Box
							display="flex"
							width="50%"
							hd-width="60%"
							lg-width="55%"
							lg-justify-content="center"
							lg-align-items="center"
							md-width="100%"
							position="relative"
							padding="0px 15px 0px 15px"
							box-sizing="border-box"
							quarkly-title="Col"
						>
							<Box display="flex" align-items="center" justify-content="flex-end" width="100%">
								<Image
									width="812.737435546875px"
									height="657.5350341796875px"
									src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/figure.svg?v=2021-05-14T12:56:41.978Z"
									bottom="-97.3305341796875px"
									left="-207.925px"
									right="50.153564453125px"
									top="-46.2217px"
									position="absolute"
									quarkly-title="FigureSVG"
								/>
								<Box
									border-radius="8px"
									display="flex"
									align-items="center"
									justify-content="center"
									lg-min-height="400px"
									lg-box-shadow="none"
									lg-text-shadow="none"
									md-min-height="520px"
									hd-box-shadow="none"
									md-padding="5px 0px 5px 0px"
									md-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Figure.svg?v=2021-05-06T06:17:36.425Z) center center/contain no-repeat scroll padding-box"
									sm-min-height="250px"
									sm-padding="5px 0px 5px 0px"
									padding="24px 0px 24px 0px"
									hd-padding="74px 0px 74px 0px"
									lg-width="100%"
									lg-padding="84px 0px 84px 0px"
									md-align-items="center"
									md-justify-content="center"
									height="100%"
									max-width="1066px"
									min-height="600px"
									width="100%"
									position="absolute"
								>
									<Box
										box-shadow="0px 90px 240px 100px #000000"
										position="relative"
										height="0px"
										width="0px"
										min-width="0px"
										min-height="0px"
										left="100px"
										top="-13px"
									/>
									<Image
										md-width="100%"
										md-position="absolute"
										md-height="auto"
										md-border-radius="5px"
										md-display="inline-block"
										md-max-width="670px"
										md-min-height="420px"
										sm-min-height="205px"
										src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/editor%20depreceated.webp?v=2021-05-09T17:41:31.199Z"
										width="100%"
										height="auto"
										position="absolute"
										box-shadow=" 0 30px 60px 0 rgb(0 0 0 / 15%),0 20px 80px 20px rgb(0 0 0 / 5%)"
										lg-width="135%"
										lg-right="-35%"
										hd-width="110%"
										hd-right="-10%"
										md-right="auto"
										md-bottom="auto"
										md-top="auto"
										md-left="auto"
										sm-margin="0px 0px 0px 0px"
									/>
									<Components.PopUp
										position="relative"
										z-index="2"
										left="-20px"
										md-left="05px"
										md-top="-20px"
										md-right="auto"
										md-bottom="auto"
										sm-left="0px"
										sm-top="0px"
										top="-20px"
										hd-left="20px"
									>
										<Override
											slot="close"
											z-index="99999"
											top="20px"
											right="20px"
											bottom="auto"
											left="auto"
											size="50px"
											transition="transform 0.5s ease 0s"
											hover-transform="rotateZ(90deg)"
											transform="none"
										/>
										<Override
											slot="wrapper"
											width="80%"
											max-width="none"
											background="rgba(24, 28, 34, 0.98)"
											height="80%"
											position="fixed"
											z-index="99999"
										/>
										<Override
											slot="button"
											border-radius="12px"
											width="120px"
											height="120px"
											background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/shape.svg?v=2021-05-06T08:15:04.046Z)"
											padding="8px 11px 4px 24px"
											focus-box-shadow="none"
											transition="transform 0.5s ease 0s"
											lg-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/shape.svg?v=2021-05-06T08:15:04.046Z) 0% 0%/contain"
											lg-width="98px"
											lg-height="98px"
											lg-padding="8px 11px 4px 18px"
											transform="scale(1)"
											hover-transform="scale(1.15)"
										/>
										<Override slot="content" margin="0px 0px 0px 0px" z-index="9999" />
										<Override slot="popup" width="100%" />
										<Override slot="overlay" width="100%" />
										<Components.YouTubePlayer
											videoId="xpvE1ytltww"
											width="100%"
											src="https://www.youtube.com/watch?v=xpvE1ytltww"
											position="relative"
											z-index="99999999"
										/>
									</Components.PopUp>
								</Box>
								<Image
									src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/image%2033.png?v=2021-05-11T11:40:50.491Z"
									position="absolute"
									left="auto"
									right="0px"
									bottom="auto"
									top="101px"
									max-height="246px"
									height="228.08245849609375px"
									width="159.1468505859375px"
									object-position="100% 0%"
									z-index="1"
									hd-right="-130px"
									lg-right="-130px"
									lg-top="50px"
									md-right="-15px"
									sm-max-height="90px"
									sm-right="-20px"
									sm-top="60px"
									md-max-height="186px"
									md-top="110px"
								/>
								<Image
									src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/image%2035.png?v=2021-05-11T11:40:47.549Z"
									position="absolute"
									left="-40px"
									right="0px"
									bottom="auto"
									top="100px"
									lg-left="-30px"
									lg-width="144px"
									lg-height="306px"
									lg-top="70px"
									md-top="110px"
									sm-width="66px"
									sm-height="auto"
									sm-left="-10px"
									sm-top="60px"
									hd-left="-50px"
									hd-top="150px"
									max-height="400px"
								/>
							</Box>
						</Box>
					</Box>
					{" "}
				</Section>
			</Box>
			<Section
				quarkly-title="Steps"
				padding="120px 0 150px 0"
				lg-padding="90px 0 120px 0"
				md-padding="72px 0 108px 0"
				justify-content="center"
				background="rgba(0, 0, 0, 0.6)"
			>
				<Override
					slot="SectionContent"
					max-width="1600px"
					padding="0px 0px 0px 0px"
					lg-margin="0px 45px 0px 45px"
					md-align-items="center"
					md-justify-content="center"
					margin="0px 90px 0px 90px"
					md-margin="0px 30px 0px 30px"
				/>
				<Box
					display="flex"
					align-items="flex-start"
					justify-content="center"
					flex-wrap="wrap"
					margin="0px -15px 0px -15px"
					quarkly-title="Row"
				>
					<Box
						display="flex"
						width="33.333333%"
						flex-direction="column"
						align-items="flex-start"
						padding="0 15px 0 15px"
						justify-content="flex-start"
						quarkly-title="Col"
						md-width="50%"
						sm-width="100%"
						sm-margin="0px 0px 30px 0px"
						box-sizing="border-box"
						md-margin="0px 0px 60px 0px"
					>
						<Box
							display="flex"
							flex-direction="column"
							align-items="flex-start"
							margin="0px 60px 0px 0px"
							md-margin="0px 0px 0px 0px"
							md-text-align="center"
							md-align-items="center"
							md-justify-content="center"
						>
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/GemIcon.svg?v=2021-05-06T08:52:10.293Z"
								width="83px"
								height="83px"
								margin="0px 0px 0px -8px"
							/>
							<Text margin="40px 0px 0px 0px" font="--headline4" color="--white" as="h4">
								Design freedom
							</Text>
							<Text margin="12px 0px 0px 0px" font="--base" color="--gray">
								Customize the hell out of your responsive grid and switch between absolute and auto-layout positioning on the fly.
							</Text>
						</Box>
					</Box>
					<Box
						display="flex"
						width="33.333333%"
						flex-direction="column"
						align-items="flex-start"
						padding="0 15px 0 15px"
						justify-content="center"
						quarkly-title="Col"
						md-justify-content="flex-start"
						md-width="50%"
						md-margin="0px 0px 60px 0px"
						sm-width="100%"
						sm-margin="0px 0px 30px 0px"
						box-sizing="border-box"
					>
						<Box
							display="flex"
							flex-direction="column"
							align-items="flex-start"
							margin="0px 60px 0px 0px"
							md-margin="0px 0px 0px 0px"
							md-text-align="center"
							md-align-items="center"
							md-justify-content="center"
						>
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/GemIcon-1.svg?v=2021-05-08T07:51:05.642Z"
								width="83px"
								height="83px"
								margin="0px 0px 0px -8px"
							/>
							<Text margin="40px 0px 0px 0px" font="--headline4" color="--white" as="h4">
								Familiar tools
							</Text>
							<Text margin="12px 0px 0px 0px" font="--base" color="--gray">
								The comfort of graphic design tools and the power of modern frontend technologies – combined in one seamless experience.
							</Text>
						</Box>
					</Box>
					<Box
						display="flex"
						width="33.333333%"
						flex-direction="column"
						align-items="flex-start"
						padding="0 15px 0 15px"
						justify-content="center"
						quarkly-title="Col"
						md-justify-content="flex-start"
						md-width="50%"
						sm-width="100%"
						box-sizing="border-box"
					>
						<Box
							display="flex"
							flex-direction="column"
							align-items="flex-start"
							margin="0px 60px 0px 0px"
							md-margin="0px 0px 0px 0px"
							md-text-align="center"
							md-align-items="center"
							md-justify-content="center"
						>
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/GemIcon-2.svg?v=2021-05-08T07:51:12.825Z"
								width="83px"
								height="83px"
								margin="0px 0px 0px -5px"
							/>
							<Text margin="40px 0px 0px 0px" font="--headline4" color="--white" as="h4">
								Instant publishing
							</Text>
							<Text margin="12px 0px 0px 0px" font="--base" color="--gray">
								What would it take to transform your most daring design idea into a live web-page? One click and a couple of seconds.
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					display="flex"
					quarkly-title="Row"
					margin="180px -15px 0px -15px"
					lg-margin="120px -15px 0px -15px"
					md-flex-direction="column"
					md-align-items="center"
					sm-margin="96px -15px 0px -15px"
				>
					<Box
						display="flex"
						width="33.3%"
						flex-direction="column"
						align-items="flex-start"
						padding="0px 15px 0px 15px"
						justify-content="start"
						md-width="100%"
						box-sizing="border-box"
						quarkly-title="Col"
					>
						<Box
							display="flex"
							flex-direction="column"
							align-items="flex-start"
							margin="0px 60px 0px 0px"
							lg-margin="0px 0px 0px 0px"
							md-align-items="center"
							md-justify-content="center"
							md-padding="0px 60px 0px 60px"
							md-flex-wrap="wrap"
							sm-padding="0px 0px 0px 0px"
						>
							<Text
								margin="0px 0px 0px 0px"
								font="--headline3"
								color="--white"
								as="h4"
								md-text-align="center"
								md-width="66.6666%"
								sm-width="100%"
							>
								Only 3 steps standing between you and your best web-page yet
							</Text>
						</Box>
					</Box>
					<Box
						width="66.66666%"
						display="flex"
						quarkly-title="Col"
						position="relative"
						md-width="100%"
						md-margin="30px -15px 0px -15px"
						md-text-align="center"
						sm-flex-wrap="wrap"
						box-sizing="border-box"
						padding="0px 15px 0px 15px"
						md-padding="0px 0px 0px 0"
					>
						<Box
							display="flex"
							width="33.33%"
							flex-direction="column"
							align-items="stretch"
							justify-content="flex-start"
							hd-width="40%"
							sm-width="100%"
							sm-margin="0px 0px 30px 0px"
							sm-align-items="center"
							sm-justify-content="center"
							position="relative"
							box-sizing="border-box"
							padding="0px 10px 0px 0px"
							quarkly-title="Step"
							md-padding="0 15px 0 15px"
						>
							<Hr
								height="1px"
								padding="0px 0px 0px 0px"
								background="#4A5060"
								border-color="#4A5060"
								position="absolute"
								left="50px"
								right="18px"
								z-index="1"
								sm-display="none"
								md-left="100%"
								md-width="60%"
								md-margin="16px 0px 16px -30%"
								border-width={0}
								top="4px"
							/>
							<Box
								display="flex"
								flex-direction="column"
								align-items="stretch"
								md-align-items="center"
								sm-margin="0px 0px 0px 0px"
								sm-padding="0px 25px 0px 25px"
							>
								<Text margin="0px 0px 0px 0px" font="--headline3" color="--white" as="h4">
									1
								</Text>
								<Text
									margin="18px 60px 0px 0px"
									font="--lead"
									color="--gray"
									md-text-align="center"
									md-margin="18px 0px 0px 0px"
									lg-margin="18px 30px 0px 0px"
								>
									Pick a template or start from scratch
								</Text>
							</Box>
						</Box>
						<Box
							display="flex"
							width="33.33%"
							flex-direction="column"
							align-items="stretch"
							justify-content="flex-start"
							hd-width="40%"
							sm-width="100%"
							sm-margin="0px 0px 30px 0px"
							sm-align-items="center"
							sm-justify-content="center"
							position="relative"
							box-sizing="border-box"
							padding="0px 10px 0px 10px"
							quarkly-title="Step"
							md-padding="0 15px 0 15px"
						>
							<Hr
								height="1px"
								padding="0px 0px 0px 0px"
								background="#4A5060"
								border-color="#4A5060"
								position="absolute"
								left="50px"
								right="18px"
								z-index="1"
								sm-display="none"
								md-left="100%"
								md-margin="16px 0px 16px -30%"
								md-width="60%"
								top="4px"
								border-width={0}
							/>
							<Box
								display="flex"
								flex-direction="column"
								align-items="stretch"
								md-align-items="center"
								sm-margin="0px 0px 0px 0px"
								sm-padding="0px 25px 0px 25px"
							>
								<Text margin="0px 0px 0px 0px" font="--headline3" color="--white" as="h4">
									2
								</Text>
								<Text
									margin="18px 60px 0px 0px"
									font="--lead"
									color="--gray"
									md-text-align="center"
									md-margin="18px 0px 0px 0px"
									lg-margin="18px 30px 0px 0px"
								>
									Use familiar tools to design a web-page
								</Text>
							</Box>
						</Box>
						<Box
							display="flex"
							width="33.33%"
							flex-direction="column"
							align-items="stretch"
							justify-content="flex-start"
							hd-width="40%"
							sm-width="100%"
							sm-margin="0px 0px 30px 0px"
							sm-align-items="center"
							sm-justify-content="center"
							box-sizing="border-box"
							padding="0px 10px 0px 10px"
							quarkly-title="Step"
							md-padding="0 15px 0 15px"
						>
							<Box
								display="flex"
								flex-direction="column"
								align-items="stretch"
								md-align-items="center"
								sm-margin="0px 0px 0px 0px"
								sm-padding="0px 25px 0px 25px"
							>
								<Text margin="0px 0px 0px 0px" font="--headline3" color="--white" as="h4">
									3
								</Text>
								<Text
									margin="18px 60px 0px 0px"
									font="--lead"
									color="--gray"
									md-text-align="center"
									md-margin="18px 0px 0px 0px"
									lg-margin="18px 30px 0px 0px"
								>
									Publish your web-page in one click
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
				<Link
					href="/signup"
					padding="9px 25px 9px 25px"
					font="--menu"
					text-decoration-line="initial"
					border-radius="99px"
					background="--color-orange"
					color="--background"
					margin="60px 0px 0px 0px"
					border-width="2px"
					border-style="solid"
					border-color="--color-orange"
					transition="background-color 0.3s ease 0s"
					hover-color="--background"
					md-text-align="center"
					md-margin="60px auto 0px auto"
					sm-margin="24px auto 0px auto"
					align-self="flex-start"
					hover-background="#F9DD6D"
					hover-border-color="#F9DD6D"
					active-background="#E59010"
					active-border-color="#E59010"
				>
					Get started
				</Link>
				{" "}
			</Section>
		</Box>
		<Section
			quarkly-title="Hybrid"
			padding="120px 0 150px 0"
			background="url(https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/hightlight.png?v=2021-05-11T10:59:30.750Z) left center/cover no-repeat,--color-white"
			lg-padding="120px 0 90px 0"
			sm-padding="72px 0 72px 0"
			md-padding="72px 0 150px 0"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				max-width="1600px"
				hd-max-width="1600px"
				lg-margin="0px 45px 0px 45px"
				md-margin="0px 30px 0px 30px"
				margin="0px 90px 0px 90px"
			/>
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				align-items="stretch"
				padding="0px 0px 0px 0px"
				justify-content="center"
			>
				<Box
					display="flex"
					flex-direction="column"
					align-items="stretch"
					sm-margin="0px 0px 0px 0px"
					width="75%"
					md-width="100%"
				>
					<Text
						margin="0px 0px 0px 0px"
						font="--decs"
						color="--blue"
						text-transform="uppercase"
						letter-spacing="1.8px"
					>
						Top feature
					</Text>
					<Text
						margin="36px 0px 120px 0px"
						font="normal 800 84px/90px &quot;Epilogue&quot;, sans-serif"
						color="--background"
						as="h1"
						letter-spacing="-0.01em"
						lg-font="normal 800 71px/76px &quot;Epilogue&quot;, sans-serif"
						md-font="normal 800 60px/66px &quot;Epilogue&quot;, sans-serif"
						md-margin="36px 0px 60px 0px"
						sm-font="normal 800 50px/57px &quot;Epilogue&quot;, sans-serif"
						md-width="100%"
						hd-width="80%"
					>
						The ultimate web{" "}
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							sm-display="none"
						>
							{" "}
							<br />
						</Span>
						design experience
					</Text>
				</Box>
			</Box>
			<Box
				quarkly-title="Row"
				display="flex"
				margin="0px -15px 0px -15px"
				justify-content="space-between"
				md-flex-direction="column"
				md-align-items="stretch"
				md-justify-content="flex-start"
			>
				<Box
					display="flex"
					width="33.3333%"
					flex-direction="column"
					padding="0px 15px 0px 15px"
					md-margin="0px 0px 72px 0px"
					quarkly-title="Col"
					align-items="stretch"
					md-width="auto"
					box-sizing="border-box"
				>
					<Text
						margin="0px 0px 24px 0px"
						font="--hero3"
						color="--background"
						as="h1"
						letter-spacing="-0.01em"
						sm-font="normal 800 35px/42px &quot;Epilogue&quot;, sans-serif"
					>
						Hybrid grid
					</Text>
					<Text font="--lead" color="#3C3F4F" md-width="100%" margin="0 0px 42px 0px">
						Get the best out of both worlds: switch between absolute and grid-based positioning on the fly, or combine them in one workspace with the extremely versatile Hybrid Grid technology.
					</Text>
					<Box
						display="flex"
						flex-wrap="wrap"
						md-flex-wrap="nowrap"
						sm-flex-wrap="nowrap"
						margin="0px -15px 0px -15px"
						box-sizing="border-box"
						quarkly-title="Row"
						sm-flex-direction="column"
					>
						<Box
							quarkly-title="Col"
							padding="0px 15px 0px 15px"
							width="50%"
							display="flex"
							flex-direction="row"
							align-items="stretch"
							box-sizing="border-box"
							sm-width="auto"
						>
							<Box
								display="flex"
								background="--color-snow"
								border-radius="6px"
								box-shadow="0px 14px 36px rgba(0, 0, 0, 0.03), 0px 30px 60px rgba(0, 0, 0, 0.02)"
								padding="15px 15px 12px 15px"
								flex-direction="column"
								md-width="100%"
								sm-margin="0px 0px 36px 0px"
								box-sizing="border-box"
								quarkly-title="Card"
								margin="0px 0px 24px 0px"
								width="100%"
								justify-content="space-between"
								sm-padding="0 0 0 0"
								sm-background="transparent"
								sm-box-shadow="none"
							>
								<Image loading="lazy" src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Icon.svg?v=2021-05-06T18:59:57.227Z" width="24px" height="24px" />
								<Text margin="15px 0px 0px 0px" font="--footer" color="--spaceGray">
									Fully customizable
								</Text>
							</Box>
						</Box>
						<Box
							quarkly-title="Col"
							padding="0px 15px 0px 15px"
							width="50%"
							display="flex"
							flex-direction="row"
							align-items="stretch"
							box-sizing="border-box"
							sm-width="auto"
						>
							<Box
								display="flex"
								background="--color-snow"
								border-radius="6px"
								box-shadow="0px 14px 36px rgba(0, 0, 0, 0.03), 0px 30px 60px rgba(0, 0, 0, 0.02)"
								padding="15px 15px 12px 15px"
								flex-direction="column"
								md-width="100%"
								sm-margin="0px 0px 36px 0px"
								box-sizing="border-box"
								quarkly-title="Card"
								margin="0px 0px 24px 0px"
								width="100%"
								justify-content="space-between"
								sm-padding="0 0 0 0"
								sm-background="transparent"
								sm-box-shadow="none"
							>
								<Image loading="lazy" src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Icon1.svg?v=2021-05-06T19:04:41.145Z" width="24px" height="24px" />
								<Text margin="15px 0px 0px 0px" font="--footer" color="--spaceGray">
									Precise and consistent
								</Text>
							</Box>
						</Box>
						<Box
							quarkly-title="Col"
							padding="0px 15px 0px 15px"
							width="50%"
							display="flex"
							flex-direction="row"
							align-items="stretch"
							box-sizing="border-box"
							sm-width="auto"
						>
							<Box
								display="flex"
								background="--color-snow"
								border-radius="6px"
								box-shadow="0px 14px 36px rgba(0, 0, 0, 0.03), 0px 30px 60px rgba(0, 0, 0, 0.02)"
								padding="15px 15px 12px 15px"
								flex-direction="column"
								md-width="100%"
								box-sizing="border-box"
								quarkly-title="Card"
								margin="0px 0px 24px 0px"
								width="100%"
								justify-content="space-between"
								sm-padding="0 0 0 0"
								sm-background="transparent"
								sm-box-shadow="none"
							>
								<Image loading="lazy" src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Icon2.svg?v=2021-05-06T19:04:51.315Z" width="24px" height="24px" />
								<Text margin="15px 0px 0px 0px" font="--footer" color="--spaceGray">
									Responsive by design
								</Text>
							</Box>
						</Box>
					</Box>
					<Box display="flex" margin="64px 0px 0px 0px" quarkly-title="Buttons" md-margin="48px 0px 0px 0px">
						<Link
							href="/signup"
							padding="9px 23px 9px 23px"
							font="--menu"
							text-decoration-line="initial"
							border-radius="99px"
							background="--color-orange"
							color="--background"
							margin="0px 0px 0px 0px"
							border-width="2px"
							border-style="solid"
							border-color="--color-orange"
							transition="background-color 0.3s ease 0s"
							hover-color="--background"
							hover-background="#F9DD6D"
							hover-border-color="#F9DD6D"
							active-background="#E59010"
							active-border-color="#E59010"
						>
							Try it today
						</Link>
					</Box>
				</Box>
				<Box
					display="flex"
					width="58.3333%"
					position="relative"
					align-items="flex-start"
					justify-content="flex-end"
					md-width="100%"
					box-sizing="border-box"
					padding="0px 15px 0px 15px"
					quarkly-title="Col"
				>
					<Image
						src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Video-min.webp?v=2021-05-08T16:00:56.889Z"
						left="auto"
						right="0px"
						bottom="auto"
						top="100px"
						height="auto"
						width="100%"
						z-index="1"
						border-radius="8px"
					/>
					<Image
						src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Panel.png?v=2021-05-11T11:41:45.948Z"
						position="absolute"
						right="-1.71875px"
						bottom="300.515625px"
						top="-48px"
						z-index="2"
						hd-top="-40px"
						hd-left="-90px"
						md-display="none"
						max-height="337px"
						left="-69px"
						height="307.484375px"
						width="220.29675px"
						hd-bottom="271px"
						hd-height="337px"
						hd-right="-137.95303125000004px"
						hd-width="314.50403125px"
					/>
				</Box>
			</Box>
			{" "}
		</Section>
		<Section
			quarkly-title="Top feature"
			padding="120px 0 215px 0"
			background="--color-black"
			lg-padding="120px 0 120px 0"
			md-padding="72px 0 95px 0"
			sm-padding="72px 0 72px 0"
			display="none"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				hd-margin="0px 90px 0px 90px"
				max-width="1600px"
				width="100%"
				padding="0px 0px 0px 0px"
				hd-width="100%"
				hd-max-width="1600px"
				hd-flex-wrap="wrap"
				lg-margin="0px 45px 0px 45px"
				md-margin="0px 30px 0px 30px"
				margin="0px 90px 0px 90px"
			/>
			<Box
				display="flex"
				width="35%"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 0px 0px 0px"
				justify-content="flex-start"
				hd-width="40%"
				lg-width="40%"
				md-width="100%"
			>
				<Box padding="0px 0px 0px 0px" display="flex" flex-direction="column">
					<Box display="flex" flex-direction="column" align-items="flex-start" margin="0px 0px 0px 0px">
						<Text
							margin="0px 0px 0px 0px"
							font="--decs"
							color="--blue"
							text-transform="uppercase"
							letter-spacing="1.2px"
						>
							Features
						</Text>
					</Box>
					<Box
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						margin="0px 0px 0px 0px"
						position="relative"
					>
						<Box
							display="flex"
							margin="60px 0px 0px 0px"
							width="130%"
							position="relative"
							z-index="2"
							align-items="center"
							lg-width="140%"
							md-width="100%"
						>
							<Image
								loading="lazy"
								width="62px"
								height="62px"
								src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/colors.svg?v=2021-05-06T19:28:32.611Z"
								margin="-10px 0px 0px 0px"
								sm-display="none"
							/>
							<Text
								margin="0px 0px 0px 40px"
								font="--features"
								color="--white"
								as="h1"
								letter-spacing="-0.01em"
								width="100%"
								hd-font="700 68px/72px &quot;Epilogue&quot;, sans-serif"
								lg-font="700 57px/60px &quot;Epilogue&quot;, sans-serif"
								md-font="700 60px/66px &quot;Epilogue&quot;, sans-serif"
								sm-font="700 35px/42px &quot;Epilogue&quot;, sans-serif"
								sm-margin="0px 0px 0px 0px"
							>
								Design system
							</Text>
						</Box>
						<Text
							margin="24px 0px 0px 0px"
							font="--features"
							color="--gray"
							as="h1"
							letter-spacing="-0.01em"
							width="100%"
							hd-font="700 68px/72px &quot;Epilogue&quot;, sans-serif"
							lg-font="700 57px/60px &quot;Epilogue&quot;, sans-serif"
							md-font="700 60px/66px &quot;Epilogue&quot;, sans-serif"
							sm-font="700 35px/42px &quot;Epilogue&quot;, sans-serif"
						>
							Animation
						</Text>
						<Text
							margin="24px 0px 0px 0px"
							font="--features"
							color="--gray"
							as="h1"
							letter-spacing="-0.01em"
							width="100%"
							hd-font="700 68px/72px &quot;Epilogue&quot;, sans-serif"
							lg-font="700 57px/60px &quot;Epilogue&quot;, sans-serif"
							md-font="700 60px/66px &quot;Epilogue&quot;, sans-serif"
							sm-font="700 35px/42px &quot;Epilogue&quot;, sans-serif"
						>
							Components
						</Text>
						<Text
							margin="24px 0px 0px 0px"
							font="--features"
							color="--gray"
							as="h1"
							letter-spacing="-0.01em"
							width="100%"
							hd-font="700 68px/72px &quot;Epilogue&quot;, sans-serif"
							lg-font="700 57px/60px &quot;Epilogue&quot;, sans-serif"
							md-font="700 60px/66px &quot;Epilogue&quot;, sans-serif"
							sm-font="700 35px/42px &quot;Epilogue&quot;, sans-serif"
						>
							Publishing
						</Text>
						<Box display="flex" margin="120px 0px 0px 0px" quarkly-title="Buttons" md-margin="30px 0px 76px 0px">
							<Link
								href="/signup"
								padding="9px 25px 9px 25px"
								font="--menu"
								text-decoration-line="initial"
								border-radius="99px"
								background="--color-orange"
								color="--background"
								margin="0px 0px 0px 0px"
								border-width="2px"
								border-style="solid"
								border-color="--color-orange"
								transition="background-color 0.3s ease 0s"
								hover-background="transparent"
								hover-color="--orange"
							>
								Try it today
							</Link>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				display="flex"
				width="65%"
				position="relative"
				align-items="flex-start"
				justify-content="flex-start"
				hd-width="60%"
				flex-direction="column"
				lg-width="60%"
				md-width="100%"
			>
				<Image
					src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Video1.webp?v=2021-05-08T16:01:07.948Z"
					left="auto"
					right="0px"
					bottom="auto"
					top="100px"
					height="auto"
					width="100%"
					object-position="100% 0%"
					z-index="1"
					border-radius="8px"
				/>
				<Text margin="24px 0px 0px 0px" font="--lead" color="#7F8A9E">
					Create custom presets and introduce changes across multiple projects at any scale necessary.
				</Text>
			</Box>
			{" "}
		</Section>
		<Section
			quarkly-title="Features"
			padding="120px 0 210px 0"
			background="--color-black"
			lg-padding="120px 0 120px 0"
			md-padding="72px 0 95px 0"
			sm-padding="72px 0 72px 0"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				max-width="1600px"
				lg-margin="0px 45px 0px 45px"
				md-margin="0px 30px 0px 30px"
				margin="0px 90px 0px 90px"
			/>
			<Box display="flex" flex-direction="column" md-width="100%">
				<Box padding="0px 0px 0px 0px" display="flex" flex-direction="column">
					<Box
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						margin="0px 0px 0px 0px"
						position="relative"
					>
						<Box display="flex" flex-direction="column" align-items="flex-start" margin="0px 0px -21px 0px">
							<Text
								margin="0px 0px 0px 0px"
								font="--decs"
								color="--blueLight"
								text-transform="uppercase"
								letter-spacing="1.8px"
							>
								Features
							</Text>
						</Box>
						<Components.Tabs defaultTab="one" width="100%" display="flex" md-flex-direction="column">
							<Override
								slot="Tablist"
								flex-direction="column"
								width="40%"
								position="relative"
								z-index="2"
								md-width="100%"
							/>
							<Override
								slot="TabPanels"
								padding="0px 0px 0px 20px"
								width="60%"
								md-width="100%"
								md-order="0"
								md-padding="0px 0px 0px 0px"
							/>
							<Override
								slot="Tab"
								letter-spacing="-0.01em"
								font="--features"
								background="transparent"
								text-align="left"
								padding="12px 0px 12px 0px"
								color="--gray"
								width="130%"
								margin="0px 0px 0px 0px"
								hd-width="130%"
								hd-font="700 68px/72px &quot;Epilogue&quot;, sans-serif"
								lg-font="800 57px/60px &quot;Epilogue&quot;, sans-serif"
								lg-width="140%"
								md-width="100%"
								md-font="700 60px/66px &quot;Epilogue&quot;, sans-serif"
								sm-font="700 35px/42px &quot;Epilogue&quot;, sans-serif"
								focus-box-shadow="none"
								transform="translateX(0px)"
								transition="transform 0.5s ease 0s"
								hover-transform="translateX(40px)"
							/>
							<Override slot="Tab two">
								Animation
							</Override>
							<Override slot="Tab one" margin="80px 0px 0px 0px">
								Design system
							</Override>
							<Override slot="Tab :active" color="--white" transform="translateX(40px)" />
							<Override slot="Tab three">
								Components
							</Override>
							<Override slot="Tab four">
								Publishing
							</Override>
							<Components.Tab
								tabId="one"
								min-height="850px"
								position="absolute"
								right="0px"
								top="0px"
								left="auto"
								bottom="auto"
								width="65%"
								md-width="50%"
								sm-position="static"
								sm-width="100%"
								sm-min-height="none"
								sm-margin="20px 0px 0px 0px"
								md-min-height="400px"
							>
								<Box
									display="flex"
									width="100%"
									position="sticky"
									justify-content="flex-start"
									flex-direction="column"
									md-width="100%"
									top="0px"
									right="0px"
									bottom="0px"
									sm-width="100%"
								>
									<Image
										src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Video1.webp?v=2021-05-08T16:01:07.948Z"
										left="auto"
										right="0px"
										bottom="auto"
										top="100px"
										height="auto"
										width="100%"
										object-position="100% 0%"
										z-index="1"
										border-radius="8px"
									/>
									<Text margin="24px 0px 0px 0px" font="--lead" color="#7F8A9E">
										Create custom presets and introduce changes across multiple projects at any scale necessary.
									</Text>
								</Box>
							</Components.Tab>
							<Components.Tab
								tabId="two"
								min-height="850px"
								position="absolute"
								top="0px"
								right="0px"
								width="65%"
								md-width="50%"
								sm-position="static"
								sm-width="100%"
								sm-min-height="none"
								sm-margin="20px 0px 0px 0px"
								md-min-height="400px"
							>
								<Box
									display="flex"
									width="100%"
									position="sticky"
									align-items="flex-start"
									justify-content="flex-start"
									flex-direction="column"
									md-width="100%"
									top="0px"
									right="0px"
									bottom="0px"
									sm-width="100%"
								>
									<Image
										src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Video-min.webp?v=2021-05-08T16:00:56.889Z"
										left="auto"
										right="0px"
										bottom="auto"
										top="100px"
										height="auto"
										width="100%"
										object-position="100% 0%"
										z-index="1"
										border-radius="8px"
									/>
									<Text margin="24px 0px 0px 0px" font="--lead" color="#7F8A9E">
										Breathe some life into your web-page with stylish, professional-grade animations
									</Text>
								</Box>
							</Components.Tab>
							<Components.Tab
								tabId="three"
								position="absolute"
								min-height="850px"
								top="0px"
								right="0px"
								width="65%"
								md-width="50%"
								sm-position="static"
								sm-width="100%"
								sm-min-height="none"
								sm-margin="20px 0px 0px 0px"
								md-min-height="400px"
							>
								<Box
									display="flex"
									width="100%"
									position="sticky"
									align-items="flex-start"
									justify-content="flex-start"
									flex-direction="column"
									md-width="100%"
									height="100%"
									top="0px"
									right="0px"
									bottom="0px"
									sm-width="100%"
								>
									<Text
										margin="0px 0px 27px 0px"
										font="500 15px/21px --fontFamily-googleInter"
										color="--white"
										text-transform="uppercase"
										letter-spacing="0.12em"
										padding="3px 9px 3px 9px"
										background="#4870FF"
										border-radius="99px"
									>
										Coming soon
									</Text>
									<Image
										src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Video-4.png?v=2021-05-11T17:56:31.040Z"
										left="auto"
										right="0px"
										bottom="auto"
										top="100px"
										height="auto"
										width="100%"
										object-position="100% 0%"
										z-index="1"
										border-radius="8px"
									/>
									<Text margin="24px 0px 0px 0px" font="--lead" color="#7F8A9E">
										Pack your brightest ideas in custom components for future reuse and improvement.
										<br />
									</Text>
								</Box>
							</Components.Tab>
							<Components.Tab
								tabId="four"
								min-height="850px"
								position="absolute"
								top="0px"
								right="0px"
								width="65%"
								md-width="50%"
								sm-position="static"
								sm-width="100%"
								sm-min-height="none"
								sm-margin="20px 0px 0px 0px"
								md-min-height="400px"
							>
								<Box
									display="flex"
									width="100%"
									position="sticky"
									align-items="flex-start"
									justify-content="center"
									flex-direction="column"
									md-width="100%"
									top="0px"
									right="0px"
									bottom="0px"
									sm-width="100%"
									height="100%"
								>
									<Image
										src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Video-5.png?v=2021-05-11T17:57:03.603Z"
										left="auto"
										right="0px"
										bottom="auto"
										top="100px"
										height="auto"
										width="100%"
										object-position="100% 0%"
										z-index="1"
										border-radius="8px"
										margin="0px 0px 0px 0px"
									/>
									<Text margin="24px 0px 0px 0px" font="--lead" color="#7F8A9E">
										Instantly launch your design ideas into the Web – all it costs is one click.
									</Text>
								</Box>
							</Components.Tab>
						</Components.Tabs>
						<Box display="flex" margin="0px 0px 0px 0px" quarkly-title="Buttons" md-margin="30px 0px 76px 0px">
							<Link
								href="/signup"
								padding="9px 23px 9px 23px"
								font="--menu"
								text-decoration-line="initial"
								border-radius="99px"
								background="--color-orange"
								color="--background"
								margin="180px 0px 0px 0px"
								border-width="2px"
								border-style="solid"
								border-color="--color-orange"
								transition="background-color 0.3s ease 0s"
								hover-color="--background"
								left="0px"
								right="auto"
								bottom="0px"
								top="auto"
								sm-margin="0px 0px 0px 0px"
								hover-background="#F9DD6D"
								hover-border-color="#F9DD6D"
								active-background="#E59010"
								active-border-color="#E59010"
							>
								Try it today
							</Link>
						</Box>
					</Box>
				</Box>
			</Box>
			{" "}
		</Section>
		<Section
			quarkly-title="EcoSystem"
			padding="102px 0 198px 0"
			background="url(https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/bg3.jpg?v=2021-05-11T10:57:44.946Z) 0% 50%/cover no-repeat,--color-black"
			lg-padding="100px 0 160px 0"
			md-padding="72px 0 100px 0"
			sm-padding="60px 0 90px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				max-width="1600px"
				padding="0px 0px 0px 0px"
				lg-margin="0px 45px 0px 45px"
				md-margin="0px 30px 0px 30px"
				margin="0px 90px 0px 90px"
			/>
			<Box
				quarkly-title="Row"
				display="flex"
				margin="0px -15px 0px -15px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Box
					display="flex"
					width="33.33333%"
					flex-direction="column"
					padding="0px 15px 0px 15px"
					md-width="83.3333%"
					md-justify-content="center"
					md-margin="0px 0px 15px 0px"
					quarkly-title="Col"
					box-sizing="border-box"
					align-items="stretch"
					md-align-items="center"
					sm-width="100%"
					sm-align-items="flex-start"
				>
					<Box
						padding="0px 0px 0px 0px"
						display="flex"
						flex-direction="column"
						md-align-items="center"
						md-justify-content="center"
						sm-align-items="flex-start"
						sm-justify-content="flex-start"
					>
						<Text
							margin="0px 0px 36px 0px"
							font="--decs"
							color="--blueLight"
							text-transform="uppercase"
							letter-spacing="1.8px"
						>
							Web ecosystem
						</Text>
						<Text
							font="--hero3"
							color="#7F8A9E"
							as="h1"
							letter-spacing="-0.01em"
							width="100%"
							hd-font="normal 700 50px/60px &quot;Epilogue&quot;, sans-serif"
							md-text-align="center"
							sm-text-align="left"
							sm-font="normal 800 35px/40px &quot;Epilogue&quot;, sans-serif"
							margin="0 0px 30px 0px"
							lg-white-space="nowrap"
						>
							One Vision
							<br />
							<Span
								color="--white"
								font="--hero3"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								lg-white-space="nowrap"
								sm-font="normal 800 35px/40px &quot;Epilogue&quot;, sans-serif"
							>
								One Solution
							</Span>
						</Text>
						<Text
							margin="0 0px 0px 0px"
							font="--lead"
							color="--gray"
							md-text-align="center"
							sm-text-align="left"
						>
							From an occasional freelance gig to a full-fledged web design studio – Graphite has all the tools necessary to get the job done. Everything you need – packed in one versatile reliable solution.
						</Text>
					</Box>
					<Box display="flex" margin="111px 0px 0px 0px" quarkly-title="Buttons" md-margin="60px 0px 0px 0px">
						<Link
							href="/signup"
							padding="9px 23px 9px 23px"
							font="--menu"
							text-decoration-line="initial"
							border-radius="99px"
							background="--color-orange"
							color="--background"
							margin="0px 0px 0px 0px"
							border-width="2px"
							border-style="solid"
							border-color="--color-orange"
							transition="background-color 0.3s ease 0s"
							hover-color="--background"
							hover-background="#F9DD6D"
							hover-border-color="#F9DD6D"
							active-background="#E59010"
							active-border-color="#E59010"
						>
							Get started
						</Link>
					</Box>
				</Box>
				<Box
					display="flex"
					width="66.66666%"
					position="relative"
					padding="0px 15px 0px 15px"
					quarkly-title="Col"
					box-sizing="border-box"
					flex-direction="column"
					align-items="center"
					justify-content="center"
					md-width="100%"
					md-height="554px"
					sm-height="auto"
				>
					<Box
						display="flex"
						flex-wrap="wrap"
						align-items="center"
						lg-margin="0px 0px 0px 0px"
						sm-align-items="flex-start"
						sm-margin="60px 0px 0px 0px"
					>
						<Box
							background="#4859EB"
							width="116px"
							height="116px"
							position="absolute"
							border-radius="999px"
							filter="blur(60px)"
							bottom="auto"
							left="137px"
							right="auto"
							top="26px"
							quarkly-title="highlight"
						/>
						<Box
							background="#E6A420"
							width="116px"
							height="116px"
							position="absolute"
							border-radius="999px"
							filter="blur(60px)"
							left="auto"
							right="122px"
							top="166px"
							bottom="auto"
							quarkly-title="highlight"
						/>
						<Box
							background="#943F94"
							width="116px"
							height="116px"
							position="absolute"
							border-radius="999px"
							filter="blur(60px)"
							left="245px"
							right="auto"
							top="auto"
							bottom="-11px"
							quarkly-title="highlight"
						/>
						<Box
							display="flex"
							align-items="flex-start"
							sm-margin="0px 4% 30px 0%"
							sm-width="46%"
							position="absolute"
							bottom="auto"
							left="14%"
							right="auto"
							top="56px"
							width="210px"
							flex-direction="column"
							lg-width="144px"
							lg-left="16%"
							sm-position="static"
						>
							<Text margin="0 0px 12px 0px" font="--menu" color="--white">
								Layout engine
							</Text>
							<Text margin="0 0px 0px 0px" font="--footer" color="--gray">
								Build your website using auto layout and grid tools
							</Text>
						</Box>
						<Box
							display="flex"
							width="210px"
							align-items="flex-start"
							sm-margin="0px 0% 30px 4%"
							sm-width="46%"
							position="absolute"
							flex-direction="column"
							bottom="auto"
							left="auto"
							right="16%"
							top="47px"
							lg-width="144px"
							lg-top="53px"
							lg-right="15%"
							sm-position="static"
						>
							<Text margin="0 0px 12px 0px" font="--menu" color="--white">
								Code tools
							</Text>
							<Text margin="0 0px 0px 0px" font="--footer" color="--gray">
								Embed live HTML code to your website
							</Text>
						</Box>
						<Box
							display="flex"
							width="210px"
							align-items="flex-start"
							sm-width="46%"
							sm-margin="0px 4% 30px 0%"
							position="absolute"
							flex-direction="column"
							bottom="auto"
							left="10%"
							right="auto"
							top="215px"
							lg-width="144px"
							lg-left="6%"
							lg-top="222px"
							sm-position="static"
						>
							<Text margin="0 0px 12px 0px" font="--menu" color="--white">
								Design system
							</Text>
							<Text margin="0 0px 0px 0px" font="--footer" color="--gray">
								Maintain visual consistency of your websites
							</Text>
						</Box>
						<Box
							display="flex"
							width="210px"
							align-items="flex-start"
							sm-width="46%"
							sm-margin="0px 0% 30px 4%"
							position="absolute"
							flex-direction="column"
							bottom="203px"
							left="auto"
							right="6%"
							top="auto"
							lg-width="144px"
							lg-right="2%"
							lg-bottom="211px"
							sm-position="static"
						>
							<Text margin="0 0px 12px 0px" font="--menu" color="--white">
								Content management
							</Text>
							<Text margin="0 0px 0px 0px" font="--footer" color="--gray">
								Integrate your data from a headless CMS with your website
							</Text>
						</Box>
						<Box
							display="flex"
							width="210px"
							align-items="flex-start"
							sm-margin="0px 4% 0px 0%"
							sm-width="46%"
							position="absolute"
							flex-direction="column"
							bottom="52px"
							left="20%"
							right="auto"
							top="auto"
							lg-width="144px"
							lg-left="20%"
							lg-bottom="52px"
							sm-position="static"
						>
							<Text margin="0 0px 12px 0px" font="--menu" color="--white">
								Asset managment
							</Text>
							<Text margin="0 0px 0px 0px" font="--footer" color="--gray">
								Keep your images, vector, shapes and icons in one place
							</Text>
						</Box>
						<Box
							display="flex"
							width="210px"
							align-items="flex-start"
							sm-margin="0px 0% 0px 4%"
							sm-width="46%"
							position="absolute"
							flex-direction="column"
							bottom="42px"
							left="auto"
							right="14%"
							top="auto"
							lg-width="144px"
							lg-right="13%"
							lg-bottom="47px"
							sm-position="static"
						>
							<Text margin="0 0px 12px 0px" font="--menu" color="--white">
								Hosting, domains, and SSL
							</Text>
							<Text margin="0 0px 0px 0px" font="--footer" color="--gray">
								Get your website live
							</Text>
						</Box>
						<Box
							display="flex"
							flex-direction="column"
							align-items="center"
							justify-content="center"
							min-height="266px"
							background=",rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Figure3.svg?v=2021-05-08T06:54:57.985Z) center center/contain no-repeat scroll padding-box"
							sm-display="none"
							position="relative"
							min-width="266px"
							margin="0px 0px 0px 0"
							quarkly-title="Logo"
						>
							<Box
								position="absolute"
								z-index="4"
								background="rgba(0, 0, 0, 0) linear-gradient(0deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5) 100%) 0% 0% /auto repeat scroll padding-box"
								opacity="0.5"
								filter="blur(20px)"
								height="100%"
								width="100%"
							/>
							<Image
								loading="lazy"
								src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/LogoKub.svg?v=2021-05-08T07:01:45.955Z"
								width="115px"
								height="auto"
								position="relative"
								z-index="5"
							/>
						</Box>
					</Box>
				</Box>
			</Box>
			{" "}
		</Section>
		<Components.CarouselG />
		<Section
			quarkly-title="LoveIt"
			padding="90px 0 120px 0"
			background="--color-black"
			md-padding="90px 0 100px 0"
			sm-padding="60px 0 100px 0"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				max-width="1600px"
				padding="0px 0px 0px 0px"
				lg-margin="0px 45px 0px 45px"
				md-margin="0px 30px 0px 30px"
				sm-margin="0px 0px 0px 0px"
				margin="0px 90px 0px 90px"
			/>
			<Box
				display="flex"
				flex-direction="column"
				align-items="center"
				margin="0px -15px 90px -15px"
				md-margin="0px 0px 42px 0px"
				sm-text-align="left"
				quarkly-title="Row"
				sm-align-items="flex-start"
			>
				<Components.Masks font="--decs" letter-spacing="1.8px" margin="0px 0px 42px 0px">
					You’ll love it
				</Components.Masks>
				<Box
					display="flex"
					flex-direction="row"
					margin="0px -15px 42px -15px"
					md-margin="0px 0px 42px 0px"
					sm-text-align="left"
					quarkly-title="Row"
					width="66.6666666%"
					lg-min-width="800px"
					md-width="100%"
					md-min-width="auto"
					sm-flex-direction="column"
					sm-margin="0px 0px 0 0px"
				>
					<Box
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						margin="0px 0px 0px 0px"
						width="33.3333%"
						padding="0px 15px 0px 15px"
						box-sizing="border-box"
						md-padding="0px 0 0px 15px"
						sm-margin="0px 0px 30px 0px"
						sm-width="100%"
					>
						<Text margin="0px 0px 24px 0px" color="--white" font="--headline5">
							Comfort
						</Text>
						<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
							<Image
								loading="lazy"
								width="10px"
								height="10px"
								src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/shape1.svg?v=2021-05-06T20:00:22.309Z"
								margin="0px 12px 0px -9px"
								min-width="auto"
								min-height="auto"
							/>
							<Text margin="0px 0px 0px 0px" color="--gray" font="--base">
								Familiar look and feel
							</Text>
						</Box>
						<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
							<Image
								loading="lazy"
								width="10px"
								height="10px"
								src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/shape1.svg?v=2021-05-06T20:00:22.309Z"
								margin="0px 12px 0px -8px"
								min-width="auto"
								min-height="auto"
							/>
							<Text margin="0px 0px 0px 0px" color="--gray" font="--base">
								Design system
							</Text>
						</Box>
						<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
							<Image
								loading="lazy"
								width="10px"
								height="10px"
								src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/shape1.svg?v=2021-05-06T20:00:22.309Z"
								margin="0px 12px 0px -8px"
								min-width="auto"
								min-height="auto"
							/>
							<Text margin="0px 0px 0px 0px" color="--gray" font="--base">
								Absolute & Auto-Layout
							</Text>
						</Box>
					</Box>
					<Box
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						margin="0px 0px 0px 0px"
						width="33.3333%"
						padding="0px 15px 0px 15px"
						box-sizing="border-box"
						md-padding="0px 0 0px 15px"
						sm-margin="0px 0px 30px 0px"
						sm-width="100%"
					>
						<Text margin="0px 0px 24px 0px" color="--white" font="--headline5">
							Power
						</Text>
						<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
							<Image
								loading="lazy"
								width="10px"
								height="10px"
								src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/shape1.svg?v=2021-05-06T20:00:22.309Z"
								margin="0px 12px 0px -8px"
								min-width="auto"
								min-height="auto"
							/>
							<Text margin="0px 0px 0px 0px" color="--gray" font="--base">
								Top-notch animation
							</Text>
						</Box>
						<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
							<Image
								loading="lazy"
								width="10px"
								height="10px"
								src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/shape1.svg?v=2021-05-06T20:00:22.309Z"
								margin="0px 12px 0px -8px"
								min-width="auto"
								min-height="auto"
							/>
							<Text margin="0px 0px 0px 0px" color="--gray" font="--base">
								Pixel-perfect rendering
							</Text>
						</Box>
						<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
							<Image
								loading="lazy"
								width="10px"
								height="10px"
								src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/shape1.svg?v=2021-05-06T20:00:22.309Z"
								margin="0px 12px 0px -8px"
								min-width="auto"
								min-height="auto"
							/>
							<Text margin="0px 0px 0px 0px" color="--gray" font="--base">
								CSS/Flexbox firepower
							</Text>
						</Box>
					</Box>
					<Box
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						margin="0px 0px 0px 0px"
						width="33.3333%"
						padding="0px 15px 0px 15px"
						box-sizing="border-box"
						md-padding="0px 0 0px 15px"
						sm-margin="0px 0px 0 0px"
						sm-width="100%"
					>
						<Text margin="0px 0px 24px 0px" color="--white" font="--headline5">
							Efficiency
						</Text>
						<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
							<Image
								loading="lazy"
								width="10px"
								height="10px"
								src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/shape1.svg?v=2021-05-06T20:00:22.309Z"
								margin="0px 12px 0px -8px"
								min-width="auto"
								min-height="auto"
							/>
							<Text margin="0px 0px 0px 0px" color="--gray" font="--base">
								Bulk adjustments
							</Text>
						</Box>
						<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
							<Image
								loading="lazy"
								width="10px"
								height="10px"
								src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/shape1.svg?v=2021-05-06T20:00:22.309Z"
								margin="0px 12px 0px -8px"
								min-width="auto"
								min-height="auto"
							/>
							<Text margin="0px 0px 0px 0px" color="--gray" font="--base">
								Reusable components
							</Text>
						</Box>
						<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
							<Image
								loading="lazy"
								width="10px"
								height="10px"
								src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/shape1.svg?v=2021-05-06T20:00:22.309Z"
								margin="0px 12px 0px -8px"
								min-width="auto"
								min-height="auto"
							/>
							<Text margin="0px 0px 0px 0px" color="--gray" font="--base">
								Instant publishing
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				display="flex"
				flex-direction="column"
				align-items="center"
				width="100%"
				justify-content="center"
				padding="150px 0px 150px 0px"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Figure2.svg?v=2021-05-06T20:06:00.273Z) center center/contain no-repeat scroll padding-box"
				md-padding="100px 0px 100px 0px"
				sm-width="100%"
				sm-padding="100px 0px30px 100px 30px"
				height="510px"
				box-sizing="border-box"
				position="relative"
			>
				<Box
					background="#030304"
					width="446px"
					height="446px"
					position="absolute"
					border-radius="999px"
					filter="blur(108px)"
					box-shadow="0 0 240px 100px #030304"
				/>
				<Text
					margin="0px 0px 18px 0px"
					color="--white"
					font="--hero3"
					letter-spacing="-0.01em"
					md-text-align="center"
					sm-font="normal 800 35px/42px &quot;Epilogue&quot;, sans-serif"
					position="relative"
				>
					Try an entirely new approach{" "}
				</Text>
				<Text
					margin="0px 0px 36px 0px"
					color="--gray"
					font="--headline4"
					letter-spacing="-0.01em"
					hd-font="normal 500 20px/27px &quot;Inter&quot;, sans-serif"
					sm-text-align="center"
					position="relative"
				>
					to site-building and create your first website now
				</Text>
				<Link
					href="/signup"
					padding="9px 25px 9px 25px"
					font="--menu"
					text-decoration-line="initial"
					border-radius="99px"
					background="--color-orange"
					color="--background"
					margin="0px 0px 0px 0px"
					border-width="2px"
					border-style="solid"
					border-color="--color-orange"
					transition="background-color 0.3s ease 0s"
					hover-color="--background"
					hover-background="#F9DD6D"
					hover-border-color="#F9DD6D"
					active-background="#E59010"
					active-border-color="#E59010"
					position="relative"
				>
					Get started
				</Link>
			</Box>
			{" "}
		</Section>
		<Section quarkly-title="Footer" padding="60px 0 84px 0" background="--color-black" justify-content="center">
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				max-width="1600px"
				width="100%"
				padding="0px 0px 0px 0px"
				hd-width="100%"
				hd-max-width="1600px"
				hd-flex-wrap="wrap"
			/>
			<Box
				display="flex"
				flex-direction="column"
				align-items="center"
				margin="0px 90px 0px 90px"
				width="100%"
				justify-content="center"
				padding="0px 0px 0px 0px"
				md-margin="0px 0 0px 0"
			>
				<Box
					display="flex"
					align-items="center"
					justify-content="center"
					quarkly-title="SocialMedia"
					margin="0px 0px 36px 0px"
					sm-flex-direction="column"
				>
					<Link
						href="#"
						font="normal 800 20px/27px --fontFamily-googleEpilogue"
						color="--white"
						text-decoration-line="initial"
						margin="0px 18px 0px 18px"
						sm-margin="0px 18px 24px 18px"
					>
						Facebook
					</Link>
					<Link
						href="#"
						font="normal 800 20px/27px --fontFamily-googleEpilogue"
						color="--white"
						text-decoration-line="initial"
						margin="0px 18px 0px 18px"
						sm-margin="0px 18px 24px 18px"
					>
						Twitter
					</Link>
					<Link
						href="#"
						font="normal 800 20px/27px --fontFamily-googleEpilogue"
						color="--white"
						text-decoration-line="initial"
						margin="0px 18px 0px 18px"
					>
						Youtube
					</Link>
				</Box>
				<Box
					display="flex"
					align-items="center"
					justify-content="center"
					quarkly-title="SocialMedia"
					margin="0px 0px 36px 0px"
				>
					<Link
						href="#"
						font="--footer"
						color="#7F8A9E"
						text-decoration-line="initial"
						margin="0px 18px 0px 18px"
						sm-text-align="center"
						sm-margin="0px 0 0px 0"
					>
						Terms of use
					</Link>
					<Link
						href="#"
						font="--footer"
						color="#7F8A9E"
						text-decoration-line="initial"
						margin="0px 18px 0px 18px"
						sm-text-align="center"
						sm-margin="0px 18px 0px 18px"
					>
						Privacy policy
					</Link>
					<Link
						href="#"
						font="--footer"
						color="#7F8A9E"
						text-decoration-line="initial"
						margin="0px 18px 0px 18px"
						sm-text-align="center"
						sm-margin="0px 0 0px 0"
					>
						Contact us
					</Link>
				</Box>
				<Image
					loading="lazy"
					src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Logo-footer.svg?v=2021-05-07T06:54:22.374Z"
					width="90px"
					max-width="90px"
					height="auto"
				/>
				<Text margin="21px 0px 0px 0px" color="#4A5060" font="--footer" letter-spacing="-0.01em">
					© 2020
				</Text>
			</Box>
			{" "}
		</Section>
		<Section
			quarkly-title="HeroBlock"
			padding="0px 0 0px 0"
			md-padding="60px 0 90px 0"
			background="--color-background"
			min-height="100vh"
			display="none"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				max-width="1600px"
				width="100%"
				padding="30px 0px 30px 0px"
				hd-width="100%"
				lg-margin="0px 0px 0px 45px"
				lg-padding="35px 0px 35px 0px"
				md-margin="0px 50px 0px 50px"
				md-background="none"
				md-padding="0px 0px 0px 0px"
				sm-margin="0px 30px 0px 30px"
				hd-max-width="1600px"
				margin="0px 0px 0px 90px"
			/>
			<Box
				display="flex"
				width="40%"
				flex-direction="column"
				align-items="flex-start"
				justify-content="center"
				hd-width="40%"
				lg-width="45%"
				md-width="100%"
				md-align-items="center"
				md-margin="0px 0px 66px 0px"
			>
				<Box
					display="flex"
					flex-direction="column"
					margin="0 70px 0px 0px"
					lg-margin="0px 50px 0px 0px"
					md-align-items="center"
					md-justify-content="center"
					md-margin="0px 60px 0px 60px"
					sm-margin="0px 0px 0px 0px"
					align-items="flex-start"
				>
					<Components.Masks
						as="h3"
						font="--decs"
						sm-text-align="center"
						sm-width="110%"
						sm-font="600 13px/21px &quot;Inter&quot;, sans-serif"
						letter-spacing="1.8px"
					/>
					<Text
						margin="30px 0px 0px 0px"
						font="normal 800 68px/72px --fontFamily-googleEpilogue"
						color="--white"
						as="h1"
						hd-width="100%"
						lg-font="normal 800 57px/61px &quot;Epilogue&quot;, sans-serif"
						md-text-align="center"
						md-font="normal 800 60px/66px &quot;Epilogue&quot;, sans-serif"
						letter-spacing=" -1%"
						sm-width="100%"
						sm-font="normal 800 35px/42px &quot;Epilogue&quot;, sans-serif"
					>
						Make web design feel like home
					</Text>
					<Text
						margin="12px 0px 0px 0px"
						font="--lead"
						color="--gray"
						md-text-align="center"
						sm-font="normal 400 20px/27px &quot;Inter&quot;, sans-serif"
						padding="0px 60px 0px 0px"
					>
						Use familiar graphic editor tools to create pixel-perfect Web Pages, and not just mockups. Focus on the creative part, and we'll take care of the rest.
					</Text>
				</Box>
				<Box display="flex" margin="54px 0px 0px 0px" quarkly-title="Buttons">
					<Link
						href="/signup"
						padding="9px 25px 9px 25px"
						font="--menu"
						text-decoration-line="initial"
						border-radius="99px"
						background="--color-orange"
						color="--background"
						margin="0px 18px 0px 0px"
						border-width="2px"
						border-style="solid"
						border-color="--color-orange"
						transition="background-color 0.3s ease 0s"
						hover-color="--background"
						sm-padding="9px 15px 9px 15px"
						hover-background="#F9DD6D"
						hover-border-color="#F9DD6D"
						active-background="#E59010"
						active-border-color="#E59010"
					>
						Try for free
					</Link>
					<Link
						href="#"
						padding="9px 25px 9px 25px"
						font="--menu"
						text-decoration-line="initial"
						border-radius="99px"
						margin="0px 0px 0px 0px"
						color="--gray"
						border-width="2px"
						border-style="solid"
						border-color="--color-space"
						transition="background-color 0.3s ease 0s"
						hover-background="--color-space"
						hover-color="--white"
						sm-padding="9px 15px 9px 15px"
					>
						Watch video
					</Link>
				</Box>
			</Box>
			<Box
				display="flex"
				width="60%"
				align-items="center"
				justify-content="flex-end"
				hd-width="60%"
				lg-width="55%"
				lg-justify-content="center"
				lg-align-items="center"
				md-width="100%"
				position="relative"
			>
				<Box display="flex" align-items="center" justify-content="flex-end" width="100%">
					<Box
						border-radius="8px"
						display="flex"
						align-items="center"
						justify-content="center"
						lg-min-height="400px"
						lg-box-shadow="none"
						lg-text-shadow="none"
						md-min-height="520px"
						hd-box-shadow="none"
						md-padding="5px 0px 5px 0px"
						md-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Figure.svg?v=2021-05-06T06:17:36.425Z) center center/contain no-repeat scroll padding-box"
						sm-min-height="250px"
						sm-padding="5px 0px 5px 0px"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Figure.svg?v=2021-05-06T06:17:36.425Z) center center/contain no-repeat scroll padding-box"
						padding="24px 0px 24px 0px"
						hd-padding="74px 0px 74px 0px"
						lg-width="100%"
						lg-padding="84px 0px 84px 0px"
						md-align-items="center"
						md-justify-content="center"
						height="100%"
						max-width="1066px"
						min-height="600px"
						width="100%"
					>
						<Box
							box-shadow="0px 90px 240px 100px #000000"
							position="relative"
							height="0px"
							width="0px"
							min-width="0px"
							min-height="0px"
							left="100px"
							top="-13px"
						/>
						<Components.Animation
							width="100%"
							height="auto"
							position="absolute"
							animation="↑ Slide In"
							test
							iteration="once"
						>
							<Image
								md-width="100%"
								md-position="absolute"
								md-height="auto"
								md-border-radius="5px"
								md-display="inline-block"
								md-max-width="670px"
								md-min-height="420px"
								sm-min-height="205px"
								src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/editor%20depreceated.webp?v=2021-05-09T17:41:31.199Z"
								width="100%"
								height="auto"
								position="relative"
								box-shadow=" 0 30px 60px 0 rgb(0 0 0 / 15%),0 20px 80px 20px rgb(0 0 0 / 5%)"
								lg-width="135%"
								lg-right="-35%"
								hd-width="110%"
								hd-right="-10%"
								md-right="auto"
								md-bottom="auto"
								md-top="auto"
								md-left="auto"
								sm-margin="0px 0px 0px 0px"
								top="0px"
							/>
						</Components.Animation>
						<Components.PopUp
							position="relative"
							z-index="2"
							left="-20px"
							md-left="05px"
							md-top="-20px"
							md-right="auto"
							md-bottom="auto"
							sm-left="0px"
							sm-top="0px"
							top="-20px"
							hd-left="20px"
						>
							<Override
								slot="close"
								z-index="99999"
								top="20px"
								right="20px"
								bottom="auto"
								left="auto"
								size="50px"
								transition="transform 0.5s ease 0s"
								hover-transform="rotateZ(90deg)"
								transform="none"
							/>
							<Override
								slot="wrapper"
								width="80%"
								max-width="none"
								background="rgba(24, 28, 34, 0.98)"
								height="80%"
								position="fixed"
								z-index="99999"
							/>
							<Override
								slot="button"
								border-radius="12px"
								width="120px"
								height="120px"
								background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/shape.svg?v=2021-05-06T08:15:04.046Z)"
								padding="8px 11px 4px 24px"
								focus-box-shadow="none"
								transition="transform 0.5s ease 0s"
								lg-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/shape.svg?v=2021-05-06T08:15:04.046Z) 0% 0%/contain"
								lg-width="98px"
								lg-height="98px"
								lg-padding="8px 11px 4px 18px"
								transform="scale(1)"
								hover-transform="scale(1.15)"
							/>
							<Override slot="content" margin="0px 0px 0px 0px" z-index="9999" />
							<Override slot="popup" width="100%" />
							<Override slot="overlay" width="100%" />
							<Components.YouTubePlayer
								videoId="xpvE1ytltww"
								width="100%"
								src="https://www.youtube.com/watch?v=xpvE1ytltww"
								position="relative"
								z-index="99999999"
							/>
						</Components.PopUp>
					</Box>
					<Image
						src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/image%2033.png?v=2021-05-11T11:40:50.491Z"
						position="absolute"
						left="auto"
						right="-55px"
						bottom="auto"
						top="220px"
						max-height="246px"
						height="auto"
						width="100%"
						object-position="100% 0%"
						z-index="1"
						hd-right="-130px"
						lg-right="-130px"
						lg-top="50px"
						md-right="-15px"
						sm-max-height="90px"
						sm-right="-20px"
						sm-top="60px"
						md-max-height="186px"
						md-top="110px"
					/>
					<Image
						src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/image%2035.png?v=2021-05-11T11:40:47.549Z"
						position="absolute"
						left="-40px"
						right="0px"
						bottom="auto"
						top="220px"
						lg-left="-30px"
						lg-width="144px"
						lg-height="306px"
						lg-top="70px"
						md-top="110px"
						sm-width="66px"
						sm-height="auto"
						sm-left="-10px"
						sm-top="60px"
						hd-left="-50px"
						hd-top="150px"
						max-height="400px"
					/>
				</Box>
			</Box>
			{" "}
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6092d6b9f57a5fbcd5ff262e"}>
				{".gradient {\n-webkit-background-clip: text !important;\n    -webkit-text-fill-color: transparent;\n}\n\nbody {\n-webkit-font-smoothing: antialiased;\nfont-feature-settings: \"liga\", \"dlig\", \"ss01\" 0, \"ss02\", \"ss03\", \"ss04\", \"ss05\" 0, \"tnum\", \"kern\";\n}\n"}
			</style>
			<meta name={"robots"} content={"noindex"} place={"endOfHead"} rawKey={"609a6b3ca35266696f4312cd"} />
			<style place={"endOfHead"} rawKey={"609d412022b34e876e64bce1"}>
				{"@font-face {\n                font-family: PTRootUIWeb;\n                src: url(https://firebasestorage.googleapis.com/v0/b/graphite-d460b.appspot.com/o/landing%2Ffonts%2Fpt_root_ui_medium.eot?alt=media&token=ddede748-9582-4e06-ae02-ef2b04590f99);\n                src: url(https://firebasestorage.googleapis.com/v0/b/graphite-d460b.appspot.com/o/landing%2Ffonts%2Fpt_root_ui_medium.eot?alt=media&token=ddede748-9582-4e06-ae02-ef2b04590f99?#iefix) format(\"embedded-opentype\"),\n                url(https://firebasestorage.googleapis.com/v0/b/graphite-d460b.appspot.com/o/landing%2Ffonts%2Fpt_root_ui_medium.woff2?alt=media&token=886af926-2bae-41ed-9577-2cbe2559fbb3) format(\"woff2\"),\n                url(https://firebasestorage.googleapis.com/v0/b/graphite-d460b.appspot.com/o/landing%2Ffonts%2Fpt_root_ui_medium.woff?alt=media&token=84d5c44e-573b-46b2-a106-fff3ea810ce4) format(\"woff\"),\n                url(https://firebasestorage.googleapis.com/v0/b/graphite-d460b.appspot.com/o/landing%2Ffonts%2Fpt_root_ui_medium.ttf?alt=media&token=b618a449-4128-4dd4-bc6a-d998f14955c2) format(\"truetype\");\n                font-weight: 400;\n                font-style: normal;\n                font-display: swap\n            }\n\n            @font-face {\n                font-family: PTRootUIWeb;\n                src: url(https://firebasestorage.googleapis.com/v0/b/graphite-d460b.appspot.com/o/landing%2Ffonts%2Fpt_root_ui_bold.eot?alt=media&token=c1a1977d-21b9-45a5-84be-2c16b5cbcab5);\n                src: url(https://firebasestorage.googleapis.com/v0/b/graphite-d460b.appspot.com/o/landing%2Ffonts%2Fpt_root_ui_bold.eot?alt=media&token=c1a1977d-21b9-45a5-84be-2c16b5cbcab5?#iefix) format(\"embedded-opentype\"),\n                url(https://firebasestorage.googleapis.com/v0/b/graphite-d460b.appspot.com/o/landing%2Ffonts%2Fpt_root_ui_bold.woff2?alt=media&token=49dcc3ed-d9e3-41c5-a347-ab27c27dbd9c) format(\"woff2\"),\n                url(https://firebasestorage.googleapis.com/v0/b/graphite-d460b.appspot.com/o/landing%2Ffonts%2Fpt_root_ui_bold.woff?alt=media&token=cb76a023-ffde-4ed5-aabb-e21a654538c8) format(\"woff\"),\n                url(https://firebasestorage.googleapis.com/v0/b/graphite-d460b.appspot.com/o/landing%2Ffonts%2Fpt_root_ui_bold.ttf?alt=media&token=8bcfe907-c1d4-4fd7-b744-c2fe8760810a) format(\"truetype\");\n                font-weight: 700;\n                font-style: normal;\n                font-display: swap\n            }"}
			</style>
		</RawHtml>
	</Theme>;
});