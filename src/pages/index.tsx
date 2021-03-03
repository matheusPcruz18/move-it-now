import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile'
import { Container } from "../styles/Home";

import { GetServerSideProps } from 'next'

import Head from 'next/head'
import { ChallengeBox } from "../components/ChallengeBox";

import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { Sidebar } from "../components/SideBar";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Container>
        <Head>
          <title>Início | Move it now</title>
        </Head>
        <Sidebar />
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div className="leftSide">
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div className="rightSide">
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level), 
      currentExperience: Number(currentExperience), 
      challengesCompleted: Number(challengesCompleted), 
    }
  }
}
