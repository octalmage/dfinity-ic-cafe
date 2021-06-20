export default ({ IDL }) => {
  const List = IDL.Rec();
  const SubDomain = IDL.Text;
  const Canister = IDL.Text;
  const Entry = IDL.Record({ 'canister' : Canister });
  List.fill(IDL.Opt(IDL.Tuple(IDL.Tuple(SubDomain, Entry), List)));
  const AssocList = List;
  const SubDomainMap = AssocList;
  return IDL.Service({
    'getAll' : IDL.Func([], [SubDomainMap], ['query']),
    'insert' : IDL.Func([SubDomain, Entry], [], []),
    'lookup' : IDL.Func([SubDomain], [IDL.Opt(Entry)], ['query']),
    'whoami' : IDL.Func([], [IDL.Principal], []),
  });
};
export const init = ({ IDL }) => { return []; };