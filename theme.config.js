export default {
  repository: 'https://github.com/ZenUml/airdrop',
  docsRepository: 'https://github.com/ZenUml/airdrop',
  titleSuffix: ' – ZenUML',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">ZenUML</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        空投使用指南
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="ZenUML AirDrop" />
      <meta name="og:description" content="ZenUML AirDrop" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://zenuml.com/wp-content/uploads/2021/02/logo.png"
      />
      <meta name="twitter:site:domain" content="zenuml.com" />
      <meta name="twitter:url" content="https://zenuml.com" />
      <meta name="og:title" content="ZenUML" />
      <meta
        name="og:image"
        content="https://zenuml.com/wp-content/uploads/2021/02/logo.png"
      />
      <meta name="apple-mobile-web-app-title" content="ZenUML" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: (
    <>
      {new Date().getFullYear()} ©{' '}
      <a className="no-underline" href="https://zenuml.com">
        ZenUML
      </a>
    </>
  ),
}
