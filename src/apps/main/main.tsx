import React from 'react';
import {Header} from "../../components/header";
import {ExperienceCard} from "../../components/experience-card";

export function Main() {
  return (
    <div className="container mx-auto">
      <Header
        title="Denis Sakharov"
        subTitle="Frontend Engineer at Motorsport Network"
        description="I like interfaces, I know basic design rules,
          I can distinguish a bad interface from a good one and explain
          what is wrong. From July 2016, gradually began to move away
          from backend development to frontend and study. From January
          2017 switched to frontend development. More than a year engaged
          in web-development. He was trained in Abak-PRESS and led his own
          small project. I know how to negotiate, achieving the desired
          result. I can explain complex things in simple language and
          convey to the interlocutor the correct meaning."
      />
      <section className="prose" style={{marginTop: '2em'}}>
        <h2>Experience</h2>
        <ExperienceCard
          title="Motorsport Network - Frontend Developer"
          description={[
            "I came to this company immediately to the position of tech lead (undeservedly at that moment) and received a person for training. For half a year I taught him the basics of React.js, including how to manage SSR, configure webpack, etc. After six months, the student was separated from me and gave him a new project to develop, which he still heads. What about me? I supported D3 widgets. Then I get a new project and new position at the end of 2017.",
            "At the end of 2017, I took over the Motorsport TV project and have been working on it to this day. At that moment, there were about 500 videos on it, no more than 300 active users and terrible performance problems (with 200-300 active users, the entire infrastructure was falling. Scaling was not possible).\n" +
            "\n" +
            "            - We rewrote half of the current code to TypeScript, all the new code was written on it at once.\n" +
            "            - I communicated with the business and directly influenced decisions on the development of the service.\n" +
            "            - I introduced corporate frontend development standards.\n" +
            "            - I built the management of the frontend team in such a way that the planned tasks were solved on time, and urgent ones within an hour.\n" +
            "            - I eliminated the bus factor by immersing developers in all parts of the project.\n" +
            "            - I developed API Gateway on NestJS with the team.\n" +
            "            - I participated in the selection of technologies suitable for the project for the backend and frontend.\n" +
            "            - I interviewed about 50, hired about 20, trained 10 frontend developers. 2 of whom quit for personal reasons, 2 went to lead positions and one became a leader in the Motorsport Network on another project."
          ]}
        />
        <ExperienceCard
          title="Infotech - Full Stack Developer"
          description="Work consisted in the development of ALL, which is connected with the web. In the first month I developed a multi-threaded parser and collect about 2TB of data. Then the decision was agreed with the management to completely switch to the front to develop the SPA. Stack was elected React + Redux. But after a while, the management could not provide data to complete the project and it was decided to suspend development, and my task included writing parsers on JS (node.js)."
        />
        <ExperienceCard
          title="Freelance - Back End developer"
          description="Developed sites, which is a shame to show. Almost immediately began working in a team of two people, later hooked up the third. The first developer was much more experienced than me and it gave its results - we took the second project, then the third, then the fourth. The fourth project (kaspado.ru) turned out to be much larger and longer than expected, and there was no longer any money left to complete the project, so I decided to get a job."
        />
        <ExperienceCard
          title="Abak Press - Junior Developer"
          description="The first job in the field of development. For the first month, I went through corporate training for newbies (git, http, sql, linux) and was allowed to make minor edits to the CRM project, which, in the opinion of PM, I performed for a long time. I was fired on probation due to lack of experience."
        />
      </section>
    </div>
  );
}
