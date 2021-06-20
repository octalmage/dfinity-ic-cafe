import React, { useCallback, useEffect, useState } from "react"
import logo from "./assets/logo.svg"
import "./App.css"
import { subdomains } from "./agent"

function App() {
  const doInsert = async () => {
    let subdomain = document.getElementById("newEntryName").value;
    let canister = document.getElementById("newEntryCanister").value;
    subdomains.insert(subdomain, { canister });

    document.getElementById("newEntryName").value = '';
    document.getElementById("newEntryCanister").value = '';
  }

  const lookup = async () => {
    let name = document.getElementById("lookupName").value;
    subdomains.lookup(name).then(opt_entry => {
      let entry = opt_entry.length > 0 ? opt_entry[0] : null;
      if (entry === null || entry === undefined) {
        entry = {
          canister: "",
        };
      }
      document.getElementById("newEntryName").value = name;
      document.getElementById("newEntryCanister").value = entry.canister;
    });
  }

  // const refreshCounter = useCallback(async () => {
  //   const res = await counter.getValue()
  //   setCount(res.toString())
  // }, [])

  // useEffect(() => {
  //   refreshCounter()
  // }, [])

  // const onIncrementClick = useCallback(async () => {
  //   await counter.increment()
  //   refreshCounter()
  // }, [counter])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        <h1>Internet Computer Cafe</h1>
        <p>Get a free ic.cafe subdomain!</p>
        <p><strong>Important: This is a temporary centralized solution with no uptime guarantees. Use at your own risk!</strong></p>
        <center>

          Sub Domain: <input required id="newEntryName"></input> <br />
          Canister ID: <input required id="newEntryCanister"></input>
          </center>
          <button onClick={() => doInsert()}>Claim</button>
        </div>
 
      </header>
    </div>
  )
}

export default App
