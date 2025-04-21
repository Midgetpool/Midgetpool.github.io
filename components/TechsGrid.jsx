import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

// Icons
import { Visualstudiocode } from "@styled-icons/simple-icons/Visualstudiocode";
import { Sqlite } from "@styled-icons/simple-icons/Sqlite";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Python } from "@styled-icons/boxicons-logos/Python";
import { Git } from "@styled-icons/boxicons-logos/Git";
import { Oracle } from "@styled-icons/simple-icons/Oracle";
import { Mysql } from "@styled-icons/simple-icons/Mysql";
import { Linux } from "@styled-icons/fa-brands/Linux";
import { Windows } from "@styled-icons/boxicons-logos/Windows";
import { Kalilinux } from "@styled-icons/simple-icons/Kalilinux";
import { Cisco } from "@styled-icons/simple-icons/Cisco";
import { Fortinet } from "@styled-icons/simple-icons/Fortinet";
import { Wireshark } from "@styled-icons/simple-icons/Wireshark";

const TechGrid = styled.footer`
	padding-top: 30px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	grid-column-gap: 5px;
	grid-row-gap: 15px;
	transition: all 0.3s ease;
	width: 100%;
	text-align: center;
	margin: auto;
`;

const Tech = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-width: 100px;
	height: 44px;
	padding: 15px;
	border-radius: 4px;

	svg {
		width: 34px;
		height: 34px;
		color: ${(props) => props.theme.colors.backgroundSecondary};
		transition: all 0.3s ease;
	}

	svg:hover {
		color: ${(props) => props.theme.colors.branding};
	}
`;

export const TitleSection = styled.h2`
	font-weight: 700;
	color: ${(props) => props.theme.colors.branding};
	font-size: 26px;
	padding-top: 30px;
	text-align: center;

	@media (max-width: 900px) {
		font-size: 18px;
	}
`;

export default function TechsGrid(props) {
	return (
		<TechGrid>
			<Fade triggerOnce><Tech><Kalilinux /></Tech></Fade>
			<Fade triggerOnce><Tech><Visualstudiocode /></Tech></Fade>
			<Fade triggerOnce><Tech><Sqlite /></Tech></Fade>
			<Fade triggerOnce><Tech><Javascript /></Tech></Fade>
			<Fade triggerOnce><Tech><Python /></Tech></Fade>
			<Fade triggerOnce><Tech><Git /></Tech></Fade>
			<Fade triggerOnce><Tech><Mysql /></Tech></Fade>
			<Fade triggerOnce><Tech><Linux /></Tech></Fade>
			<Fade triggerOnce><Tech><Windows /></Tech></Fade>
			<Fade triggerOnce><Tech><Cisco /></Tech></Fade>
			<Fade triggerOnce><Tech><Fortinet /></Tech></Fade>
			<Fade triggerOnce><Tech><Wireshark /></Tech></Fade>
		</TechGrid>
	);
}
