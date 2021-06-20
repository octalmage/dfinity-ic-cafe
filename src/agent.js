import { Actor, HttpAgent } from "@dfinity/agent"
import { idlFactory as subdomain_idl, canisterId as subdomain_id } from "dfx-generated/subdomains"

const agentOptions = {
  host: "http://localhost:8000",
}

const agent = new HttpAgent(agentOptions)
const subdomains = Actor.createActor(subdomain_idl, { agent, canisterId: subdomain_id })

export { subdomains }