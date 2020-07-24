import React from 'react'
import Experience from '../components/experience'
import workExperience from '../texts/resume.json'
import projects from '../texts/projects.json'
import education from '../texts/education.json'
import objective from '../texts/objective.json'
import SkillsTable from '../components/table'
import Section from '../components/section'
import styled from '@emotion/styled'
import Link from '../components/simpleLink'
import Mail from '../images/mail.svg'
const Resume = () => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        flex-flow: center;
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
                <Section 
                    sectionTitle="Objective"
                    sectionName="objective_section"
                />
                {objective.map( (work, index) => 
                        <Experience
                            key={index}
                            data={work}
                        />
                )}
                <Section 
                    sectionTitle="Education"
                    sectionName="education_section"
                />
                {education.map( (work, index) => 
                        <Experience
                            key={index}
                            data={work}
                        />
                )}
                <Section 
                    sectionTitle="Work Experience"
                    sectionName="work_section"
                />
                {workExperience.map( (work, index) => 
                        <Experience
                            key={index}
                            data={work}
                        />
                )}
                <Section 
                    sectionTitle="Projects"
                    sectionName="projects_section"
                />
                {projects.map( (work, index) => 
                        <Experience
                            key={index}
                            data={work}
                        />
                )}
                <Section 
                    sectionTitle="Technical Skills"
                    sectionName="skills_section"
                />
                <SkillsTable/>
            </Container>
        </div>
    )
}

export default Resume