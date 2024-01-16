import React from "react";
import styles from "./MyComponent.module.css";
import Profiles from "./Profiles";

interface Props {
  title: string;
  description: string;
}

function MyComponent({ title, description }: Props) {
  //     const{name} = props
  //   const name = props.name;

  //const name = "Peace";

  return (
    <React.Fragment>
      <h1 style={{ fontSize: "5rem" }}>{title || "Hello!!!!!!!!!!"}</h1>
      <p className={styles.readTheDocs}>{description}</p>

      <Profiles />
    </React.Fragment>
  );
}

export default MyComponent;
