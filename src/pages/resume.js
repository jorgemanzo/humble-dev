import React from 'react'
import Experience from '../components/experience'
import workExperience from '../texts/resume.json'
import styled from '@emotion/styled'
const Resume = () => {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
        flex-flow: center;
    `
    return (
        <div>
            <Container>
                {workExperience.map( work => 
                        <Experience
                            title={work.title}
                            employer={work.employer}
                            dates={work.dates}
                            description={work.description}
                            bullets={work.bullets}
                        />
                )}
            </Container>
        </div>
    )
}

export default Resume