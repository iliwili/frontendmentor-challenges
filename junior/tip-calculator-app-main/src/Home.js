import Logo from "./assets/images/logo.svg";

import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [tipAmount, setTipAmount] = useState("0.00");
  const [total, setTotal] = useState("0.00");

  const updateTip = (evt) => {
    setTip(evt);
    setCustomTip(evt);

    if (bill !== "" && peopleCount !== "") {
      updateResult(bill, peopleCount, evt);
    }
  };

  const updateInput = (evt) => {
    const parent = evt.target.parentElement;
    const id = evt.target.id;

    if (evt.target.value === "" || evt.target.value === "0") {
      if (!parent.classList.contains("error")) {
        parent.classList.add("error");
      }
    } else {
      if (parent.classList.contains("error")) {
        parent.classList.remove("error");
      }
    }

    if (id === "bill") {
      setBill(evt.target.value);
      if (evt.target.value !== "" && peopleCount !== "") {
        updateResult(evt.target.value, peopleCount, tip);
      }
    } else {
      setPeopleCount(evt.target.value);
      if (bill !== "" && evt.target.value !== "") {
        updateResult(bill, evt.target.value, tip);
      }
    }
  };

  const updateResult = (bill, peopleCount, tip) => {
    let tipTotal = 0;
    let tipAmount = 0;
    let total = 0;
    let nBill = Number.parseFloat(bill === "" ? 0.0 : Math.abs(bill));
    let nTip = Number.parseFloat(tip === "" ? 0.0 : Math.abs(tip));
    let nPeopelCount = Number.parseFloat(
      peopleCount === "" ? 0.0 : Math.abs(peopleCount)
    );

    if (nBill !== 0 && nPeopelCount !== 0) {
      tipTotal = nBill * (nTip / 100);
      tipAmount = (tipTotal / nPeopelCount).toFixed(2);
      total = ((nBill + tipTotal) / nPeopelCount).toFixed(2);

      setTotal(total);
      setTipAmount(tipAmount);
    }
  };
  return (
    <main>
      <img className="logo" src={Logo} alt="logo" />
      <section>
        <div className="calculations">
          <div className="bill">
            <h6 className="title">Bill</h6>
            <div className="input-group">
              <input
                id="bill"
                type="number"
                placeholder="0"
                value={bill}
                min="0"
                onChange={updateInput}
              />
              <span className="error-text">Can't be zero</span>
            </div>
          </div>
          <div className="tip">
            <h6>Select Tip %</h6>

            <div className="tips-grid">
              <button
                className={tip === 5 ? "active" : ""}
                onClick={() => updateTip(5)}
              >
                5%
              </button>
              <button
                className={tip === 10 ? "active" : ""}
                onClick={() => updateTip(10)}
              >
                10%
              </button>
              <button
                className={tip === 15 ? "active" : ""}
                onClick={() => updateTip(15)}
              >
                15%
              </button>
              <button
                className={tip === 25 ? "active" : ""}
                onClick={() => updateTip(25)}
              >
                25%
              </button>
              <button
                className={tip === 50 ? "active" : ""}
                onClick={() => updateTip(50)}
              >
                50%
              </button>
              <div className="input-group">
                <input
                  type="number"
                  placeholder="Custom"
                  value={customTip}
                  min="0"
                  max="100"
                  onChange={(e) => updateTip(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="people">
            <h6>Number of People</h6>
            <div className="input-group">
              <input
                id="peopleCount"
                type="number"
                placeholder="0"
                value={peopleCount}
                min="0"
                onChange={updateInput}
              />
              <span className="error-text">Can't be zero</span>
            </div>
          </div>
        </div>
        <div className="overview">
          <div className="info">
            <div className="text">
              <h6>Tip Amount</h6>
              <span>/ person</span>
            </div>
            <div className="amount">
              <span>&#x24;{tipAmount}</span>
            </div>
          </div>

          <div className="info">
            <div className="text">
              <h6>Total</h6>
              <span>/ person</span>
            </div>
            <div className="amount">
              <span>&#x24;{total}</span>
            </div>
          </div>

          <button
            disabled={tipAmount === "0.00" || total === "0.00"}
            onClick={() => {
              setTipAmount("0.00");
              setTotal("0.00");
            }}
          >
            RESET
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
