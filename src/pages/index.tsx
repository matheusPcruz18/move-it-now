import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile'
import { Container } from "../styles/Home";

import Head from 'next/head'
import { ChallengeBox } from "../components/ChallengeBox";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Início | Move it now</title>
      </Head>
      <ExperienceBar/>

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
    </Container>
  )
}
