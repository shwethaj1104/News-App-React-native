const articles = [
    {
        title: "GPT-4 Designed a Programming Language",
        description: "When the machines make machines, we're in a new world.",
        url: "https://lukebechtel.com/blog/gpt4-generating-code",
        urlToImage: "https://lukebechtel.com/static/images/twitter-card.png",
        publishedAt: "2023-03-16T03:37:18Z"
    },
    {
        title: "GPT-4 Designed a Programming Language",
        description: "When the machines make machines, we're in a new world.",
        url: "https://gigazine.net/news/20230316-traded-in-apple-iphone-refurbished/",
        urlToImage: "https://i.gzn.jp/img/2023/03/16/traded-in-apple-iphone-refurbished/00_m.jpg",
        publishedAt: "2023-03-16T03:37:18Z"
    },
    {
        title: "How to rescue a home-made cocktail: ‘Don’t worry about having a bottle of every spirit.",
        description: "With a basic understanding of flavour and some creative substitutions, anyone can mix a drink that tastes better than the sum of its parts<ul><li>Get our weekend culture and lifestyle email</li></ul>The alchemy in mixing a cocktail is to make it more than the",
        url: "https://www.theguardian.com/food/2023/mar/16/how-to-rescue-a-home-made-cocktail-dont-worry-about-having-a-bottle-of-every-spirit",
        urlToImage: "https://i.guim.co.uk/img/media/899f4700a61a9ee02a0f1dea371fb046d1907c73/0_3027_8656_5193/master/8656.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=2cfdcba49cbfad9a76e8366548aade9d",
        publishedAt: "2023-03-16T01:00:13Z"
    },
    {
        title: "Arne Herkelman (Head of product de Oppo): “Con los teléfonos plegables tenemos la opción de volver a ilusionar a las personas",
        description: "Oppo no presentó grandes novedades en este Mobile de Barcelona. El motivo fue que su producto estrella para este 2023 lo había presentado un par de semanas antes en París. El Oppo Find N2 Flip es por fin el plegable que todos queremos ver. Un muy buen teléfon",
        url: "http://hipertextual.com/2023/03/arne-herkelman-oppo",
        urlToImage:  "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/03/Oppo-scaled.jpg?fit=2560%2C1600&quality=50&strip=all&ssl=1",
        publishedAt: "2023-03-16T03:37:18Z"
    },
    {
        title: "Der Ball muss ins Tor: Apples Fußball-Comedy \"Ted Lasso\" geht in Schlussrunde",
        description: "Die Emmy-gekrönte Fußball-Comedy des iPhone-Konzerns geht in die nächste und vermutlich letzte Saison. Zwölf neue Folgen \"Ted Lasso\" gibt es bis Ende März.",
        url: "https://www.heise.de/news/Der-Ball-muss-ins-Tor-Apples-Fussball-Comedy-Ted-Lasso-geht-in-Schlussrunde-7546498.html",
        urlToImage: "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/1/8/3/6/2/tedlasso-bd8776113c492ee4.jpg",
        publishedAt: "2023-03-16T03:37:18Z"
    },
    {
        title: "Der Ball muss ins Tor: Apples Fußball-Comedy \"Ted Lasso\" geht in nächste Saison",
        description: "Die Emmy-gekrönte Fußball-Comedy des iPhone-Konzerns geht in die nächste und vermutlich letzte Saison. Zwölf neue Folgen \"Ted Lasso\" gibt es bis Ende Mai.",
        url: "https://www.heise.de/news/Der-Ball-muss-ins-Tor-Apples-Fussball-Comedy-Ted-Lasso-geht-in-naechste-Saison-7546498.html",
        urlToImage: "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/1/8/3/6/2/tedlasso-bd8776113c492ee4.jpg",
        publishedAt: "2023-03-16T03:37:18Z"
    },
    {
        title: "Foxconn wins first AirPods order, plans new factory",
        description: "Six years and six months since AirPods were launched, Apple's biggest supplier Foxconn finally gets to make them.According to Reuters, Foxconn plans to build a $200 million factory in India, specifically to make AirPods. Apple has already had some AirPod comp…",
        url: "https://appleinsider.com/articles/23/03/16/foxconn-wins-first-airpods-order-plans-new-factory",
        urlToImage: "https://photos5.appleinsider.com/gallery/53506-107465-000-lead-AirPods-xl.jpg",
        publishedAt: "2023-03-16T08:03:48Z",
    },
    {
        title: "Multifunctional MagSafe Wallet makes sure your cards will never go missing again",
        description: "Multifunctional MagSafe Wallet makes sure your cards will never go missing againLike a true trailblazer, Apple took the existing wireless charging technology and made it into an exciting new trend that’s taking the smartphone accessory market...",
        url: "https://www.yankodesign.com/2023/03/15/multifunctional-magsafe-wallet-makes-sure-your-cards-will-never-go-missing-again/",
        urlToImage: "https://www.yankodesign.com/images/design_news/2023/03/MagSafe_wallet_with_Find_My_functionality_hero.jpg",
        publishedAt: "2023-03-16T01:44:34Z",
    },
    {
        title: "Ya no hay dudas de la cercanía de realityOS: Apple vuelve a dejar al descubierto su código",
        description: "2023 tiene que ser el año. Algo va a pasar en Apple. Y es que no dejan de aparecer indicios de este todavía misterioso producto que bien puede vestirse primero en forma de casco de realidad virtual y luego gafas de realidad aumentada o con un híbrido entre am…",
        url: "https://www.applesfera.com/rumores/no-hay-dudas-cercania-realityos-apple-vuelve-a-dejar-al-descubierto-su-codigo",
        urlToImage: "https://i.blogs.es/2c1005/casco-apple/840_560.jpeg",
        publishedAt: "2023-03-16T07:41:34Z",
    },
    {
        title: "Trailer for 'BlackBerry' Shares Playful Retelling of Smartphone Giant's Rise and Fall",
        description: "Announced last year, we have now received the trailer for IFC Films' BlackBerry film. Straying from the serious dramatic tone of other films about tech, the upcoming film serves as a playful retelling of the Canadian smartphone giant's rise and fall.The unexp…",
        url: "https://hypebeast.com/2023/3/blackberry-film-official-trailer-release-info",
        urlToImage: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F03%2Fblackberry-film-official-trailer-release-info-tw2.jpg?w=960&cbr=1&q=90&fit=max",
        publishedAt: "2023-03-16T04:21:46Z",
    }   ,
    {
        title: "Siri va-t-il rattraper ChatGPT ? De nouvelles révélations (inquiétantes)",
        description: "Alors que les intelligences artificielles génératives sont en train d’envahir la tech, Apple est encore très discret sur le sujet.",
        url: "https://www.presse-citron.net/siri-va-t-il-rattraper-chatgpt-de-nouvelles-revelations-inquietantes/",
        urlToImage: "https://www.presse-citron.net/app/uploads/2022/02/DSC00261.jpg",
        publishedAt: "2023-03-16T07:48:43Z",
    },
    {
        title: "Sources: Foxconn will make AirPods for the first time and plans to invest $200M+ in a plant in Telangana, India; a source says Apple wanted production in India (Yimou Lee/Reuters)",
        description: "Yimou Lee / Reuters:\nSources: Foxconn will make AirPods for the first time and plans to invest $200M+ in a plant in Telangana, India; a source says Apple wanted production in India  —  Taiwanese contract manufacturer Foxconn (2317.TW) has won an order to make…",
        url: "https://www.techmeme.com/230316/p2",
        urlToImage: "https://www.reuters.com/resizer/v6mR7hiSSubjQUOL6LRjERBg6a8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JUBB4QPLWZKM3C65CYYQT7XECE.jpg",
        publishedAt: "2023-03-16T04:45:01Z",
    },
    {
        title: "Brave integriert VPN in den Desktop-Browser",
        description: "Die Entwickler des Brave-Browsers haben bekannt gegeben, dass der von Guardian betriebene Dienst „Firewall + VPN“ nun auch in ihrem Desktop-Webbrowser verfügbar ist. Der Dienst war bereits in den mobilen Versionen des Brave-Webbrowsers nutzbar. »Heutzutage nu…",
        url: "https://stadt-bremerhaven.de/brave-integriert-vpn-in-den-desktop-browser/",
        urlToImage: "https://stadt-bremerhaven.de/wp-content/uploads/2023/03/subscription.webp",
        publishedAt: "2023-03-16T05:30:31Z",
    },
    {
        title: "Apple supplier Foxconn plans $200m factory in India, sources say",
        description: "Source says Taiwan firm will invest more than $200m in the new AirPod plant in the southern Indian state of Telangana.",
        url: "https://www.aljazeera.com/economy/2023/3/16/apple-supplier-foxconn-plans-200m-factory-in-india-sources-say",
        urlToImage: "https://www.aljazeera.com/wp-content/uploads/2023/03/2010-05-25T120000Z_1428196423_GM1E65P1E2D01_RTRMADP_3_FOXCONN.jpg?resize=1920%2C1440",
        publishedAt: "2023-03-16T05:14:55Z",
    }
]

export default articles