import AssocList "mo:base/AssocList";
import List "mo:base/List";
import Text "mo:base/Text";

actor {

  type SubDomain = Text;
  type Canister = Text;

  type Entry = {
    canister: Canister;
  };

  type SubDomainMap = AssocList.AssocList<SubDomain, Entry>;

  private stable var subdomains: SubDomainMap = List.nil<(SubDomain, Entry)>();

  public func insert(subdomain : SubDomain, entry : Entry): async () {
    let record = AssocList.find<SubDomain, Entry>(subdomains, subdomain, Text.equal);

    if (record == null) {
        subdomains := AssocList.replace<SubDomain, Entry>(
            subdomains,
            subdomain,
            Text.equal,
            ?entry
            ).0;
        }
  };

  public query func lookup(subdomain : SubDomain) : async ?Entry {
    return AssocList.find<SubDomain, Entry>(subdomains, subdomain, Text.equal);
  };

  public query func getAll(): async SubDomainMap {
    return subdomains;
  };

  public shared (msg) func whoami() : async Principal {
    msg.caller
  };
};