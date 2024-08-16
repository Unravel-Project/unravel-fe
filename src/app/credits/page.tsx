"use client";
import "./styles.css";
import CONTRIBUTORS from "./constants/contributors";

const Credits = () => {
  return (
    <div className="credit-panel">
        <div className="credit-intro">
            <h2>
                This page is dedicated for those who put their effort, time, and skills into making our project a huge success
            </h2>
            <p>
                Your dedication has truly made a difference, and we are grateful for your invaluable contributions
            </p>
        </div>
        <div className="bumper">
          <span>UNRAVEL</span>
          <span>Malang</span>
          <span>proudly</span>
          <span>present</span>
        </div>
        <div className="credit-content">
          <h1>contributors</h1>
          { CONTRIBUTORS.map(item => <CreditItem {...item} /> )}
        </div>
    </div>
  )
}

function CreditItem(props: Contributors): React.ReactNode {
  const { department, contributors } = props;
  return (
    <div className="credit-item">
      <h3>{ department }</h3>
      <ol>
        {contributors.map(person => <CreditName {...person} />)}
      </ol>
    </div>
  )
}

function CreditName(props: UnravelTeam): React.ReactNode {
  const { name, socialMedia } = props;
  return (
    <li>{name}</li>
  )
}

export default Credits;
