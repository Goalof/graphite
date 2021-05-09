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
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box padding="0px 0px 0px 0px" background="--color-background" quarkly-title="Background">
			<Section padding="44px 0 44px 0" quarkly-title="Header">
				<Override
					slot="SectionContent"
					max-width="1600px"
					flex-direction="row"
					flex-wrap="wrap"
					hd-margin="0px 90px 0px 90px"
					lg-margin="0px 45px 0px 45px"
					md-margin="0px 30px 0px 30px"
				/>
				<Box
					width="30%"
					display="flex"
					align-items="center"
					justify-content="flex-start"
					quarkly-title="logo-head"
					md-width="25%"
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
				>
					<Box quarkly-title="Menu" display="flex">
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
					<Box display="flex" quarkly-title="Button-Log" margin="0px 0px 0px 66px" md-margin="0px 0px 0px 20px">
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
			<Section quarkly-title="HeroBlock" padding="54px 0 54px 0" md-padding="60px 0 90px 0">
				<Override
					slot="SectionContent"
					flex-direction="row"
					flex-wrap="wrap"
					hd-margin="0px 0px 0px 90px"
					max-width="1600px"
					width="100%"
					background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Figure.svg?v=2021-05-06T06:17:36.425Z) center right/contain no-repeat scroll padding-box"
					padding="70px 0px 70px 0px"
					hd-width="100%"
					hd-max-width="1600px"
					lg-margin="0px 0px 0px 45px"
					lg-padding="70px 0px 70px 0px"
					md-margin="0px 50px 0px 50px"
					md-background="none"
					md-padding="0px 0px 0px 0px"
				/>
				<Box
					display="flex"
					width="45%"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 0px 0px 0px"
					justify-content="center"
					hd-width="40%"
					lg-width="45%"
					md-width="100%"
					md-align-items="center"
					md-margin="0px 0px 60px 0px"
				>
					<Box
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						margin="0px 110px 0px 0px"
						lg-margin="0px 30px 0px 0px"
						md-align-items="center"
						md-justify-content="center"
						md-margin="0px 60px 0px 60px"
					>
						<Components.Masks as="h3" font="--decs" />
						<Text
							margin="30px 0px 0px 0px"
							font="--headline2"
							color="--white"
							as="h1"
							width="80%"
							hd-width="100%"
							lg-font="normal 800 57px/61px &quot;Epilogue&quot;, sans-serif"
							md-text-align="center"
							md-font="normal 800 60px/66px &quot;Epilogue&quot;, sans-serif"
							letter-spacing=" -0.01em"
						>
							Make web design feel like home
						</Text>
						<Text margin="12px 0px 0px 0px" font="--lead" color="--gray" md-text-align="center">
							Use familiar graphic editor tools to create pixel-perfect Web Pages, and not just mockups. Focus on the creative part, and we'll take care of the rest.{"\n\n"}
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
							hover-background="transparent"
							hover-color="--orange"
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
						>
							Watch video
						</Link>
					</Box>
				</Box>
				<Box
					display="flex"
					width="55%"
					position="relative"
					align-items="center"
					justify-content="flex-end"
					hd-width="60%"
					lg-width="55%"
					lg-justify-content="center"
					lg-align-items="center"
					md-width="100%"
				>
					<Box
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/editor%20depreceated-min.png?v=2021-05-08T16:00:40.999Z) center right/contain no-repeat scroll padding-box"
						height="100%"
						min-height="600px"
						box-shadow="0 20px 80px 20px rgb(0 0 0 / 5%), 0 30px 60px 0 rgb(0 0 0 / 15%)"
						border-radius="8px"
						width="783px"
						display="flex"
						align-items="center"
						justify-content="center"
						lg-min-height="400px"
						lg-box-shadow="none"
						lg-text-shadow="none"
						lg-width="100%"
						md-background="none"
						md-position="relative"
						md-min-height="520px"
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
							width="64px"
							height="64px"
							md-width="100%"
							md-position="absolute"
							md-height="auto"
							md-border-radius="5px"
							display="none"
							md-display="inline-block"
							md-max-width="670px"
							md-min-height="420px"
						/>
						<Components.PopUp
							position="relative"
							z-index="2"
							left="80px"
							md-left="45px"
							md-top="-20px"
							md-right="auto"
							md-bottom="auto"
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
								width="100%"
								max-width="none"
								height="100%"
								background="rgba(24, 28, 34, 0.98)"
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
								hover-transform="rotateZ(360deg)"
								lg-background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/shape.svg?v=2021-05-06T08:15:04.046Z) 0% 0%/contain"
								lg-width="98px"
								lg-height="98px"
								lg-padding="8px 11px 4px 18px"
							/>
						</Components.PopUp>
					</Box>
					<Image
						src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/image%2033%20(1).svg?v=2021-05-08T07:44:47.173Z"
						position="absolute"
						left="auto"
						right="-15px"
						bottom="auto"
						top="100px"
						max-height="246px"
						height="auto"
						width="100%"
						object-position="100% 0%"
						z-index="1"
						hd-right="-78px"
						lg-right="-130px"
						lg-top="50px"
						md-right="-35px"
					/>
					<Image
						src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/image%2035.svg?v=2021-05-06T06:03:05.929Z"
						position="absolute"
						left="40px"
						right="0px"
						bottom="auto"
						top="70px"
						lg-left="-30px"
						lg-width="144px"
						lg-height="306px"
						lg-top="0px"
						md-top="80px"
					/>
				</Box>
				{" "}
			</Section>
			<Section quarkly-title="Step" padding="120px 0 150px 0" background="#0D0A1A" lg-padding="120px 0 120px 0">
				<Override
					slot="SectionContent"
					flex-direction="row"
					flex-wrap="wrap"
					hd-margin="0px 0px 0px 90px"
					max-width="1600px"
					width="100%"
					padding="0px 0px 0px 0px"
					hd-width="100%"
					hd-max-width="1600px"
					lg-margin="0px 45px 0px 45px"
					md-margin="0px https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/editor%20depreceated-min.png?v=2021-05-08T16:00:40.999Z 0px 30px"
					md-align-items="center"
					md-justify-content="center"
				/>
				<Box
					display="flex"
					width="33.333333%"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 0px 0px 0px"
					justify-content="flex-start"
					quarkly-title="Cart"
				>
					<Box
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						margin="0px 60px 0px 0px"
						md-margin="0px 20px 0px 0px"
					>
						<Image loading="lazy" src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/GemIcon.svg?v=2021-05-06T08:52:10.293Z" width="83px" height="83px" />
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
					padding="0px 0px 0px 0px"
					justify-content="center"
					quarkly-title="Cart"
					md-justify-content="flex-start"
				>
					<Box
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						margin="0px 60px 0px 0px"
						md-margin="0px 20px 0px 0px"
					>
						<Image loading="lazy" src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/GemIcon-1.svg?v=2021-05-08T07:51:05.642Z" width="83px" height="83px" />
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
					padding="0px 0px 0px 0px"
					justify-content="center"
					quarkly-title="Cart"
					md-justify-content="flex-start"
				>
					<Box
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						margin="0px 60px 0px 0px"
						md-margin="0px 20px 0px 0px"
					>
						<Image loading="lazy" src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/GemIcon-2.svg?v=2021-05-08T07:51:12.825Z" width="83px" height="83px" />
						<Text margin="40px 0px 0px 0px" font="--headline4" color="--white" as="h4">
							Instant publishing
						</Text>
						<Text margin="12px 0px 0px 0px" font="--base" color="--gray">
							What would it take to transform your most daring design idea into a live web-page? One click and a couple of seconds.
						</Text>
					</Box>
				</Box>
				<Box
					display="flex"
					width="25%"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 0px 0px 0px"
					justify-content="center"
					margin="180px 0px 0px 0px"
					lg-margin="120px 0px 0px 0px"
					lg-width="30%"
					md-width="100%"
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
					>
						<Text
							margin="0px 0px 0px 0px"
							font="--headline3"
							color="--white"
							as="h4"
							md-text-align="center"
						>
							Only 3 steps standing between you and your best web-page yet
						</Text>
					</Box>
				</Box>
				<Box
					width="75%"
					display="flex"
					quarkly-title="Steps"
					margin="180px 0px 0px 0px"
					position="relative"
					lg-margin="120px 0px 0px 0px"
					lg-width="70%"
					md-width="100%"
					md-margin="30px 0px 0px 0px"
					md-text-align="center"
				>
					<Hr
						width="70%"
						height="1px"
						padding="0px 0px 0px 0px"
						background="#4A5060"
						border-color="#4A5060"
						position="absolute"
						left="36px"
						right="auto"
						z-index="1"
						md-width="75%"
						md-margin="16px 0px 16px 40px"
					/>
					<Box
						display="flex"
						width="33.33%"
						flex-direction="column"
						align-items="flex-start"
						padding="0px 0px 0px 36px"
						justify-content="flex-start"
						hd-width="40%"
						margin="0px 0px 0px 0px"
						md-padding="0px 0px 0px 0px"
					>
						<Box
							display="flex"
							flex-direction="column"
							align-items="flex-start"
							margin="0px 60px 0px 0px"
							lg-margin="0px 10px 0px 0px"
							md-align-items="center"
						>
							<Box position="relative" z-index="2" background="#0D0A1A" padding="0px 36px 0px 36px">
								<Text margin="0px 0px 0px 0px" font="--headline3" color="--white" as="h4">
									1
								</Text>
							</Box>
							<Text
								margin="18px 0px 0px 36px"
								font="--lead"
								color="--gray"
								md-text-align="center"
								md-margin="18px 0px 0px 0px"
							>
								Pick a template or start from scratch
							</Text>
						</Box>
					</Box>
					<Box
						display="flex"
						width="33.33%"
						flex-direction="column"
						align-items="flex-start"
						padding="0px 0px 0px 36px"
						justify-content="flex-start"
						hd-width="40%"
						margin="0px 0px 0px 0px"
						md-padding="0px 0px 0px 0px"
					>
						<Box
							display="flex"
							flex-direction="column"
							align-items="flex-start"
							margin="0px 60px 0px 0px"
							lg-margin="0px 10px 0px 0px"
							md-align-items="center"
						>
							<Box position="relative" z-index="2" background="#0D0A1A" padding="0px 36px 0px 36px">
								<Text margin="0px 0px 0px 0px" font="--headline3" color="--white" as="h4">
									2
								</Text>
							</Box>
							<Text
								margin="18px 0px 0px 36px"
								font="--lead"
								color="--gray"
								md-text-align="center"
								md-margin="18px 0px 0px 0px"
							>
								Use familiar tools to design a web-page
							</Text>
						</Box>
					</Box>
					<Box
						display="flex"
						width="33.33%"
						flex-direction="column"
						align-items="flex-start"
						padding="0px 0px 0px 0px"
						justify-content="flex-start"
						hd-width="40%"
						margin="0px 0px 0px 0px"
					>
						<Box
							display="flex"
							flex-direction="column"
							align-items="flex-start"
							margin="0px 60px 0px 0px"
							lg-margin="0px 10px 0px 0px"
							md-align-items="center"
						>
							<Box position="relative" z-index="2" background="#0D0A1A" padding="0px 36px 0px 36px">
								<Text margin="0px 0px 0px 0px" font="--headline3" color="--white" as="h4">
									3
								</Text>
							</Box>
							<Text
								margin="18px 0px 0px 36px"
								font="--lead"
								color="--gray"
								md-text-align="center"
								md-margin="18px 0px 0px 0px"
							>
								Publish your web-page in one click
							</Text>
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
					hover-background="transparent"
					hover-color="--orange"
					md-text-align="center"
					md-margin="60px auto 0px auto"
				>
					Get started
				</Link>
				{" "}
			</Section>
		</Box>
		<Section quarkly-title="Hybrid" padding="120px 0 150px 0" background="--color-white" lg-padding="120px 0 90px 0">
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
			/>
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 0px 0px 0px"
				justify-content="center"
			>
				<Box display="flex" flex-direction="column" align-items="flex-start" margin="0px 70px 0px 0px">
					<Text
						margin="0px 0px 0px 0px"
						font="--decs"
						color="--blue"
						text-transform="uppercase"
						letter-spacing="1.2px"
					>
						Top feature
					</Text>
					<Text
						margin="36px 0px 120px 0px"
						font="--headline1"
						color="--background"
						as="h1"
						letter-spacing="-0.01em"
						hd-font="normal 800 84px/90px &quot;Epilogue&quot;, sans-serif"
						lg-font="normal 800 71px/76px &quot;Epilogue&quot;, sans-serif"
						md-font="normal 800 60px/66px &quot;Epilogue&quot;, sans-serif"
						md-margin="36px 0px 60px 0px"
					>
						The ultimate web
						<br />
						design experience
					</Text>
				</Box>
			</Box>
			<Box
				display="flex"
				width="40%"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 0px 0px 0px"
				justify-content="flex-start"
				hd-width="45%"
				md-width="100%"
				md-margin="0px 0px 72px 0px"
			>
				<Box
					padding="0px 68px 0px 0px"
					display="flex"
					flex-direction="column"
					hd-padding="0px 70px 0px 0px"
					lg-padding="0px 20px 0px 0px"
					md-padding="0px 0px 0px 0px"
				>
					<Box
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						margin="0px 0px 0px 0px"
						hd-margin="0px 0px 0px 0px"
						md-align-items="flex-start"
					>
						<Text
							margin="0px 0px 0px 0px"
							font="--headline25"
							color="--background"
							as="h1"
							letter-spacing="-0.01em"
							lg-font="normal 700 42px/51px &quot;Epilogue&quot;, sans-serif"
							md-font="normal 700 50px/57px &quot;Epilogue&quot;, sans-serif"
						>
							Hybrid grid
						</Text>
						<Text
							margin="24px 0px 0px 0px"
							font="--lead"
							color="#3C3F4F"
							width="77%"
							lg-width="83%"
							md-width="100%"
						>
							Get the best out of both worlds: switch between absolute and grid-based positioning on the fly, or combine them in one workspace with the extremely versatile Hybrid Grid technology.
						</Text>
						<Box
							width="100%"
							margin="42px 0px 0px 0px"
							display="flex"
							flex-wrap="wrap"
							md-flex-wrap="nowrap"
							md-justify-content="center"
							md-align-items="center"
						>
							<Box
								width="190px"
								margin="0px 30px 24px 0px"
								display="flex"
								background="--color-snow"
								border-radius="6px"
								box-shadow="0px 14px 36px rgba(0, 0, 0, 0.03), 0px 30px 60px rgba(0, 0, 0, 0.02)"
								padding="15px 15px 15px 15px"
								flex-direction="column"
								lg-width="125px"
								md-width="100%"
								md-margin="0px 30px 0px 0px"
							>
								<Image loading="lazy" src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Icon.svg?v=2021-05-06T18:59:57.227Z" width="24px" height="24px" />
								<Text margin="15px 0px 0px 0px" font="600 14px/18px --fontFamily-googleInter" color="--spaceGray">
									Fully customizable
								</Text>
							</Box>
							<Box
								width="190px"
								margin="0px 0px 24px 0px"
								display="flex"
								background="--color-snow"
								border-radius="6px"
								box-shadow="0px 14px 36px rgba(0, 0, 0, 0.03), 0px 30px 60px rgba(0, 0, 0, 0.02)"
								padding="15px 15px 15px 15px"
								flex-direction="column"
								lg-width="125px"
								md-margin="0px 30px 0px 0px"
								md-width="100%"
							>
								<Image loading="lazy" src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Icon1.svg?v=2021-05-06T19:04:41.145Z" width="24px" height="24px" />
								<Text margin="15px 0px 0px 0px" font="600 14px/18px --fontFamily-googleInter" color="--spaceGray">
									Precise and consistent
								</Text>
							</Box>
							<Box
								width="190px"
								margin="0px 0px 0px 0px"
								display="flex"
								background="--color-snow"
								border-radius="6px"
								box-shadow="0px 14px 36px rgba(0, 0, 0, 0.03), 0px 30px 60px rgba(0, 0, 0, 0.02)"
								padding="15px 15px 15px 15px"
								flex-direction="column"
								hd-margin="0px 30px 0px 0px"
								lg-width="125px"
								md-width="100%"
								md-margin="0px 0px 0px 0px"
							>
								<Image loading="lazy" src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Icon2.svg?v=2021-05-06T19:04:51.315Z" width="24px" height="24px" />
								<Text margin="15px 0px 0px 0px" font="600 14px/18px --fontFamily-googleInter" color="--spaceGray">
									Responsive by design
								</Text>
							</Box>
						</Box>
						<Box display="flex" margin="90px 0px 0px 0px" quarkly-title="Buttons" md-margin="48px 0px 0px 0px">
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
				width="60%"
				position="relative"
				align-items="center"
				justify-content="flex-end"
				hd-width="55%"
				hd-align-items="flex-start"
				md-width="100%"
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
					src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Panel.svg?v=2021-05-06T18:28:25.785Z"
					position="absolute"
					left="-140px"
					right="0px"
					bottom="auto"
					top="-50px"
					z-index="2"
					hd-max-height="337px"
					hd-top="-40px"
					hd-left="-90px"
					md-display="none"
				/>
			</Box>
			{" "}
		</Section>
		<Section
			quarkly-title="Features"
			padding="120px 0 215px 0"
			background="--color-black"
			lg-padding="120px 0 120px 0"
			md-padding="72px 0 95px 0"
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
			padding="100px 0 220px 0"
			background="--color-black"
			lg-padding="100px 0 160px 0"
			md-padding="72px 0 100px 0"
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
			/>
			<Box
				display="flex"
				width="40%"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 0px 0px 0px"
				justify-content="flex-start"
				hd-width="40%"
				lg-width="35%"
				md-width="100%"
				md-align-items="center"
				md-justify-content="center"
				md-margin="0px 0px 15px 0px"
			>
				<Box
					padding="0px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
				>
					<Box display="flex" flex-direction="column" align-items="flex-start" margin="0px 0px 0px 0px">
						<Text
							margin="0px 0px 0px 0px"
							font="--decs"
							color="--blue"
							text-transform="uppercase"
							letter-spacing="1.2px"
						>
							Web ecosystem
						</Text>
					</Box>
					<Box
						display="flex"
						flex-direction="column"
						align-items="flex-start"
						margin="0px 0px 0px 0px"
						position="relative"
						lg-margin="0px 20px 0px 0px"
						md-margin="0px 0px 0px 0px"
						md-padding="0px 30px 0px 30px"
						md-align-items="center"
					>
						<Text
							margin="24px 0px 0px 0px"
							font="--headline25"
							color="#7F8A9E"
							as="h1"
							letter-spacing="-0.01em"
							width="100%"
							hd-font="normal 700 50px/60px &quot;Epilogue&quot;, sans-serif"
							lg-font="normal 700 42px/51px &quot;Epilogue&quot;, sans-serif"
							md-text-align="center"
						>
							One Vision
							<br />
							<Span color="--white">
								One Solution
							</Span>
						</Text>
						<Text margin="30px 0px 0px 0px" font="--lead" color="--gray" md-text-align="center">
							From an occasional freelance gig to a full-fledged web design studio – Graphite has all the tools necessary to get the job done. Everything you need – packed in one versatile reliable solution.
						</Text>
						<Box display="flex" margin="90px 0px 0px 0px" quarkly-title="Buttons" md-margin="60px 0px 0px 0px">
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
								Get started
							</Link>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box
				display="flex"
				width="60%"
				position="relative"
				align-items="center"
				justify-content="flex-start"
				hd-width="60%"
				flex-direction="row"
				flex-wrap="wrap"
				padding="0px 0px 0px 0px"
				lg-width="65%"
				lg-justify-content="flex-end"
				md-width="100%"
				md-padding="65px 0px 0px 0px"
			>
				<Box
					display="flex"
					flex-wrap="wrap"
					align-items="center"
					margin="0px 0px 0px 90px"
					lg-margin="0px 0px 0px 0px"
				>
					<Box
						display="flex"
						width="50%"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						align-items="center"
						justify-content="center"
					>
						<Box width="50%">
							<Text margin="0px 0px 0px 0px" font="--menu" color="--white">
								Layout engine
							</Text>
							<Text margin="10px 0px 0px 0px" font="--footer" color="--gray">
								Build your website using auto layout and grid tools
							</Text>
						</Box>
					</Box>
					<Box
						display="flex"
						width="50%"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						align-items="center"
						justify-content="center"
					>
						<Box width="50%">
							<Text margin="0px 0px 0px 0px" font="--menu" color="--white">
								Code tools
							</Text>
							<Text margin="10px 0px 0px 0px" font="--footer" color="--gray">
								Embed live HTML code to your website
							</Text>
						</Box>
					</Box>
					<Box
						display="flex"
						width="33.333%"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						align-items="flex-end"
						justify-content="center"
					>
						<Box width="80%">
							<Text margin="0px 0px 0px 0px" font="--menu" color="--white">
								Design system
							</Text>
							<Text margin="10px 0px 0px 0px" font="--footer" color="--gray">
								Maintain visual consistency of your websites
							</Text>
						</Box>
					</Box>
					<Box
						display="flex"
						width="33.333%"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						min-height="260px"
						background="linear-gradient(0deg,rgba(0, 0, 0, 0.3) 0%,rgba(0, 0, 0, 0.3) 57.1%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Figure3.svg?v=2021-05-08T06:54:57.985Z) center center/contain no-repeat scroll padding-box"
					>
						<Image loading="lazy" src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/LogoKub.svg?v=2021-05-08T07:01:45.955Z" width="115px" height="auto" />
					</Box>
					<Box
						display="flex"
						width="33.333%"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						align-items="flex-start"
						justify-content="center"
						lg-align-items="flex-end"
					>
						<Box width="80%" margin="0px 0px 0px 10px">
							<Text margin="0px 0px 0px 0px" font="--menu" color="--white">
								Content management
							</Text>
							<Text margin="10px 0px 0px 0px" font="--footer" color="--gray">
								Integrate your data from a headless CMS with your website
							</Text>
						</Box>
					</Box>
					<Box
						display="flex"
						width="50%"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						align-items="center"
						justify-content="center"
					>
						<Box width="60%">
							<Text margin="0px 0px 0px 0px" font="--menu" color="--white">
								Asset managment
							</Text>
							<Text margin="10px 0px 0px 0px" font="--footer" color="--gray">
								Keep your images, vector, shapes and icons in one place
							</Text>
						</Box>
					</Box>
					<Box
						display="flex"
						width="50%"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						align-items="center"
						justify-content="center"
					>
						<Box width="60%" margin="20px 0px 0px 0px">
							<Text margin="0px 0px 0px 0px" font="--menu" color="--white">
								Hosting, domains, and SSL
							</Text>
							<Text margin="10px 0px 0px 0px" font="--footer" color="--gray">
								Get your website live
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
			{" "}
		</Section>
		<Section quarkly-title="Roadmap" padding="120px 0 120px 0" background="--color-white">
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
			/>
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				align-items="flex-start"
				padding="0px 0px 0px 0px"
				justify-content="center"
			>
				<Box
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					margin="0px 70px 0px 0px"
					width="100%"
				>
					<Text
						margin="0px 0px 0px 0px"
						font="--decs"
						color="--blue"
						text-transform="uppercase"
						letter-spacing="1.2px"
					>
						UPcOMING FeATURES
					</Text>
					<Text
						margin="36px 0px 120px 0px"
						font="--headline25"
						color="--background"
						as="h1"
						letter-spacing="-0.01em"
						hd-font="normal 700 50px/60px &quot;Epilogue&quot;, sans-serif"
					>
						Roadmap
					</Text>
				</Box>
			</Box>
			{" "}
		</Section>
		<Section quarkly-title="LoveIt" padding="90px 0 130px 0" background="--color-black" md-padding="90px 0 100px 0">
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
			/>
			<Box
				display="flex"
				width="100%"
				flex-direction="row"
				align-items="center"
				padding="0px 0px 0px 0px"
				justify-content="center"
				flex-wrap="wrap"
			>
				<Box
					display="flex"
					flex-direction="column"
					align-items="center"
					margin="0px 70px 42px 0px"
					width="100%"
				>
					<Components.Masks font="--decs">
						You’ll love it
					</Components.Masks>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					margin="0px 0px 0px 0px"
					width="33.3333%"
				>
					<Text margin="0px 0px 24px 0px" color="--white" font="--lead">
						Comfort
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Image
							loading="lazy"
							width="10px"
							height="10px"
							src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/shape1.svg?v=2021-05-06T20:00:22.309Z"
							margin="0px 12px 0px 0px"
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
							margin="0px 12px 0px 0px"
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
							margin="0px 12px 0px 0px"
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
				>
					<Text margin="0px 0px 24px 0px" color="--white" font="--lead">
						Comfort
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Image
							loading="lazy"
							width="10px"
							height="10px"
							src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/shape1.svg?v=2021-05-06T20:00:22.309Z"
							margin="0px 12px 0px 0px"
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
							margin="0px 12px 0px 0px"
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
							margin="0px 12px 0px 0px"
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
				>
					<Text margin="0px 0px 24px 0px" color="--white" font="--lead">
						Comfort
					</Text>
					<Box display="flex" align-items="center" margin="0px 0px 9px 0px">
						<Image
							loading="lazy"
							width="10px"
							height="10px"
							src="https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/shape1.svg?v=2021-05-06T20:00:22.309Z"
							margin="0px 12px 0px 0px"
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
							margin="0px 12px 0px 0px"
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
							margin="0px 12px 0px 0px"
						/>
						<Text margin="0px 0px 0px 0px" color="--gray" font="--base">
							Absolute & Auto-Layout
						</Text>
					</Box>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					align-items="center"
					margin="96px 0px 0px 0px"
					width="100%"
					justify-content="center"
					padding="150px 0px 150px 0px"
					background="linear-gradient(0deg,rgba(0, 0, 0, 0.7) 0%,rgba(0, 0, 0, 0.7) 57.1%),rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/Figure2.svg?v=2021-05-06T20:06:00.273Z) center center/contain no-repeat scroll padding-box"
					md-padding="100px 0px 100px 0px"
				>
					<Text
						margin="0px 0px 18px 0px"
						color="--white"
						font="--headline25"
						letter-spacing="-0.01em"
						hd-font="normal 700 50px/60px &quot;Epilogue&quot;, sans-serif"
						lg-font="normal 700 50px/60px &quot;Epilogue&quot;, sans-serif"
						md-font="normal 700 60px/66px &quot;Epilogue&quot;, sans-serif"
						md-text-align="center"
					>
						Try an entirely new approach{" "}
					</Text>
					<Text
						margin="0px 0px 36px 0px"
						color="--gray"
						font="--headline4"
						letter-spacing="-0.01em"
						hd-font="normal 500 20px/27px &quot;Inter&quot;, sans-serif"
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
						hover-background="transparent"
						hover-color="--orange"
					>
						Get started
					</Link>
				</Box>
			</Box>
			{" "}
		</Section>
		<Section quarkly-title="Footer" padding="60px 0 84px 0" background="--color-black">
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
			/>
			<Box
				display="flex"
				width="100%"
				flex-direction="row"
				align-items="center"
				padding="0px 0px 0px 0px"
				justify-content="center"
				flex-wrap="wrap"
			>
				<Box
					display="flex"
					flex-direction="column"
					align-items="center"
					margin="0px 0px 0px 0px"
					width="100%"
					justify-content="center"
					padding="0px 0px 0px 0px"
				>
					<Box
						display="flex"
						align-items="center"
						justify-content="center"
						quarkly-title="SocialMedia"
						margin="0px 0px 36px 0px"
					>
						<Link
							href="#"
							font="normal 800 20px/27px --fontFamily-googleEpilogue"
							color="--white"
							text-decoration-line="initial"
							margin="0px 18px 0px 18px"
						>
							Facebook
						</Link>
						<Link
							href="#"
							font="normal 800 20px/27px --fontFamily-googleEpilogue"
							color="--white"
							text-decoration-line="initial"
							margin="0px 18px 0px 18px"
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
						>
							Terms of use
						</Link>
						<Link
							href="#"
							font="--footer"
							color="#7F8A9E"
							text-decoration-line="initial"
							margin="0px 18px 0px 18px"
						>
							Privacy policy
						</Link>
						<Link
							href="#"
							font="--footer"
							color="#7F8A9E"
							text-decoration-line="initial"
							margin="0px 18px 0px 18px"
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
				{".gradient {\n-webkit-background-clip: text !important;\n    -webkit-text-fill-color: transparent;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});