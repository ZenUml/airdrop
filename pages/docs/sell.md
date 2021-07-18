import Callout from 'nextra-theme-docs/callout'

# 卖出ZenUML Token

<Callout>
本节有两点是需要特别注意的：
1. 不论是买入还是卖出，都需要把Slippage Tolerance设置为15%。
1. 不论是买入还是卖出，你的钱包里面都需要有少量的BNB作为Gas(任何交易都需要）。
</Callout>

如我们在[回购](/docs/buy-back)一节所说，用户可以在任何时候以不低于[空投成本的价格](/cost-price)卖出。

我们建议用户至少持有6个月时间，以方便项目团队逐步增加流动性稳定币价。持有还有其他的好处。

## 交易所和交易方式
ZenUML Token目前支持在 [Pancake](https://pancakeswap.finance/) 进行交易。

如果您以前没有使用过分布式交易所，下面的是一个快速教程。如果您已经熟悉交易所的使用方式，您仍然需要注意

* 打开[交易所首页](https://pancakeswap.finance/) <br/>
地址：https://pancakeswap.finance/
  
![](/pancake-homepage.png)

* 确保你已经安装了MetaMask钱包

* 点击"Connect"然后在列表中选择"Metamask"关联钱包
![](/pancake-choose-wallet.png)
  
> ⚠️ 你可能会看到一个警告信息，如下图所示，这是由于BSC的Network URL有多个。检查Network URL，如果正确（如下图所示），即可以放心Approve。如果你按照[FAQ]()中的方法提前添加了BSC，就不会遇到这个警告。
![](/Metamask-Add-Network-From-Pancake.png)


* 选择Trade->Exchange

![](/pancake-trade-exchange.png)

* 在右侧的交易对中From选择ZenUML，第一次使用需要在地址栏输入ZenUML的合约地址，然后Import
![](/pancake-contract-address.png)
  
<Callout>
然后你可能会看到如下的警告。它的意思是，任何人都可以创建任何名字的Token。你需要核对Token的地址。确保你是在airdrop.zenuml.com网址。检查左下角合约地址位数为F98C。选择"I understand"(我明白），然后点击"Import"导入。
</Callout>
![](/pancake-warning.png)

* 在右侧的交易对中To选择BNB

## 持有者的收益

为了鼓励用户持有ZenUML Token，我们仿照[Safermoon](https://safermoon.net/) 设计了合约的规则。具体来说，对于每一笔交易的5%会被按比例分配给所有的持有者。分配对象不包括合约拥有者，即我们自己，因为在初期我们拥有的比例太高。另外的5%会被分成两份，其中一份用来购买BNB，并跟剩下的一份组对添加到ZenUML-BNB流动性里面。
