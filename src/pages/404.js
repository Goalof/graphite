import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Graphite — Create real sites
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/60926aa42061a7001e1764a4/images/favicon.png?v=2021-05-13T15:36:21.485Z"} type={"image/x-icon"} />
			<meta name={"msapplication-TileColor"} content={"#020203"} />
		</Helmet>
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