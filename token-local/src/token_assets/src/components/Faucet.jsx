import React, { useState } from "react";
import { token } from "../../../declarations/token";

function Faucet(props) {
  const [isDisabled, setDisable] = useState(false);
  const [buttonText, setText] = useState("Give me tokens");

  async function handleClick(event) {
    setDisable(true);
    const result = await token.payOut();
    console.log("payout: " + result);
    setText(result);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          💰
        </span>
        Tokens
      </h2>
      <label>
        Get your free tokens here! Claim 10,000 tokens to 2vxsx-fae
      </label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
