import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const INFURA_KEY = process.env.NEXT_PUBLIC_INFURA_KEY

const RPC_URLS: { [chainId: number]: string } = {
  4: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
  5: `https://goerli.infura.io/v3/${INFURA_KEY}`,
}
export const walletconnect = new WalletConnectConnector({
  rpc: { 4: RPC_URLS[4], 5: RPC_URLS[5] },
  qrcode: true,
})
