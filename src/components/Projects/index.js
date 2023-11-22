import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to data related. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'All' ?
            <ToggleButton active value="All" onClick={() => setToggle('All')}>All</ToggleButton>
            :
            <ToggleButton value="All" onClick={() => setToggle('All')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Web development' ?
            <ToggleButton active value="Web development" onClick={() => setToggle('Web development')}>Web development</ToggleButton>
            :
            <ToggleButton value="Web development" onClick={() => setToggle('Web development')}>Web development</ToggleButton>
          }
          <Divider />
          {toggle === 'Data related' ?
            <ToggleButton active value="Data related" onClick={() => setToggle('Data related')}>Data related</ToggleButton>
            :
            <ToggleButton value="Data related" onClick={() => setToggle('Data related')}>Data related</ToggleButton>
          }
          <Divider />
          {toggle === 'Core hardware' ?
            <ToggleButton active value="Core hardware" onClick={() => setToggle('Core hardware')}>Core hardware</ToggleButton>
            :
            <ToggleButton value="Core hardware" onClick={() => setToggle('Core hardware')}>Core hardware</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects