import React from 'react'
import { InternshipList } from '../../../data/ProjectData'
import ScrollAnimation from 'react-animate-on-scroll'
import { Card, CardLeft, CardRight , H1 } from './InternshipCardElement'

const InternshipCard = () => {
  return (
    <>
    {InternshipList.map((list,index)=>(
        <ScrollAnimation animateIn='fadeInLeft' key={index}>
            <Card>
                <CardLeft>
                    <H1 style={{marginBottom:"1rem"}}> <b>{list.role}</b></H1>
                    <h2 style={{fontSize:"1.6rem" , marginBottom:"1rem"}}>{list.company}</h2>
                    <h2 >{list.period}</h2>
                </CardLeft>
                <CardRight>
                    <p>
                        {list.description}
                    </p>
                </CardRight>
            </Card>
        </ScrollAnimation>
    ))}
    </>
  )
}

export default InternshipCard