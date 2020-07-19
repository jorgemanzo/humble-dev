import React from 'react'
import Experience from '../components/experience'
import workExperience from '../texts/resume.json'
import projects from '../texts/projects.json'
import education from '../texts/education.json'
import objective from '../texts/objective.json'
import SkillsTable from '../components/table'
import styled from '@emotion/styled'
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
    return (
        <div>
            <Container>
                <Section>Objective</Section>
                {objective.map( work => 
                        <Experience
                            title={work.title}
                            employer={work.employer}
                            dates={work.dates}
                            description={work.description}
                            bullets={work.bullets}
                        />
                )}
                <Section>Education</Section>
                {education.map( work => 
                        <Experience
                            title={work.title}
                            employer={work.employer}
                            dates={work.dates}
                            description={work.description}
                            bullets={work.bullets}
                        />
                )}
                <Section>Work Experience</Section>
                {workExperience.map( work => 
                        <Experience
                            title={work.title}
                            employer={work.employer}
                            dates={work.dates}
                            description={work.description}
                            bullets={work.bullets}
                        />
                )}
                <Section>Projects</Section>
                {projects.map( work => 
                        <Experience
                            title={work.title}
                            employer={work.employer}
                            dates={work.dates}
                            description={work.description}
                            bullets={work.bullets}
                        />
                )}
                <Section>Technical Skill</Section>
                <SkillsTable/>
            </Container>
        </div>
    )
}

export default Resume