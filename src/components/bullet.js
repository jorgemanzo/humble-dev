import styled from '@emotion/styled'

const Bullet = styled.li`
    margin-top: 20px;
    margin-left: calc(40px + (300 - 40) * ((100vw - 300px) / (1600 - 300)));
    margin-right: calc(40px + (300 - 40) * ((100vw - 300px) / (1600 - 300)));
    text-align: left;
`
export default Bullet
