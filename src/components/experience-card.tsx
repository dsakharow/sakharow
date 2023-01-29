import React from "react";

interface ExperienceCardProps {
  title: string;
  description: string | string[]
}

export const ExperienceCard: React.FC<ExperienceCardProps> = (props) => {
  const descriptionArray = Array.isArray(props.description) ? props.description : [props.description];

  return (
    <article>
      <h3>{props.title}</h3>
      {descriptionArray.map(dsc => (<p key={dsc}>{dsc}</p>))}
    </article>
  )
}
