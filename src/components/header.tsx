import React from "react";

interface HeaderProps {
  title: string;
  subTitle: string;
  description: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="prose">
      <h1 style={{marginBottom: 0}}>{props.title}</h1>
      <i>{props.subTitle}</i>
      <p>{props.description}</p>
    </header>
  )
}
