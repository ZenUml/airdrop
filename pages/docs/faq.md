# 如何拥有 ZenUML 币
ZenUML空投是完全免费的，你只需要一个钱包用来接收空投。如果你没有钱包，你可以免费创建一个钱包。
你可以使用任何内置支持BSC或者可以通过自定义的方式支持BSC的钱包（比如Metamask）。

## 什么是钱包？
当区块链上发生交易的时候，它总是发生在两个或多个地址之间。这些地址是由一串16进制数字（比如`0xA7a1fd2767e13B814B3d40669B5B6C071E6db87b`）为标识的。
钱包只是一个形象的说法。所有的EVM仿链都可以使用同一个地址。
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
   
恭喜你！你的钱包已经创建完了。点击插件的图标，然后点击"Account 1"，即可复制你的地址到粘贴板。这个地址就是我们向您做空投（AirDrop）时使用
的地址。这个地址跟你的钱包当前显示的是哪条链是没有关系的。接下来我们会介绍，如何配置币安智能链，以及收到空投之后如何查看你的余额。
![](/MetaMask-Get-Your-Address.png)

> #### 高级
> 默认情况下，MetaMask为你创建了一个`Account`（对应于一个地址）。你可以创建更多的`Account`。一开始我们不建议你这样做。
> 因为当你用助记词恢复钱包的时候第二个`Account`[不是自动恢复的](https://metamask.zendesk.com/hc/en-us/articles/360015489271-How-to-add-missing-accounts-after-restoring-with-Seed-Phrase-Secret-Recovery-Phrase) 。

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

下载冷钱包 [Token pocket](https://www.tokenpocket.pro/) 或者 [imtoken](https://token.im/)

之前没有钱包的自己先创建离线钱包。

## FUB 钱包地址

因为 FUB 是用 BSC 发布的 ，所以 BNB 的地址就是 FUB 的

### token pocket

![](/3071620810420.jpg)

选择「币安智能链」然后添加或者导入钱包地址，进去之后点击「收款」就能看到地址，地址是以`0x`开头的 40 位编码。

### imtoken

imtoken 要用 ETH 钱包，然后需要更换节点才能使用，步骤先点击「我」-「使用设置」-「节点设置」-「ETHEREUM」进入 ETH 钱包节点设置页面：

![](/343432424234.png)

点击「自定义」添加节点：

- 网络名称 `BSC Mainnet`
- 新增 RPC URL `https://bsc-dataseed1.defibit.io/`
- 链 ID  `56`
- 符号（选填） `BNB`
- 区块浏览器 URL（选填） `https://bsscan.com/`

### 添加 FUB 币

### token pocket

![](/1620810920748.jpg)

点击上图「加号」图标，选择「自定义代币」-> 点「添加代币」，然后输入以下：

- 代币合约 `0x369d7c7fe353bebf89acb80ffdcaeb83c95d64ec`
- symbol `FUB`
- 代币精度 `18`
