export const WHITE_LIST = [
  {
    pubKey: "FP5SwaQvsJRMEqAjYbwMqhGwRDKE6RznXaSjwPof61k3",
  },
  {
    pubKey: "GZ4KCTkekKhsrYbPX9tGk7noDxJaqdZqcDGyYv8CZZcQ",
  },
];

export type TokenKey = "wsol" | "usdc";

export const tokenAddress: Record<TokenKey, string> = {
  wsol: "So11111111111111111111111111111111111111112",
  usdc: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
};

export const TabMenu = [
    { title: 'Your Positions', link: '?activeTab=yours', param: 'yours' },
    { title: 'Add Position', link: '?activeTab=add', param: 'add' },
    { title: 'Swap', link: '?activeTab=swap', param: 'swap' },
]

export const FeeLabels = [
    { title: "Normal", value: "1" },
    { title: "High", value: "2" },
    { title: "Turbo", value: "5" }
]

export const Slippage = [
    { value: "0.1" },
    { value: "0.5" },
    { value: "1.0" },
    { value: "1.5" }
]