# LazyMinting NFT Marketplace Splint 1

## Dapp Demo 기본 정보

Web Demo URL : https://lazy-mint-fe.vercel.app/ <br />
Contract : https://goerli.etherscan.io/address/0x5a5eb29B037fA4b56D121e2E73D642d544B5Dce6#code <br />
Front-End Source : https://github.com/blockmonkey1992/Lazy-mint_FE <br />



## Summary
본 프로젝트에서는 블록체인에서 핵심적인 기술 중 하나인 NFT(ERC-721)에 대하여 Lazy Minting 기술을 직접 구현해봄으로써 Lazy Minting Flow에 대한 이해를 목적으로 한다. NFT를 발행하는 Creator는 NFT를 발행하는데 비용이 소모되지 않는다. 서명만이 필요하다 (실제로 NFT Minting이 이루어지지 않으나 IPFS 상의 데이터는 올린다). 이후 Buyer가 나타나면 DB에 저장된 서명값을 통해 NFT를 Creator의 이름으로 민팅하고 Redeemer가 NFT를 전달받는 구조로 이루어진다. 또한 한번 사용된 서명을 재사용하는 것을 방지하기위해 Smart Contract영역에서 mapping Data를 통해 관리한다. 사이트 운영자가 서명을 악용할 경우를 대비할 수 있다. 또한 Title, Description, IPFS URL, Price를 모두 묶어 Message Hash를 만들고 Redeem 과정에서 Ethereum 접두사를 붙여 Eth_sign_msg를 생성했으므로 어떠한 정보도 변조될 경우 민팅 자체가 불가능하므로 Off-chain영역에서 발생할 수 있는 오라클 문제에 대하여 문제가 발생할 수 있는 부분을 최소화 했다. 또한 Client에서 Transaction을 전송했을 시 실패하면 가스 비용이 나가게 된다. 이러한점을 개선하기 위해 Client Side에서 Estimate Gas를 통한 Gas Limit을 최적화하고 callStatic을 활용해 EVM에 상태변화를 가하지 않고 사전 호출을 해보면서 Transaction의 성공여부를 확인하고 Transaction을 전달해 트랜잭션 실패로 가스비용이 지불되는 위험성을 최소화했다.


## Construction Skills
- Ethereum Goerli Test Network
- IPFS(nft.storage) - 분산형 파일저장 시스템으로 nft.storage를 사용했다.
- Solidity (8.15) - Smart Contract 개발언어로 8.15 최신버전을 사용했다.
- Hardhat & Ethers - Contract 개발 및 테스트 툴로 사용했다.
- Openzeppelin - Smart Contract Library
- Javascript & React - Client Side
- Nodejs(Express) - Server Side
- MongoDB - NoSQL DB

## Application Architecture

![Architecture](https://user-images.githubusercontent.com/66409384/180932761-c77dbf17-d878-4900-867e-966bd6516b91.png)


## Contract 구성

![contract_Graph](https://user-images.githubusercontent.com/66409384/180267157-85d0bf2e-2cb6-48ef-bbd7-0e88bf1238fe.svg)
