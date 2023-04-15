
# push-group-wallet
## what is push-group-wallet
- push-group-wallet is a group chat sysytem with payment sysytem.

## How to use
- `cd front`
- `yarn install`
- `yarn start`
	- maybe you have to mv .env.sample .env

## build road map
1. ~~Reactのセットアップ~~
1. ~~Push chat protocolを使ってグループチャット機能を実装~~
1. ~~Hostのwalletアドレスから一時的なグループwalletアドレスを作成する~~
	1. ~~group infoにgroup wallet addressを載せる(musthave)~~
	1. grouo infoに過去のtransaction infoを載せる(nice2have)
1. ~~create groupでgroupを作成したらgroup wallet addressが生成する~~
1. ~~GKEVMでpolygonを接続する~~
1. AA接続によるmulti wallet対応(nice2have)

TODO
- ~~repoをpublicにする~~
- ~~push権限 to bushio~~
- wallet systemをsafe codeにすることが可能かの検証

question
- リアルタイムでチャットを送受信する方法
- channelのcreate,createしてからgroup walllet addressの生成
- group walletをsafe kitを使ってaaのマルチシグwalletを作成
	nortificationでwallet addresをrequestするとbundlerのwallet addressを指定すればいけるのではないか？

[polygonscan](https://testnet-zkevm.polygonscan.com/address/0x92cBb9699667cCd685167e4C72d1c6718155be8A)
[Twieet](https://twitter.com/sora_grayscale/status/1647352202665795584?s=20)

