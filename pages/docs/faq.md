import Callout from 'nextra-theme-docs/callout'

# 如何拥有 ZenUML 币
ZenUML空投是完全免费的，你只需要一个钱包用来接收空投。如果你没有钱包，你可以免费创建一个钱包。你可以使用任何内置支持BSC或者可以通过自定义的方式支持BSC的钱包（比如Metamask）。

## 什么是钱包？
当区块链上发生交易的时候，它总是发生在两个或多个地址之间。这些地址是由一串16进制数字（比如`0xA7a1fd2767e13B814B3d40669B5B6C071E6db87b`）为标识的。钱包只是一个形象的说法。所有的EVM仿链都可以使用同一个地址。
![](/A-Sample-Wallet.png)

## 创建钱包（以MetaMask为例）
整个过程需要大约5分钟。
> 你可以在 [币安的官方文档页面](https://docs.binance.org/smart-chain/wallet/metamask.html) 中看到更详细的教程。

### 安装MataMask插件
 * 在Chrome浏览器中打开MetaMask的插件地址：https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn

![](/Add-MetaMask-to-Chrome.png)

 * 点击"Add to Chrome"<br/>
 这样你就安装了MetaMask。
   
![](/MetaMask-Extension-Installed.png)
   
### 创建钱包

 * 点击"Create a Wallet"按钮
![](/MetaMask-Create-a-Wallet.png)
   
 * 选择密码
![](/MetaMask-Create-Password.png)
   
 * 点击"Create"，记下备份助记词
![](/MetaMask-Backup-Phrase.png)
   
 * 按照顺序选择助记词，然后点击"Confirm"
![](/MetaMask-Confirm-Phrase.png)
   
恭喜你！你的钱包已经创建完了。一般情况下钱包的地址不需要保密。在接收空投的时候，您需要向我们提交这个钱包的地址。

### 复制钱包地址

点击插件的图标，然后点击"Account 1"，即可复制你的地址到粘贴板。这个地址就是我们向您做空投（AirDrop）时使用的地址。这个地址跟你的钱包当前显示的是哪条链是没有关系的。接下来我们会介绍，如何配置币安智能链，以及收到空投之后如何查看你的余额。
![](/MetaMask-Get-Your-Address.png)

<Callout emoji="🦤">
 默认情况下，MetaMask已经为你创建了一个`Account`（对应于一个地址）。你可以创建更多的`Account`。一开始，我们不建议你这样做。因为当你用助记词恢复钱包的时候第二个`Account`[不是自动恢复的](https://metamask.zendesk.com/hc/en-us/articles/360015489271-How-to-add-missing-accounts-after-restoring-with-Seed-Phrase-Secret-Recovery-Phrase)。
</Callout>

## 配置币安智能链
 * 进入Setting页面
![](/MetaMask-Setting.png)
   
 * 添加网络（币安智能链）
![](/MetaMask-Add-a-New-Network.png)
   
    * Network Name: Binance Smart Chain
    * New RPC URL: https://bsc-dataseed.binance.org/
    * Chain ID: 56
    * Symbol: BNB
    * Block Explorer URL: https://bscscan.com

恭喜你！现在你的钱包就支持币安智能链了。我们向您空投的Token就在这条链上。

## 添加ZenUML Token
 * 点击"Add Token"
![](/MetaMask-Add-Token.png)
   
 * 选择"Custom Token"，在Token Contract Address中贴入合约地址`0x0831842db6a03521469f795d90615c05c939f98c`
![](/MetaMask-Paste-Token-Address.png)

如果您的Token已经到账，您应当可以从列表中看到您的余额。
