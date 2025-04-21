import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

// Reused styled components
import {
	TitleSection,
	ContainerTitleSection,
} from "@/styles/ui";

// Icons
import { ShieldLockFill } from "@styled-icons/bootstrap/ShieldLockFill";
import { NetworkCheck } from "@styled-icons/material-outlined/NetworkCheck";
import { Building } from "@styled-icons/fa-solid/Building";

// Styled section
const SectionExperience = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	padding-top: 60px;
	width: 100%;
	min-height: 100vh;
	padding-top: 60px;
`;

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 60%;
  gap: 20px;

  @media (max-width: 1600px) {
    width: 85%;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ExperienceCard = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  padding: 20px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.backgroundPage};
  transition: 0.3s;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 20px ${(props) => props.theme.colors.branding}5E;
  }
`;

const Title = styled.h4`
  font-size: 20px;
  color: ${(props) => props.theme.colors.branding};
  margin-bottom: 10px;
`;

const Company = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors.subtitle};
`;

const Period = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.colors.caption};
`;

const Description = styled.p`
  margin-top: 10px;
  color: ${(props) => props.theme.colors.body};
`;

const Skills = styled.p`
  margin-top: 8px;
  color: ${(props) => props.theme.colors.body};

  strong {
    color: ${(props) => props.theme.colors.branding};
  }
`;

const ChipStack = styled.div`
  color: ${(props) =>
		props.active === true
			? props.theme.colors.backgroundSecondary
			: props.theme.colors.inactiveTitle};
  background-color: ${(props) =>
		props.active === true
			? props.theme.colors.branding
			: props.theme.colors.backgroundSecondary};
  display: flex;
  gap: 10px;
  margin-top: 15px;

  svg {
    width: 22px;
    height: 22px;
    color: ${(props) => props.theme.colors.branding};
  }
`;

const experiences = [
	{
		title: "Cyber Security Specialist",
		company: "Centilytics",
		period: "Feb 2024 – Present • 1 yr 3 mos",
		location: "On-site",
		description:
			"Looking after the entire security posture of the company, including web application security for the company and its customers.",
		skills: "Cybersecurity, Website application Pentesting, Risk Management, and more.",
		icons: [<ShieldLockFill key="lock" />, <Building key="building" />],
	},
	{
		title: "Network Security Engineer",
		company: "ISOURCE TECHNOLOGIES PVT. LTD.",
		period: "Aug 2022 – Feb 2024 • 1 yr 7 mos",
		location: "Dwarka, Delhi, India • On-site",
		description:
			"Managed firewalls, endpoint security, SIEM tools, business switches, and security groups. Performed vulnerability assessments as a SOC engineer and patched security issues.",
		skills: "Security Compliance, Networking, Network Security and more.",
		icons: [<NetworkCheck key="network" />, <ShieldLockFill key="lock" />],
	},
];

export default function Experience() {
	return (
		<SectionExperience id="section-experiencia">
			<ContainerTitleSection>
				<Fade direction="down" triggerOnce>
					<TitleSection>Experience</TitleSection>
				</Fade>
			</ContainerTitleSection>

			<ContainerGrid>
				{experiences.map((exp, index) => (
					<Fade key={index} direction="up" triggerOnce>
						<ExperienceCard>
							<Title>{exp.title}</Title>
							<Company>{exp.company}</Company>
							<Period>{exp.period}</Period>
							<Description>{exp.description}</Description>
							<Skills><strong>Skills:</strong> {exp.skills}</Skills>
							<ChipStack>{exp.icons}</ChipStack>
						</ExperienceCard>
					</Fade>
				))}
			</ContainerGrid>
		</SectionExperience>
	);
}
