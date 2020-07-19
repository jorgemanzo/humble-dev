import React from 'react'
import Experience from '../components/experience'
import workExperience from '../texts/resume.json'
import projects from '../texts/projects.json'
import education from '../texts/education.json'
import objective from '../texts/objective.json'
import SkillsTable from '../components/table'
import styled from '@emotion/styled'
import Link from '../components/simpleLink'
import Mail from '../images/mail.svg'
const Resume = () => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        flex-flow: center;
    `
    const Section = styled.h1`
        margin-top: 50px;
        font-size: calc(18pt + (32 - 18) * ((100vw - 300px) / (1600 - 300)));
    `
    const PaddedCode = styled.code`
        margin-top: 25px;
        margin-right: 5px;
    `
    return (
        <div>
            <Container>
                <PaddedCode>
                    <Link href="mailto:jorge@humble-dev.app">jorge@humble-dev.app</Link>
                    &nbsp;
                    <img src={Mail} alt="Email Jorge Manzo"></img>
                </PaddedCode>
                <Section>Objective</Section>
                {objective.map( (work, index) => 
                        <Experience
                            key={index}
                            title={work.title}
                            employer={work.employer}
                            dates={work.dates}
                            description={work.description}
                            bullets={work.bullets}
                            link={work.link}
                        />
                )}
                <Section>Education</Section>
                {education.map( (work, index) => 
                        <Experience
                            key={index}
                            title={work.title}
                            employer={work.employer}
                            dates={work.dates}
                            description={work.description}
                            bullets={work.bullets}
                            link={work.link}
                        />
                )}
                <Section>Work Experience</Section>
                {workExperience.map( (work, index) => 
                        <Experience
                            key={index}
                            title={work.title}
                            employer={work.employer}
                            dates={work.dates}
                            description={work.description}
                            bullets={work.bullets}
                            link={work.link}
                        />
                )}
                <Section>Projects</Section>
                {projects.map( (work, index) => 
                        <Experience
                            key={index}
                            title={work.title}
                            employer={work.employer}
                            dates={work.dates}
                            description={work.description}
                            bullets={work.bullets}
                            link={work.link}
                        />
                )}
                <Section>Technical Skill</Section>
                <SkillsTable/>
            </Container>
        </div>
    )
}

export default Resume