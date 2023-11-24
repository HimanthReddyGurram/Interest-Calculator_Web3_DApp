export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkBalComp' : IDL.Func([], [IDL.Float64], ['query']),
    'checkBalSimp' : IDL.Func([], [IDL.Float64], ['query']),
    'compound' : IDL.Func([], [], ['oneway']),
    'simple' : IDL.Func([], [], ['oneway']),
    'topUp' : IDL.Func([IDL.Float64], [IDL.Text], []),
    'withDraw' : IDL.Func([IDL.Float64], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
