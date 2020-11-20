require('dotenv').config({
  path: require('path').resolve(__dirname, '../.env')
})


const mongoose = require('mongoose');
// importer le model brand
const Brand = require('../models/brand-model');
// const Business = require('../models/business.model');
// const User = require('../models/user.model');
// donner un nom de variable à notre base 

const Country = require('../models/country-model')


const dbtitle = 'upm';
// connecter notre base a mongodb
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to Mongo!');
  })
  .catch(err => console.error('Error connecting to mongo', err))
;
 
// tableau des marques
var datas = [
    {
    brandname: '&TRADITION',
    categorie: 'Maison',
    popularity: '2', 
    logoUrl: 'https://pbs.twimg.com/profile_images/531817357136498691/a_8f4Mj0.jpeg',
    websiteUrl: 'https://shop.andtradition.com/',
    newinUrl: 'https://shop.andtradition.com/collections/news',
    coverImage: 'https://wp.andtradition.com/wp-content/uploads/2019/03/ATD_front_cropped5-copy-1200x630.jpg',
    shopUrl: 'https://www.andtradition.com/stores',
    returnPolicyUrl: 'https://shop.andtradition.com/policies/refund-policy'
    },
    {
    brandname: 'ABERCROMBIE & FITCH',
    categorie: 'Mode et Accessoires',
    popularity: '3', 
    logoUrl: 'https://www.myzeil.de/fileadmin/user_upload/GLOBAL/brand_stores/logos/abercrombieandfitch.jpg',
    websiteUrl: 'https://www.abercrombie.com/shop/eu-fr',
    newinUrl:'https://www.abercrombie.com/shop/eu-fr/homme-nouveaut%C3%A9s',
    coverImage: 'https://assets2.mr-mag.com/wp-content/uploads/2018/07/Abercrombie_Denim_Fall_2018_28.jpg',
    shopUrl:'https://www.abercrombie.com/shop/StoreLocator?storeId=19159&catalogId=11556&langId=-2',
    returnPolicyUrl:'https://www.abercrombie.com/shop/eu-fr/help/instore-return-exchange-policy'
    },
    {
    brandname: 'ADEN + ANAIS',
    categorie: 'Enfants',
    popularity: '2',
    logoUrl: 'https://mma.prnewswire.com/media/995839/aden_anais_Logo.jpg?p=publish',
    websiteUrl: 'https://www.adenandanais.fr/',
    newinUrl:'https://www.adenandanais.fr/nouveautes/',
    coverImage:'https://www.preggiebaby.com/wp-content/uploads/2018/12/aden-anais-baby-swaddle-4pk-seafaring-3_2071.jpg',
    shopUrl: 'https://www.adenandanais.fr/storelocator',
    returnPolicyUrl:'https://www.adenandanais.fr/shipping-returns'
    },
    {
    brandname: 'AESOP',
    categorie: 'Beauté & Soins',
    popularity: '2',
    logoUrl: 'https://assets.fontsinuse.com/static/use-media-items/92/91004/upto-700xauto/5d162bc1/Aesop.png?resolution=0',
    websiteUrl: 'https://www.aesop.com/',
    newinUrl: 'https://www.aesop.com/',
    coverImage: 'https://www.aesop.com/medias/Aesop-Emporium-II-Hero-Bleed-Desktop-2880x1620px.jpg?context=bWFzdGVyfGltYWdlc3w2ODY1NzJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDM5L2hlMi85MTA0MDkyNzU4MDQ2LmpwZ3w5ZjQ3ODcyOThjMGFhOTg0MGIwZjQ2MjliMGIzNGU0YTg2Yjk4NTU3MzllOTgzYTU1ZTA5ZDg1Y2FmNmRjMzM4',
    shopUrl: 'https://www.aesop.com/fr/fr/visit/?visitMenu=open',
    returnPolicyUrl:'https://assistance.aesop.com/hc/fr-fr/articles/360001100755-Comment-puis-je-%C3%A9changer-des-produits-achet%C3%A9s-en-ligne-'
    },
    {
    brandname: 'AIGLE',
    categorie: 'Mode et Accessoires',
    popularity: '1',
    logoUrl: 'https://www.carlstahl-epi.fr/boutique/images_familles/aigle.png',
    websiteUrl: 'https://www.aigle.com/',
    newinUrl: 'https://www.aigle.com/fr/fr/nouveautes-femme',
    coverImage: 'https://i.pinimg.com/originals/31/90/1a/31901adc0f6d12a63d4ad1d0848d03f2.jpg',
    shopUrl: 'https://www.aigle.com/fr/fr/magasins-aigle',
    returnPolicyUrl: 'https://www.aigle.com/fr/fr/returns.html#aide_6'
    },
    {
    brandname: 'AMERICAN VINTAGE',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://www.urbansublime.com/wp-content/uploads/2015/03/logoAmericanVintage-1.jpg',
    websiteUrl: 'https://fr.americanvintage-store.com/fr/',
    newinUrl: 'https://fr.americanvintage-store.com/fr/nouvelle-collection-tous-produits-mixte#facet:&productBeginIndex:0&orderBy:&pageView:grid&minPrice:&maxPrice:&pageSize:&',
    coverImage:'https://img.grouponcdn.com/seocms/iUW3D3QrD9wf5Xuz68Ewp6/American_Vintage-1389x900-1389x900.jpeg',
    shopUrl:'https://fr.americanvintage-store.com/fr/localisateur-de-magasins',
    returnPolicyUrl: 'https://fr.americanvintage-store.com/fr/retours-fr'
    },
    {
    brandname: 'ARMANI',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://journalduluxe.fr/wp-content/uploads/2017/05/armani-logo.jpg',
    websiteUrl: 'https://www.armani.com/',
    newinUrl: 'https://www.armani.com/fr/armanicom/giorgio-armani/homme/nouveautes-vetements',
    coverImage: 'https://lesfacons.com/wp-content/uploads/2020/03/EMPORIO-ARMANI-SPRING-2020-CAMPAIGN-FILM.jpg',
    shopUrl:'https://www.armani.com/experience/fr/store-locator/',
    returnPolicyUrl: 'https://www.armani.com/system/selfservice.controller?CONFIGURATION=2059&PARTITION_ID=1&CMD=BROWSE_TOPIC&LANGUAGE=fr&COUNTRY=fr&USERTYPE=1&TOPIC_ID=1023'
    },
    {
    brandname: 'ANNICK GOUTAL',
    categorie: 'Beauté et Soins',
    popularity: '1',
    logoUrl: 'https://fimgs.net/mdimg/dizajneri/o.4.jpg',
    websiteUrl: 'https://www.goutalparis.com/',
    newinUrl: 'https://www.goutalparis.com/pages/le-temps-des-reves',
    coverImage: 'https://i.ytimg.com/vi/KInW4ALuEuM/maxresdefault.jpg',
    shopUrl: 'https://www.goutalparis.com/store-locator',
    returnPolicyUrl: 'https://www.goutalparis.com/pages/livraison-et-retours#return-and-refund'
    },
    {
    brandname: 'BA&SH',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://i.pinimg.com/280x280_RS/16/56/49/1656492db14da85a73ef57d683aea3ff.jpg',
    websiteUrl: 'https://ba-sh.com/',
    newinUrl: 'https://ba-sh.com/fr/fr/nouveautes-2/',
    coverImage: 'https://ba-sh.com/on/demandware.static/-/Library-Sites-BashSharedLibrary/default/dw3ea09f29/SLIDER_DESKTOP_HShop.jpg',
    shopUrl: 'https://ba-sh.com/fr/fr/stores',
    returnPolicyUrl: 'https://ba-sh.com/fr/fr/returns-refund-worldwide.html'
    },
    {
    brandname: 'BACCARAT',
    categorie: 'Maison',
    popularity: '2',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/fr/4/4e/LOGO-BACCARAT.jpg',
    websiteUrl: 'https://www.baccarat.fr/',
    newinUrl: 'https://www.baccarat.fr/fr/nouvelles-collections/',
    coverImage: 'https://jingdaily.com/wp-content/uploads/2019/04/BACCARAT-TAN-ZHUO.jpg',
    shopUrl: 'https://www.baccarat.fr/fr/points-vente/',
    returnPolicyUrl: 'https://www.baccarat.fr/fr/service-client/#returns'
    },
    {
    brandname: 'BAGHERA',
    categorie: 'Enfants',
    popularity: '1',
    logoUrl: 'hhttps://i.pinimg.com/280x280_RS/f0/b8/0b/f0b80b317b44ab0d2294d1dbcd4efb18.jpg',
    websiteUrl: 'https://www.baghera.fr/',
    newinUrl: 'https://www.baghera.fr/99-voitures-a-pedales',
    coverImage: 'https://www.baghera.fr/modules/prestatemplatev2/page-builder/wp-content/uploads/Rosalie-porteur-Baghera.jpg',
    shopUrl: 'https://www.baghera.fr/magasins',
    returnPolicyUrl: 'https://baebrow.com/pages/refund-policy'
    },
    {
    brandname: 'BALENCIAGA',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2018/03/Logo-Balenciaga-1.jpg',
    websiteUrl: 'https://www.balenciaga.com/fr',
    newinUrl: 'https://www.balenciaga.com/fr/all/printemps-21-tout',
    coverImage: 'https://theimpression.com/wp-content/uploads/2020/02/Balenciaga-instagram-campaign-Spring-2020-Pictures-the-impression-header-017-scaled.jpg',
    shopUrl: 'https://www.balenciaga.com/experience/fr/store-locator/',
    returnPolicyUrl: 'https://www.balenciaga.com/customerservice/fr/#/returns/'
    },
    {
    brandname: 'BALMAIN',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://www.olfastory.com/sites/www.olfastory.com/files/styles/400x400/public/balmain.jpg?itok=J3WPkBsM',
    websiteUrl: 'https://www.balmain.com/fr',
    newinUrl: 'https://www.balmainwatches.com/fr/collections/novelties-2020',
    coverImage: 'https://www.balmain.com/assets/2019-11/19AW_SP_Cara-Balmain_CAMPAIGN_2501_RGB%5B1%5D.jpg',
    shopUrl: 'https://www.balmain.com/storelocator/fr/',
    returnPolicyUrl: 'https://www.balmain.com/system/selfservice.controller?CONFIGURATION=2171&PARTITION_ID=1&CMD=BROWSE_TOPIC&LANGUAGE=fr&COUNTRY=fr&USERTYPE=1&TOPIC_ID=1023'
    },
    {
    brandname: 'BERENICE',
    categorie: 'Mode et Accessoires',
    popularity: '1',
    logoUrl: 'https://www.justacote.com/photos_entreprises/boutique-berenice-hyeres-14067985620.jpg',
    websiteUrl: 'https://www.berenice.net/',
    newinUrl: 'https://berenice.net/fr/619-nouvelle-collection',
    coverImage: 'https://medias.fashionnetwork.com/image/upload/v1/medias/1a4cd5c1d8c020e7d16ab0b9fb9bce4f2367013.jpg',
    shopUrl: 'https://www.berenice.net/fr/magasins',
    returnPolicyUrl: 'https://berenice.net/fr/content/5-livraison'
    },
    {
    brandname: 'BOBBI BROWN',
    categorie: 'Beauté et Soins',
    popularity: '3',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5AjGeMQVDB9YDe7_tq41FbY3cxlH36zzlMA&usqp=CAU',
    websiteUrl: 'https://www.bobbibrowncosmetics.com/',
    newinUrl: 'https://www.bobbibrowncosmetics.com/products/14460/new',
    coverImage: 'https://www.tendaysinparis.com/wp-content/uploads/2019/05/BobbiBrown.ConfidentBeauty.Campaign.Launching.Party_.0028.jpg',
    shopUrl: 'https://www.bobbibrowncosmetics.fr/store_locator',
    returnPolicyUrl: 'https://www.bobbibrowncosmetics.com/customer-service-returns#returns-instructions' 
    },
    {
    brandname: 'BOBBIES',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://www.fanny-chaussures.com/blog/wp-content/uploads/bobbies-618x550.png',
    websiteUrl: 'https://www.bobbies.com/',
    newinUrl: 'https://www.bobbies.com/en/218101941-autumn-winter-2020-new-in',
    coverImage: 'https://cdn2.bobbies.com/modules/bobbieslookbook/views/img/w20/2/women/1.jpg',
    shopUrl: 'https://www.bobbies.com/fr/retailers',
    returnPolicyUrl: 'https://www.bobbies.com/en/delivery-returns',
    },
    {
    brandname: 'BONPOINT',
    categorie: 'Enfants',
    popularity: '2',
    logoUrl: 'https://i.pinimg.com/originals/a7/5f/4a/a75f4a415955e23049d28fdc76a52e9d.jpg',
    websiteUrl: 'https://www.bonpoint.com/',
    newinUrl: 'https://www.bonpoint.com/fr/collection-croisiere.html',
    coverImage: 'https://i.ytimg.com/vi/YLXQxgFatmM/maxresdefault.jpg',
    shopUrl: 'https://www.bonpoint.com/fr/storelocator',
    returnPolicyUrl: 'https://www.bonpoint.com/fr/faq'
    },
    {
    brandname: 'BOSS',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://generalperfume.com/wp-content/uploads/2016/07/hugo-boss.jpg',
    websiteUrl: 'https://www.hugoboss.com/fr/',
    newinUrl: 'https://www.hugoboss.com/fr/hommes-toutes-nouveautes/',
    coverImage: 'https://theimpression.com/wp-content/uploads/2020/02/Boss-ad-campaign-Fabien-Baron-Craig-McDean-Spring-2020-Pictures-the-impression-header-02-scaled.jpg',
    shopUrl: 'https://www.hugoboss.com/fr/stores',
    returnPolicyUrl: 'https://www.hugoboss.com/fr/customer-service/retour/returns.html'
    },
    {
    brandname: 'BOTTEGA VENETA',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://www.mesmarques-enbourse.com/wp-content/themes/mes-marques-en-bourse/logos/600x600/21283401600.jpg',
    websiteUrl: 'https://www.bottegaveneta.com/',
    newinUrl: 'https://www.bottegaveneta.com/fr/onlineboutique/nouveautes-femme',
    coverImage: 'https://theimpression.com/wp-content/uploads/2019/11/bottega-veneta-pre-spring-2020-ad-campaign-The-Impression-010-scaled.jpg',
    shopUrl: 'https://www.bottegaveneta.com/experience/fr/store-locator/',
    returnPolicyUrl: 'https://www.bottegaveneta.com/serviceclients/fr/faq/'
    },
    {
    brandname: 'BURBERRY',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://i.pinimg.com/originals/96/ea/fa/96eafaedc9df66fe69ab833230d8ab46.jpg',
    websiteUrl: 'https://fr.burberry.com/',
    newinUrl: 'https://fr.burberry.com/nouveautes-femme-nouveaux-arrivages/',
    coverImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sora-choi-irina-shayk-freja-beha-erichsen-and-fran-summers-photographed-by-danko-steiner-for-the-burberry-autumn-winter-2019-campaign-c-courtesy-of-burberry-danko-steiner-1566312967.jpg',
    shopUrl: 'https://fr.burberry.com/boutiques/france/',
    returnPolicyUrl: 'https://fr.burberry.com/service-client/retours/'
    },
    {
    brandname: 'CABAÏA',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://www.blue-box.fr/wp-content/uploads/2019/08/CABAIA.jpg',
    websiteUrl: 'https://www.cabaia.com',
    newinUrl: 'https://www.cabaia.fr/pages/nouveautes',
    coverImage: 'https://wesoundcompany.com/wp-content/uploads/2016/09/Cabaia-wsc-010-copie-web.jpg',
    shopUrl: 'https://www.cabaia.fr/apps/store-locator',
    returnPolicyUrl: 'https://aide.cabaia.fr/hc/fr/sections/360003114740--Les-3-R-R%C3%89CLAMATIONS-RETOURS-ET-REMBOURSEMENTS-'
    },
    {
    brandname: 'CAFE COTON',
    categorie: 'Mode et Accessoires',
    popularity: '1',
    logoUrl: 'https://www.cartesesame.com/uploads/media/partner_logo/0001/12/thumb_11029_partner_logo_normal.jpeg',
    websiteUrl: 'https://www.cafecoton.fr/',
    newinUrl: 'https://www.cafecoton.fr/113-chemise-homme?q=Ligne-Exclusive',
    coverImage: 'https://i.ytimg.com/vi/_LysRGFtR7I/maxresdefault.jpg',
    shopUrl: 'https://www.cafecoton.fr/nos-magasins',
    returnPolicyUrl: 'https://www.cafecoton.fr/content/3-les-conditions-generales-de-vente#8'
    },
    {
    brandname: 'CALVIN KLEIN',
    categorie: 'Mode et Accessoires',
    
    logoUrl: 'https://www.latroikastore.com/media/cache/brand_thumbnail/b0/fe/8664c0be93d6645edc6d202bd27a.jpeg',
    websiteUrl: 'https://www.calvinklein.fr/',
    newinUrl: 'https://www.calvinklein.fr/femme-nouvelle-collection',
    coverImage: 'https://ds1.static.rtbf.be/article/image/1240x800/7/0/e/1287997566.jpg',
    shopUrl: 'https://www.calvinklein.fr/store-locator',
    returnPolicyUrl: 'https://www.calvinklein.fr/service-clientele-retours'
    },
    {
    brandname: 'CAMPER',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/camper-1.svg',
    websiteUrl: 'https://m.camper.com/',
    newinUrl: 'https://m.camper.com/fr_FR/homme/chaussures/fall_winter_season',
    coverImage: 'https://i.pinimg.com/originals/8b/da/49/8bda492d25a9864a0b4958604f803cfc.jpg',
    shopUrl: 'https://m.camper.com/fr_FR/buscador-tiendas.xhtml',
    returnPolicyUrl: 'https://m.camper.com/fr_FR/at_cliente_faq.xhtml#'
    },
    {
    brandname: 'CANADA GOOSE',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://www.commeuncamion.com/content/uploads/cache/2010/03/Logo-Canada-Goose/3462872367.png',
    websiteUrl: 'https://www.canadagoose.com/',
    newinUrl: 'https://www.canadagoose.com/fr/fr/faites-vos-achats/hommes/nouveautes-prochainement/',
    coverImage: 'https://images.radio-canada.ca/q_auto,w_1250/v1/ici-info/16x9/chine-canada-goose-magasin-ouverture-pekin.jpg',
    shopUrl: 'https://www.canadagoose.com/ca/fr/trouver-un-distributeur/Find-Distributors.html',
    returnPolicyUrl: 'https://www.canadagoose.com/fr/fr/politique-de-retours/returns.html'
    },
    {
    brandname: 'CARAMEL',
    categorie: 'Enfants',
    popularity: '2',
    logoUrl: 'https://cdn.shopify.com/s/files/1/2863/0972/t/11/assets/logo.svg?v=17108630161849822663',
    websiteUrl: 'https://www.caramel-shop.co.uk/',
    newinUrl: 'https://www.caramel-shop.co.uk/collections/new-arrivals',
    coverImage: 'https://cdn.shopify.com/s/files/1/2863/0972/files/home-banner-1400x728_2_0000_Caramel5_2048x.jpg?v=1605267586',
    shopUrl: 'https://www.caramel-shop.co.uk/pages/stores',
    returnPolicyUrl: 'https://www.caramel-shop.co.uk/pages/returns'
    },
    {
    brandname: 'CARAN D\'ACHE',
    categorie: 'Maison',
    popularity: '2',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/caran-d-ache.svg',
    websiteUrl: 'https://www.carandache.com/',
    newinUrl: 'https://www.carandache.com/fr/fr/leman-rouge-carmin-s-1173.htm',
    coverImage: 'https://www.leparisien.fr/images/2015/04/29/4734251_carandache-0048.jpg',
    shopUrl: 'https://www.carandache.com/ch/fr/magasins/recherche.cfm?lat=46.1841714&long=6.2151084',
    returnPolicyUrl: 'https://www.carandache.com/fr/fr/cgv.cfm#3.8'
    },
    {
    brandname: 'CARHARTT WIP',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://verygoodlord.com/wp-content/uploads/2020/01/logo-carhartt.png',
    websiteUrl: 'https://www.carhartt-wip.com/',
    newinUrl: 'https://www.carhartt-wip.com/fr/homme-nouveautes',
    coverImage: 'https://www.modzik.com/wp-content/uploads/2018/01/header_1.jpg',
    shopUrl: 'https://www.carhartt-wip.com/fr/stores/stockists',
    returnPolicyUrl: 'https://www.carhartt-wip.com/fr/service/faqs'
    },
    {
    brandname: 'CAROLINA HERRERA',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbfFanYyyrI64-fn8VHBpbRf04bQ6JhFTlGg&usqp=CAU',
    websiteUrl: 'https://chcarolinaherrera.com/fr/en',
    newinUrl: 'https://chcarolinaherrera.com/fr/en/women/new-collection-6814668-1002',
    coverImage: 'https://www.maryosbazaar.com/wp-content/uploads/2015/09/Carolina-Herrera-Fall-2015-by-Mario-Testino.jpg',
    shopUrl: 'https://chcarolinaherrera.com/fr/en/storelocator',
    returnPolicyUrl: 'https://chcarolinaherrera.com/fr/en'
    },
    {
    brandname: 'CARRERA',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://www.sauber-group.com/wp-content/uploads/2019/01/carrera_600x600-480x480.png',
    websiteUrl: 'https://www.carreraworld.com/',
    newinUrl: 'https://www.carreraworld.com/fr-fr/collections/collection-automne-hiver-2020.html',
    coverImage: 'https://www.carreraworld.com/content/dam/carrerasite/05_Collection/Lenses/Lenses_Preview_Video.jpg',
    shopUrl: 'https://www.carreraworld.com/fr-fr/store-locator.html',
    returnPolicyUrl: 'https://www.carreraworld.com/fr-fr/retours-remboursements.html'
    },
    {
    brandname: 'CARVEN',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://journalduluxe.fr/wp-content/uploads/2015/03/Carven.jpg',
    websiteUrl: 'https://www.carven.com/fr_fr/',
    newinUrl: 'https://www.carven.com/fr_fr/nouveautes-601.html',
    coverImage: 'https://i.ytimg.com/vi/djQ98lWwypQ/maxresdefault.jpg',
    shopUrl: 'https://www.carven.com/fr_fr/ozcms/stores/locator/',
    returnPolicyUrl: 'https://www.carven.com/fr_fr/aide'
    },
    {
    brandname: 'CASADEI',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://www.fashionsauce.com/img/brands/casadei-stockists.jpg',
    websiteUrl: 'https://www.casadei.com/',
    newinUrl: 'https://www.casadei.com/fr/nouveaute-all/',
    coverImage: 'https://i.pinimg.com/originals/13/83/56/138356b4190845530ed20c89873cedb9.jpg',
    shopUrl: 'https://www.casadei.com/fr/store-locator',
    returnPolicyUrl: 'https://www.casadei.com/fr/service-client?cid=customer-service-menu-returns'
    },
    {
    brandname: 'CELINE',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2018/12/C%C3%A9line-Logo-1.jpg',
    websiteUrl: 'https://www.celine.com/',
    newinUrl: 'https://www.celine.com/fr-fr/celine-boutique-femme/winter-20-new-collection/',
    coverImage: 'https://i.pinimg.com/originals/c3/02/b9/c302b9e4ce24a91a6a5b7b5cda0f92de.jpg',
    shopUrl: 'https://stores.celine.com/fr_fr/home',
    returnPolicyUrl: 'https://www.celine.com/fr-fr/returnsrefunds/'
    },
    {
    brandname: 'CHAMPION',
    categorie: 'Sport',
    popularity: '3',
    logoUrl: 'https://i.pinimg.com/originals/67/37/7d/67377da62f8d079c808b7457ba71791e.png',
    websiteUrl: 'https://www.championstore.com/fr_fr',
    newinUrl: 'https://www.championstore.com/fr_fr/collections/premium',
    coverImage: 'https://www.sportbuzzbusiness.fr/wp-content/uploads/2019/02/champion-100-ans.jpg',
    shopUrl: 'https://www.championstore.com/fr_fr',
    returnPolicyUrl: 'https://www.championstore.com/fr_fr/livraison-et-retours'
    },
    {
    brandname: 'CHANEL',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://www.makrea.com/167039-thickbox_default/sticker-logo-chanel.jpg',
    websiteUrl: 'https://www.chanel.com/',
    newinUrl: 'https://www.chanel.com/en_WW/fashion/collection/spring-summer-2021.html',
    coverImage: 'https://i.pinimg.com/originals/c8/c8/d4/c8c8d4b3046a7a876739e90d1f49b4eb.jpg',
    shopUrl: 'https://services.chanel.com/fr_FR/storelocator',
    returnPolicyUrl: 'https://www.chanel.com/en_WW/fashion/services/care-instructions.html#contact/'
    },
    {
    brandname: 'CHANTELLE',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/fr/d/d3/Logo_Chantelle.jpg',
    websiteUrl: 'https://us.chantelle.com/',
    newinUrl: 'https://us.chantelle.com/collection.html',
    coverImage: 'https://www.lingeriefrancaise.com/image/9898c50a018b8a67c0aadea537a91739_image.jpg',
    shopUrl: 'https://us.chantelle.com/ustorelocator/location/map/',
    returnPolicyUrl: 'https://us.chantelle.com/returns-exchanges'
    },
    {
    brandname: 'CHARLY JAMES',
    categorie: 'Mode et Accessoires',
    popularity: '1',
    logoUrl: 'https://i.pinimg.com/280x280_RS/bb/94/1a/bb941adf257df5f5157e9724fef400f4.jpg',
    websiteUrl: 'https://www.charlyjames.fr/',
    newinUrl: 'https://www.charlyjames.fr/product-category/nouveautes/',
    coverImage: 'https://www.charlyjames.fr/wp-content/uploads/2019/03/Medaillon_Jeanne_1024x1024.jpg',
    shopUrl: 'https://www.charlyjames.fr/nous-retrouver/',
    returnPolicyUrl: 'https://www.charlyjames.fr/faq/'    
    },
    {
    brandname: 'CHEVIGNON',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://logos-marques.com/wp-content/uploads/2020/06/Chevignon-logo.png',
    websiteUrl: 'https://www.chevignon.fr/',
    newinUrl: 'https://www.chevignon.fr/nouvelle-capsule/dans-les-bagages/tout-voir.html',
    coverImage: 'https://lareclame-scanbook.s3.amazonaws.com/chevignon11506964420.jpg',
    shopUrl: 'https://www.chevignon.fr/nos-boutiques.php',
    returnPolicyUrl: 'https://www.chevignon.fr/faq.php'
    },
    {
    brandname: 'CHILDHOME',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://carovnysvethraciek.sk/img/m/48.jpg',
    websiteUrl: 'https://childhome.com/',
    newinUrl: 'https://childhome.com/nl/collectie-2021',
    coverImage: 'https://www.gardeningknowhow.com/wp-content/uploads/2017/06/HP-child-room.jpg',
    shopUrl: 'https://childhome.com/en/store-locator',
    returnPolicyUrl: 'https://childhome.com/fr/service-client/termes-conditions-generales'
    },
    {
    brandname: 'CHLOE',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://www.vision-optique-orgeval.com/wp-content/uploads/2016/11/logo-chloe.png',
    websiteUrl: 'https://www.chloe.com/',
    newinUrl: 'https://www.chloe.com/fr/chloe/shop-online/femme/pret-a-porter-nouveautes',
    coverImage: 'https://www.chloe.com/cloud/chloewp/uploads/2019/02/Chlo%C3%A9Girls_ASSETS_1200x989-1.jpg',
    shopUrl: 'https://www.chloe.com/experience/fr/boutiques/#search/continent/europe/store-type/chloe',
    returnPolicyUrl: 'https://www.chloe.com/system/selfservice.controller?CONFIGURATION=1815&PARTITION_ID=1&secureFlag=false&TIMEZONE_OFFSET=&CMD=BROWSE_TOPIC&TOPIC_ID=1023&USERTYPE=1'
    },
    {
    brandname: 'CHOCOLATE SOCIETY',
    categorie: 'Vin et Gastronomie',
    popularity: '0',
    logoUrl: 'https://pbs.twimg.com/profile_images/1248997222315933697/Pke1oD0O_400x400.jpg',
    websiteUrl: 'https://www.chocolate.co.uk/',
    newinUrl: 'https://www.chocolate.co.uk/collections',
    coverImage: 'https://pbs.twimg.com/media/CsP5r9WWAAAR3XU.jpg:large',
    shopUrl: 'https://www.chocolate.co.uk/',
    returnPolicyUrl: 'https://www.chocolate.co.uk/'
    },
    {
    brandname: 'CHRISTIAN DIOR',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://passion-stickers.com/4393-large_default/stickers-christian-diorr.jpg',
    websiteUrl: 'https://www.dior.com/',
    newinUrl: 'https://www.dior.com/fr_fr/mode-femme/collection-croisere-2021',
    coverImage: 'https://www.dior.com/couture/var/dior/storage/images/horizon/womens-fashion/folder-campaign/campagne-fall-2020/cover-texte-1/20044206-1-fre-FR/cover-texte-1_1440_1200.jpg',
    shopUrl: 'https://www.dior.com/store/fr_fr?origin=onedior&codeLanguage=fr_fr',
    returnPolicyUrl: 'https://www.dior.com/fr_fr/faq-couture#la-boutique-en-ligne-procedure-de-retour-et-dechange'
    },
    {
    brandname: 'CHRISTOFLE',
    categorie: 'Maison',
    popularity: '1',
    logoUrl: 'https://images.hbjo-online.com/images/all/5e4bb8caa5e78_christoflelogo-parisblackexe.jpg',
    websiteUrl: 'https://www.christofle.com/',
    newinUrl: 'https://www.christofle.com/eu_fr/couverts/categories/nouveautes-couverts.html',
    coverImage: 'https://i.ytimg.com/vi/nR-CSfZtvoM/maxresdefault.jpg',
    shopUrl: 'https://www.christofle.com/eu_fr/mw-store-locator',
    returnPolicyUrl: 'https://www.christofle.com/eu_fr/livraison-retours'
    },
    {
    brandname: 'CLAE',
    categorie: 'Mode et Accessoires',
    popularity: '1',
    logoUrl: 'https://logos-download.com/wp-content/uploads/2016/04/Clae_logo_logotype.png',
    websiteUrl: 'https://www.clae.eu/',
    newinUrl: 'https://www.clae.eu/pages/bradley-cactus-leather',
    coverImage: 'https://cdn.shopify.com/s/files/1/0891/2262/files/AW20-CACTUS-DESKTOP-V3_1800x.jpg?v=1604570089',
    shopUrl: 'https://www.clae.eu/',
    returnPolicyUrl: 'https://clae.eu/a/returns'
    },
    {
    brandname: 'CLARINS',
    categorie: 'Beauté et Soins',
    popularity: '2',
    logoUrl: 'https://dly4mho8u118u.cloudfront.net/wp-content/uploads/2017/07/19081224/logo-client-body-client-case-study-clarins.png',
    websiteUrl: 'https://www.clarins.fr/',
    newinUrl: 'https://www.clarins.fr/nouveautes/100/',
    coverImage: 'https://cdn-p.isobar.com/-/jssmedia/isobardotcom/data/media/regional/united-kingdom/case-study/1_clarins_cover.jpg?mw=1920',
    shopUrl: 'https://www.clarins.fr/trouver-un-magasin-spa',
    returnPolicyUrl: 'https://www.clarins.fr/support.html?thematic=conditions-retour'
    },
    {
    brandname: 'CLARKS',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://d353r0i7qv3gvw.cloudfront.net/21/23921/stage-mobile/480184.jpg',
    websiteUrl: 'https://www.clarks.eu/fr/',
    newinUrl: 'https://www.clarks.eu/fr/fr/nouveautes-nouveautes/homme/nouveautes-chaussures/',
    coverImage: 'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/f5jyz0lzlx2sjchdtf37/clarks-originals-2019-campaign',
    shopUrl: 'https://www.clarks.eu/fr/fr/store-locator',
    returnPolicyUrl: 'https://support.clarks.eu/hc/fr/categories/360002211419-Retours?_ga=2.1680505.998609023.1605714514-1942898739.1605714514'
    },
    {
    brandname: 'CLAUDIE PIERLOT',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://lh3.googleusercontent.com/proxy/RH2AodYXSNT520Ns2eiZ7Lxja19PEkFhwr6IbBtkfArF26XJb7PkoVLaDLwMb6voNtdE95EQGAPOYRqkTDlADXQaU6yR2WRoB_fG_EM4SBv2c9cIIQ',
    websiteUrl: 'https://fr.claudiepierlot.com',
    newinUrl: 'https://fr.claudiepierlot.com/fr/tendances/theme-6/',
    coverImage: 'https://fr.claudiepierlot.com/on/demandware.static/-/Library-Sites-ClaudiePierlot/default/dw9b2da344/rupture/Edito/Robes.jpg',
    shopUrl: 'https://fr.claudiepierlot.com/fr/boutiques',
    returnPolicyUrl: 'https://fr.claudiepierlot.com/fr/aide-et-faq/faqsretours-bis.html'
    },
    {
    brandname: 'CLEAN RESERVE',
    categorie: 'Beauté et Soins',
    popularity: '2',
    logoUrl: 'https://perfumesociety.org/wp-content/uploads/2020/02/SQUARE-LOGO-1.jpg',
    websiteUrl: 'https://www.cleanbeauty.com/',
    newinUrl: 'https://www.cleanbeauty.com/pages/shop',
    coverImage: 'https://cdn.shopify.com/s/files/1/0123/4314/8608/files/Clean_Beauty_Shoot1434_a8d2f63b-5991-4538-ae76-98995f15000c_x800.jpg?v=1588282907',
    shopUrl: 'https://www.cleanbeauty.com/pages/store-locator',
    returnPolicyUrl: 'https://www.cleanbeauty.com/pages/shipping-and-returns'
    },
    {
    brandname: 'CLINIQUE',
    categorie: 'Beauté et Soins',
    popularity: '2',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/clinique.svg',
    websiteUrl: 'https://m.fr.clinique.com/',
    newinUrl: 'https://www.fr.clinique.com/products/1667/soins',
    coverImage: 'https://pbs.twimg.com/media/DxCIfSfW0AExk7o.jpg',
    shopUrl: 'https://www.fr.clinique.com/store_locator',
    returnPolicyUrl: 'https://www.fr.clinique.com/customer-care/returns-exchanges'
    },
    {
    brandname: 'CLUSE',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://www.sarnioro.it/files/2018/02/201802221649261.jpg',
    websiteUrl: 'https://fr.cluse.com/',
    newinUrl: 'https://fr.cluse.com/collections/new-in',
    coverImage: 'https://i.ytimg.com/vi/LWit0zNP2sY/maxresdefault.jpg',
    shopUrl: 'https://fr.cluse.com/pages/store-locator',
    returnPolicyUrl: 'https://fr.cluse.com/pages/return-policy'
    },
    {
    brandname: 'COACH',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/coach.svg',
    websiteUrl: 'https://fr.coach.com/',
    newinUrl: 'https://fr.coach.com/fr_FR/shop/femme-nouveautes-toutes-les-nouveautes?viewAll=true',
    coverImage: 'https://theimpression.com/wp-content/uploads/2020/01/coach-spring-2020-ad-campaign-jennifer-lopez-the-impression.jpg',
    shopUrl: 'https://fr.coach.com/fr_FR/stores-edit-country?dwfrm_storelocator_address_international=FR&dwfrm_storelocator_findbycountry=Search%2Bcountry',
    returnPolicyUrl: 'https://fr.coach.com/fr_FR/returns-exchanges.html'
    },
    {
    brandname: 'COCOEKO',
    categorie: 'Enfants',
    popularity: '2',
    logoUrl: 'https://i.pinimg.com/280x280_RS/35/15/7a/35157a184498a0801330a7c7aa0de1aa.jpg',
    websiteUrl: 'https://www.cocoeko.fr/',
    newinUrl: 'https://www.cocoeko.fr/78-collection-bebe-cocoeko',
    coverImage: 'https://www.aprileleven.fr/img/cms/menu/cocoeko/COCOEKO%20(5).jpg',
    shopUrl: 'https://www.cocoeko.fr/',
    returnPolicyUrl: 'https://www.cocoeko.fr/content/1-livraison'
    },
    {
    brandname: 'COLUMBIA',
    categorie: 'Sport',
    popularity: '2',
    logoUrl: 'https://www.worldfootwear.com/media/images/news/wf201964063p.png',
    websiteUrl: 'https://www.columbia.com/',
    newinUrl: 'https://www.columbiasportswear.fr/FR/c/homme-nouveautes',
    coverImage: 'https://namebrandapparel.com/clothing/wp-content/uploads/2012/10/Columbia-Mountain.jpg',
    shopUrl: 'https://www.columbiasportswear.fr/FR/l/stores',
    returnPolicyUrl: 'https://www.columbiasportswear.fr/FR/retours'
    },
    {
    brandname: 'COMPTOIR DES COTONNIERS',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf-9IozOccv3XiZydgLgRbd_13TA8Z-yIQaQ&usqp=CAU',
    websiteUrl: 'https://www.comptoirdescotonniers.com/',
    newinUrl: 'https://www.comptoirdescotonniers.com/pret-a-porter/tous-les-vetements',
    coverImage: 'https://www.comptoirdescotonniers.eu/on/demandware.static/-/Library-Sites-CDCSharedLibrary/default/dw3bd2d21d/SS20/PAGE-CAMPAGNE/nous.jpg',
    shopUrl: 'https://www.comptoirdescotonniers.com/boutiques',
    returnPolicyUrl: 'https://www.comptoirdescotonniers.com/services-en-ligne-c134.html'
    },
    {
    brandname: 'COS',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://logo.allindigital.se/cosstores.com?size=256',
    websiteUrl: 'https://www.cosstores.com/', 
    newinUrl: 'https://www.cosstores.com/en_eur/new-arrivals.html',
    coverImage: 'https://s3-eu-west-1.amazonaws.com/emap-nibiru-prod/wp-content/uploads/sites/2/2020/06/25083515/COS_AW20.jpg',
    shopUrl: 'https://www.cosstores.com/en_eur/store-locator.html',
    returnPolicyUrl: 'https://www.cosstores.com/en_eur/customer-service/return-and-refund-policy.html'
    },
    {
    brandname: 'LA MER',
    categorie: 'Beauté et Soins',
    popularity: '3',
    logoUrl: 'https://fontmeme.com/images/Lar-Mer-Logo.jpg',
    websiteUrl: 'https://m.cremedelamer.fr/',
    newinUrl: 'https://m.cremedelamer.fr/collections/luxury-skincare-beauty-products',
    coverImage: 'https://excellencemagazine.luxury/wp-content/uploads/2020/05/La-Mer3-e1589381731989.jpg',
    shopUrl: 'https://m.cremedelamer.fr/stores',
    returnPolicyUrl: 'https://m.cremedelamer.fr/customer-service-returns'
    },
    {
    brandname: 'CUISSE DE GRENOUILLE',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://glltn.com/wp-content/blogs.dir/1/files/2014/01/logo-cuisse-de-grenouille.jpg',
    websiteUrl: 'https://www.cuissedegrenouille.com/fr/',
    newinUrl: 'https://www.cuissedegrenouille.com/fr/215-collection-hiver',
    coverImage: 'https://media.lexception.com/img/products/cuisse-de-grenouille/89137-cuisse-de-grenouille-sweatshirtlamouraparisembbico-01.jpg',
    shopUrl: 'https://www.cuissedegrenouille.com/fr/content/15-retailers',
    returnPolicyUrl: 'https://www.cuissedegrenouille.com/fr/content/1-livraison'
    },
    {
    brandname: 'CYRILLUS',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://media.illicado.com/media/Illicado_partners/brands/image/c/y/cyrillus_1.jpg',
    websiteUrl: 'https://www.cyrillus.fr/',
    newinUrl: 'https://www.cyrillus.fr/',
    coverImage: 'https://i.ytimg.com/vi/edeRU_KzYDI/maxresdefault.jpg',
    shopUrl: 'https://magasin.cyrillus.fr//',
    returnPolicyUrl: 'https://www.cyrillus.fr/page/guide-des-services.htm#services_retour'
    },
    {
    brandname: 'DANIEL WELLINGTON',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://stdavidscardiff.com/sites/st_davids/files/styles/shop_logo/public/images/shops/logos/sd_shoplogo_danielwellington_630x560.jpg?itok=m9EIerAh',
    websiteUrl: 'https://www.danielwellington.com/fr/',
    newinUrl: 'https://www.danielwellington.com/fr/dw-collections/',
    coverImage: 'https://images-eu.ssl-images-amazon.com/images/G/08/products/watches/divers/image_wellington._V345737341_.jpg',
    shopUrl: 'https://storelocator.danielwellington.com/fr',
    returnPolicyUrl: 'https://www.danielwellington.com/fr/return-policy/'
    },
    {
    brandname: 'DAVID MALLETT',
    categorie: 'Beauté et Soins',
    popularity: '2',
    logoUrl: 'https://www.leadingsalons.com/multimedia/salons/2f7303e213225b8522b2b441d878c50c.jpg',
    newinUrl: 'https://david-mallett.com/produit/styling-cream/',
    coverImage: 'https://www.ritzparis.com/sites/default/files/styles/1440x748/public/images/services_2/ritz-club-paris-david-mallett-header2.jpg?itok=1sGizCPJ',
    shopUrl: 'https://david-mallett.com/salons',
    returnPolicyUrl: 'https://david-mallett.com/cgv/'
    },
    {
    brandname: 'DELSEY',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://p.ventesprivees-fr.com/delsey.png',
    websiteUrl: 'https://www.delsey.com/fr/fr/home',
    newinUrl: 'https://www.delsey.com/fr/fr/l/valise/',
    coverImage: 'https://i.ytimg.com/vi/2Z8WgIO89lI/maxresdefault.jpg',
    shopUrl: 'https://www.delsey.com/fr/fr/stores',
    returnPolicyUrl: 'https://www.delsey.com/fr/fr/c/retour_-echange_-remboursement' 
    },
    {
    brandname: 'DES PETITS HAUTS',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://www.groupevuillermet.fr/wp-content/uploads/2018/10/29792119_1225214527614113_5128931659154080485_n.png',
    websiteUrl: 'https://www.despetitshauts.com/fr/',
    newinUrl: 'https://www.despetitshauts.com/fr/nouvelle-collection-97.html',
    coverImage: 'https://i2.wp.com/www.lineandcolor.fr/wp-content/uploads/2019/09/des-petits-hauts-automne-hiver-2019-banner.jpg?resize=1170%2C780&ssl=1',
    shopUrl: 'https://www.despetitshauts.com/fr/nos-boutiques',
    returnPolicyUrl: 'https://www.despetitshauts.com/fr/aide#ancre33'
    },
    {
    brandname: 'DIADORA',
    categorie: 'Sport',
    popularity: '2',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/diadora-2.svg',
    websiteUrl: 'https://www.diadora.com/',
    newinUrl: 'https://www.diadora.com/fr/fr/homme-new_arrivals/',
    coverImage: 'https://versus.uk.com/wp-content/uploads/2018/02/Diadora-Powered-By-Defiance-SS18-campaign-4-3.jpg',
    shopUrl: 'https://www.diadora.com/fr/fr/stores',
    returnPolicyUrl: 'https://www.diadora.com/fr/fr/reso.html'
    },
    {
    brandname: 'DIESEL',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://www.guide-piscine.fr/medias/image/diesel-16648-640-0.jpg',
    websiteUrl: 'https://fr.diesel.com/fr/',
    newinUrl: 'https://fr.diesel.com/fr/homme/nouveaut%C3%A9s/',
    coverImage: 'https://pauseonline.s3.eu-west-2.amazonaws.com/wp-content/uploads/2020/05/2-15.jpg',
    shopUrl: 'https://fr.diesel.com/fr/stores',
    returnPolicyUrl: 'https://fr.diesel.com/fr/help-show?content=returns'
    },
    {
    brandname: 'DIPTYQUE',
    categorie: 'Maison',
    popularity: '2',
    logoUrl: 'https://i.pinimg.com/originals/8b/5d/6a/8b5d6ad0a6f109c3db5be4d266a47d28.jpg',
    websiteUrl: 'https://www.diptyqueparis.com/',
    newinUrl: 'https://collection-hiver.diptyqueparis.com/fr_fr/products/interior',
    coverImage: 'https://les-graphiquants.fr/en/assets/img/16-DIPTYQUE/DIPTYQUE_Boites_2015_01-min.jpg',
    shopUrl: 'https://les-graphiquants.fr/en/assets/img/16-DIPTYQUE/DIPTYQUE_Boites_2015_01-min.jpg',
    returnPolicyUrl: 'https://www.diptyqueparis.com/fr_fr/c/livraison-et-retours.html#terms'
    },
    {
    brandname: 'DITA',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://le-cdn.website-editor.net/2bd8042f4151419c851ca4f47d30cc51/dms3rep/multi/opt/Dita-logo-V2-2x0a066gcrm1izvgzysw7e-640w.jpg',
    websiteUrl: 'https://dita.com/fr-fr/',
    newinUrl: 'https://dita.com/sun/new-release-sun',
    coverImage: 'https://i.pinimg.com/originals/85/01/f9/8501f9d35de4f6d71db69c389b08cf8f.jpg',
    shopUrl: 'https://dita.com/fr-fr/stores/',
    returnPolicyUrl: 'https://dita.com/returns'
    },
    {
    brandname: 'DOLCE & GABBANA',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://passion-stickers.com/994-large_default/stickers-dolce-gabbana-dg.jpg',
    websiteUrl: 'https://www.dolcegabbana.com/en/',
    newinUrl: 'https://www.dolcegabbana.com/fr/nouveautes/',
    coverImage: 'https://fashionweekdaily.com/wp-content/uploads/2018/07/dolce-ad.jpg',
    shopUrl: 'https://www.dolcegabbana.com/fr/nouveautes/',
    returnPolicyUrl: 'https://www.dolcegabbana.com/fr/service-client?cid=customer-service-menu-returns'
    },
    {
    brandname: 'DR. HAUSCHKA',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'data:image/png;base64,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',
    websiteUrl: 'https://www.drhauschka.fr/',
    newinUrl: 'https://www.drhauschka.fr/cosmetiques-naturels-et-biologiques/?p=1',
    coverImage: 'https://www.ignant.com/wp-content/uploads/2020/03/ignant-video-hauschka-marina-denisova-15-2880x1920.jpg',
    shopUrl: 'https://www.drhauschka.fr/rechercher-un-revendeur',
    returnPolicyUrl: 'https://www.drhauschka.fr/retour-echange/'
    },
    {
    brandname: 'DSQUARED2',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://i1.wp.com/allestimentivetrinesardegna.it/wp-content/uploads/2020/06/Dsquared-LOGO.jpg?resize=500%2C500&ssl=1',
    websiteUrl: 'https://www.dsquared2.com/fr',
    newinUrl: 'https://www.dsquared2.com/fr/collections_section',
    coverImage: 'https://theimpression.com/wp-content/uploads/2020/10/Dsquared2-fall-2020-ad-campaign-the-impression-header.png',
    shopUrl: 'https://www.dsquared2.com/experience/fr/stores/',
    returnPolicyUrl: 'https://www.dsquared2.com/fr/ProductExchange/SearchOrder'
    },
    {
    brandname: 'DYSON',
    categorie: 'Technologie',
    popularity: '2',
    logoUrl: 'https://www.electroguide.com/wp-content/uploads/2018/09/logo-dyson-marque.jpg',
    websiteUrl: 'https://www.dyson.fr/fr',
    newinUrl: 'https://www.dyson.fr/aspirateurs/sans-fil',
    coverImage: 'https://ds1.static.rtbf.be/article/image/1248x702/d/d/7/b48eb67eb95b4ec2fbfd829cc6b867c3-1520252432.png',
    shopUrl: 'https://www.dyson.fr/a-propos-de-dyson/dyson-demo',
    returnPolicyUrl: 'https://www.dyson.fr/a-propos-de-dyson/conditions-generales/details-de-livraison'
    },
    {
    brandname: 'EDEN PARK',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://www.lejournaldesventes.fr/logos/eden-park.png',
    websiteUrl: 'https://www.eden-park.fr/fr_fr/',
    newinUrl: 'https://www.eden-park.fr/fr_fr/homme/inspiration/nouveautes.html',
    coverImage: 'https://i.ytimg.com/vi/OS3oCxPeXGs/maxresdefault.jpg',
    shopUrl: 'https://stores.eden-park.com/fr_fr/vetements/',
    returnPolicyUrl: 'https://www.eden-park.fr/fr_fr/conditions-retractation/'
    },
    {
    brandname: 'ELLESSE',
    categorie: 'Sport',
    popularity: '2',
    logoUrl: 'https://i2.wp.com/linkup97.com/wp-content/uploads/2019/06/8a8bcc6cb527c7bc727f7e9b886fcfef.png?fit=400%2C400&ssl=1',
    websiteUrl: 'https://www.ellesse.com/',
    newinUrl: 'https://www.ellesse.com/uk/en/collections',
    coverImage: 'https://yard.media/wp-content/uploads/2017/04/ellesse.jpg',
    shopUrl: 'https://www.ellesse.com/',
    returnPolicyUrl: 'https://www.ellesse.com/uk/en/returns'
    },
    {
    brandname: 'EMOI EMOI',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-JsATmIylVD4w5VKOetAbn6fSsWQRyIlUHg&usqp=CAU',
    websiteUrl: 'https://www.emoi-emoi.com/',
    newinUrl: 'https://emoi-emoi.com/collections/all-products',
    coverImage: 'https://media-exp1.licdn.com/dms/image/C561BAQHIAofFkHtC3g/company-background_10000/0?e=2159024400&v=beta&t=aTapnlFfWGGGiTSpR7odLUNuVmGHBG00xN6ZGlOxm8w',
    shopUrl: 'https://emoi-emoi.com/pages/pop-up',
    returnPolicyUrl: 'https://emoiemoi.zendesk.com/hc/fr/categories/360000259718-Retour-et-remboursement'
    },
    {
    brandname: 'ENFANCE PARIS',
    categorie: 'Enfants',
    popularity: '2',
    logoUrl: 'https://peekandpack.com/wp-peekandpack/wp-content/uploads/2015/03/logo_enfance-560x597.jpg',
    websiteUrl: 'https://www.enfance-paris.com/fr/',
    newinUrl: 'https://www.enfance-paris.com/fr/',
    coverImage: 'https://www.beaumarket.com/wp-content/uploads/2018/06/enfance-paris.png',
    shopUrl: 'https://www.enfance-paris.com/fr/magasins',
    returnPolicyUrl: 'https://www.enfance-paris.com/fr/content/3-conditions-utilisation'
    },
    {
    brandname: 'ESTÉE LAUDER',
    categorie: 'Beauté et Soins',
    popularity: '3',
    logoUrl: 'https://brandwiki.ru/up/brands/product/190208_4616.jpg',
    websiteUrl: 'https://m.esteelauder.fr/',
    newinUrl: 'https://www.esteelauder.fr/products/20071/boutiques/nouveautes-soin',
    coverImage: 'https://i.ytimg.com/vi/z4DPMpJNSHw/maxresdefault.jpg',
    shopUrl: 'https://www.esteelauder.fr/store-locator',
    returnPolicyUrl: 'https://www.esteelauder.fr/customer-service/returns'
    },
    {
    brandname: 'EVERLAST',
    categorie: 'Sport',
    popularity: '2',
    logoUrl: 'https://pbs.twimg.com/profile_images/728302826112360448/67sTAyHp_400x400.jpg',
    websiteUrl: 'https://www.everlast.com/',
    newinUrl: 'https://www.everlast.com/fight/boxing/gloves',
    coverImage: 'https://i.ytimg.com/vi/kab772PXbYI/maxresdefault.jpg',
    shopUrl: 'https://www.everlast.com/',
    returnPolicyUrl: 'https://www.everlast.com/returns'
    },
    {
    brandname: 'FAÇONNABLE',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://carrieres.sciencespo.fr/images/cache/300_849f89638d2c247fb96e860b8beeaaec495426e5.png',
    websiteUrl: 'https://www.faconnable.com/fr/',
    newinUrl: 'https://www.faconnable.com/fr_eu/collection/',
    coverImage: 'https://i.pinimg.com/originals/93/68/6c/93686c2cad8cf7a615caeebb0c880097.jpg',
    shopUrl: 'https://www.faconnable.com/fr/shops/locator/map/',
    returnPolicyUrl: 'https://www.faconnable.com/fr_eu/returns.html'
    },
    {
    brandname: 'FATBOY',
    categorie: 'Maison',
    popularity: '2',
    logoUrl: 'https://www.fatboy.com/assets/og-fb.png',
    websiteUrl: 'https://www.fatboy.com/fr-fr',
    newinUrl: 'https://www.fatboy.com/fr-fr/grands-poufs',
    coverImage: 'https://www.einrichten-design.fr/thumbnail/a3/bd/9d/1597958705/Fatboy%20Sitzsack%20Slim%20Velvet%202_1920x1920.jpg',
    shopUrl: 'https://www.fatboy.com/fr-fr/store-locator',
    returnPolicyUrl: 'https://service.fatboy.com/hc/fr-fr/sections/115001126345-Renvoyer'
    },
    {
    brandname: 'FENDI',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://i.pinimg.com/originals/31/c6/ed/31c6ed61d88c89323a91c59654570ba6.png',
    websiteUrl: 'https://www.fendi.com/',
    newinUrl: 'https://www.fendi.com/fr/nouveautes-femme',
    coverImage: 'https://i1.wp.com/www.theglassmagazine.com/wp/wp-content/uploads/2020/08/Peekaboo-Global-Campaign-Feature-.jpg?fit=1400%2C900&ssl=1',
    shopUrl: 'https://www.fendi.com/fr/services-fendi',
    returnPolicyUrl: 'https://www.fendi.com/fr/info/customer-care/returns-and-refunds'
    },
    {
    brandname: 'FERM LIVING',
    categorie: 'Maison',
    popularity: '2',
    logoUrl: 'https://matea.com/library/local/TimThumb/TimThumb.php?src=https://matea.com/app/media/common/images/brand/logo5295d85698060.jpg&h=400&w=400&zc=2',
    websiteUrl: 'https://fermliving.com/',
    newinUrl: 'https://fermliving.com/collections/all-products',
    coverImage: 'https://www.einrichten-design.fr/thumbnail/06/cf/f1/1597938664/Ferm%20Living%20Bau%20Pot%20Blumentopf%20Gro%C3%9F%2051_1920x1920.jpg',
    shopUrl: 'https://fermliving.com/',
    returnPolicyUrl: 'https://fermliving.com/pages/cancellation'
    },
    {
    brandname: 'FILA',
    categorie: 'Sport',
    popularity: '3',
    logoUrl: 'https://media.gemo.fr/dyn/dyn/MEDIA_ProductCatalog/m2350279_logo-marque-3-min.jpg',
    websiteUrl: 'https://www.fila.de/en/home/',
    newinUrl: 'https://www.fila.de/New-Arrivals/',
    coverImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d0f46558555065.5a00ed83ec58a.jpg',
    shopUrl: 'https://www.fila.de/en/home/',
    returnPolicyUrl: "https://www.fila.de/index.php?cl=faq&subject=420&lang=1"
    },
    {
    brandname: 'FJALLRAVEN',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://www.latroikastore.com/media/cache/brand_thumbnail/72/d8/484354ba7d74c3b78dcfb3c9dd35.jpeg',
    websiteUrl: 'https://www.fjallraven.com/',
    newinUrl: 'https://www.fjallraven.com/fr/fr-fr/sacs-et-equipement/nouveautes',
    coverImage: 'https://i.pinimg.com/originals/23/dc/04/23dc0491b534da4c9cdde5c87887906f.jpg',
    shopUrl: 'https://www.fjallraven.com/fr/fr-fr/service-clients/store-locator',
    returnPolicyUrl: 'https://www.fjallraven.com/fr/fr-fr/service-clients/retours'
    },
    {
    brandname: 'FOSSIL',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://opticiens.optic2000.com/media/brands/2102/fr_FR/picturePath/originals/logo_0417.jpg',
    websiteUrl: 'https://www.fossil.com/',
    newinUrl: 'https://www.fossil.com/fr-fr/nouveautes/femmes/montres/',
    coverImage: 'https://i.pinimg.com/originals/27/e3/dd/27e3dd2b4f10a665e3934fa5cd5da103.jpg',
    shopUrl: 'https://www.fossil.com/fr-fr/store-locator.html',
    returnPolicyUrl: 'https://support.fossil.com/hc/fr/articles/115005671166-RETOURS-ET-%C3%89CHANGES'
    },
    {
    brandname: 'FRED PERRY',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://ae01.alicdn.com/kf/HTB11B4LQyLaK1RjSZFxq6ymPFXa2/Fred-Perry-Mode-Marque-Logo-Autocollant-Voiture-Autocollant-Vinyle-Imperm-able-L-eau-Autocollant-de-Fen.jpg_640x640.jpg',
    websiteUrl: 'https://www.fredperry.com/eu-fr/',
    newinUrl: 'https://www.fredperry.com/eu-fr/homme/nouveautes',
    coverImage: 'https://www.propermag.com/wp-content/uploads/2015/02/584NC_Leica5_.jpg',
    shopUrl: 'https://www.fredperry.com/eu-fr/shop-finder',
    returnPolicyUrl: 'https://www.fredperry.com/eu-fr/helpcentre/category/retours-et-echanges'
    },
    {
    brandname: 'FURLA',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://pbs.twimg.com/profile_images/1164483210576879616/UCKIwkq3_400x400.jpg',
    websiteUrl: 'https://www.furla.com/',
    newinUrl: 'https://www.furla.com/fr/fr/eshop/new-arrivals/',
    coverImage: 'https://thedcedit.com/wp-content/uploads/2018/10/Furla-Fall-2018-Collection-Thumbnail.jpg',
    shopUrl: 'https://www.furla.com/fr/fr/stores/',
    returnPolicyUrl: 'https://www.furla.com/fr/fr/eshop/customer-service/returns/'
    },
    {
    brandname: 'FUSALP',
    categorie: 'Sport',
    popularity: '1',
    logoUrl: 'https://ibp.info6tm.fr/api/v1/images/view/5dc2d21f8fe56f1e9d643866/ibp_preview/image.jpg',
    websiteUrl: 'https://www.fusalp.com/',
    newinUrl: 'https://www.fusalp.com/fr/1863-nouveautes-homme',
    coverImage: 'https://media.lesechos.com/api/v1/images/view/5c0536f48fe56f396f012313/1280x720/0211812990830-web.jpg',
    shopUrl: 'https://www.fusalp.com/fr/magasins',
    returnPolicyUrl: 'https://www.fusalp.com/fr/content/22-retours-et-echanges'
    },
    {
    brandname: 'GAMIN GAMINE.',
    categorie: 'Enfants',
    popularity: '1',
    logoUrl: 'https://touteslesbox.fr/wp-content/uploads/2019/09/gamin-gamine-fond.png',
    websiteUrl: 'https://www.gaminetgamine.com/',
    newinUrl: 'https://www.gaminetgamine.com/3-shop-kids-mini',
    coverImage: 'https://touteslesbox.fr/wp-content/uploads/2019/09/fw_19_naturemorte_131.jpg',
    shopUrl: 'https://www.gaminetgamine.com/',
    returnPolicyUrl: 'https://www.gaminetgamine.com/content/3-conditions-generales'
    },
    {
    brandname: 'GANT',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://www.alombredesmarques.fr/media/gantlogo1__094953000_1634_24042019.jpg',
    websiteUrl: 'https://fr.gant.com/',
    newinUrl: 'https://fr.gant.com/nouveautes-homme',
    coverImage: 'https://images.complex.com/complex/image/upload/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/gp0tsubqtjwij7ob9crf.jpg',
    shopUrl: 'https://stores.gant.com/?_ga=2.83138070.1818709888.1592821488-599251370.1592821488',
    returnPolicyUrl: 'https://fr.gant.com/retours'
    },
    {
    brandname: 'GEORG JENSEN',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://res.cloudinary.com/westfielddg/image/upload/westfield-media/uk/retailer/logos/hokwgflrc84osbvmtqvp.png',
    websiteUrl: 'https://www.georgjensen.com/global',
    newinUrl: 'https://www.georgjensen.com/europe/new-arrivals',
    coverImage: 'https://d3kjsgjzc88yq5.cloudfront.net/wp-content/uploads/2016/08/GJ_1.jpg',
    shopUrl: 'https://www.georgjensen.com/global/storelocator',
    returnPolicyUrl: 'https://www.georgjensen.com/europe/exchange-and-returns'
    },
    {
    brandname: 'GERARD DAREL',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://d1ub23vf8gaa82.cloudfront.net/brand/gerard%20darel/4a62925d-215a-40e1-84f1-3c46d31486af_500_500.jpg',
    websiteUrl: 'https://www.gerarddarel.com/fr_fr/',
    newinUrl: 'https://www.gerarddarel.com/fr_fr/new-1481.html',
    coverImage: 'https://i.ytimg.com/vi/Aqh3MD29YWg/maxresdefault.jpg',
    shopUrl: 'https://www.gerarddarel.com/fr_fr/ozcms/stores/locator/',
    returnPolicyUrl: 'https://www.gerarddarel.com/fr_fr/aide/'
    },
    {
    brandname: 'GIANVITO ROSSI',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://i.pinimg.com/280x280_RS/76/32/ee/7632ee53ee9e69788bf75b3c26444a3e.jpg',
    websiteUrl: 'https://www.gianvitorossi.com/fr_en/',
    newinUrl: 'https://www.gianvitorossi.com/fr_en/woman/new-arrivals.html#more1',
    coverImage: 'https://i.ytimg.com/vi/Ay_v4NY24VY/maxresdefault.jpg',
    shopUrl: 'https://www.gianvitorossi.com/fr_en/boutiques',
    returnPolicyUrl: 'https://www.gianvitorossi.com/fr_en/returns-and-refunds'
    },
    {
    brandname: 'GIVENCHY',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://www.graphic-jobs.com/portfolio/images/2935826a94f6888bf5614a0ed66e5a12.jpg',
    websiteUrl: 'https://www.givenchy.com/fr/fr/homepage',
    newinUrl: 'https://www.givenchy.com/fr/fr/femme/nouveautes/',
    coverImage: 'https://www.sleek-mag.com/wp-content/uploads/2017/02/tights1-lea-t-.jpg',
    shopUrl: 'https://www.givenchy.com/fr/fr/storelocator',
    returnPolicyUrl: 'https://www.givenchy.com/fr/fr/return-refund.html'
    },
    {
    brandname: 'GOLDEN GOOSE',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://i.dlpng.com/static/png/7239480_preview.png',
    websiteUrl: 'https://www.goldengoose.com/fr/fr',
    newinUrl: 'https://www.goldengoose.com/fr/fr/whats-new/new-arrivals-woman.html',
    coverImage: 'https://i.pinimg.com/originals/c1/d4/1c/c1d41cbedb322322e490dcf916a49cee.jpg',
    shopUrl: 'https://www.goldengoose.com/fr/fr/store-locator?showMap=true&horizontalView=true&isForm=true',
    returnPolicyUrl: 'https://www.goldengoose.com/fr/fr/customercare/shippingandreturn.html'
    },
    {
    brandname: 'GREEN FACTORY',
    categorie: 'Maison',
    popularity: '1',
    logoUrl: 'data:image/png;base64,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',
    websiteUrl: 'https://www.greenfactory.fr/',
    newinUrl: 'https://www.greenfactory.fr/collections',
    coverImage: 'https://www.photosmurales.fr/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/s/h/sh041-vd4_into_the_jungle_web.jpg',
    shopUrl: 'https://www.greenfactory.fr/pages/nos-boutiques',
    returnPolicyUrl: 'https://www.greenfactory.fr/pages/cgv-green-factory'
    },
    {
    brandname: 'GUCCI',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://www.twinpix.biz/img/clients/logo21.png',
    websiteUrl: 'https://www.gucci.com/fr/fr/',
    newinUrl: 'https://www.gucci.com/fr/fr/st/what-new',
    coverImage: 'https://imageproxy.themaven.net//https%3A%2F%2Ffashionista.com%2F.image%2FMTc0MzA3NzUxNjA0NzkxMTY0%2Fgucci-fall-2020.png',
    shopUrl: 'https://www.gucci.com/fr/fr/store?store-search=&search-cat=store-locator',
    returnPolicyUrl: 'https://www.gucci.com/fr/fr/st/faq#returns-and-exchanges'
    },
    {
      brandname: 'GUERLAIN',
      categorie: 'Mode et Accessoires',
      popularity: '3',
      logoUrl: 'https://designetvue.files.wordpress.com/2014/04/logo-gucci.png?w=450',
      websiteUrl: 'https://m.guerlain.com/fr/fr-fr',
      newinUrl: 'https://www.guerlain.com/fr/fr-fr/parfum/les-nouveautes/',
      coverImage: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/angelina-jolie-ad-1564851178.jpg',
      shopUrl: 'https://stores.guerlain.com/fr/fr_FR',
      returnPolicyUrl: 'https://www.guerlain.com/fr/fr-fr/c/FAQ.html#FAQ_8'
    },
    {
    brandname: 'GUESS',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://static-pepper.dealabs.com/threads/thread_large/default/1318367_2.jpg',
    websiteUrl: 'https://www.guess.eu/',
    newinUrl: 'https://www.guess.eu/fr-fr/lookbook.html',
    coverImage: 'https://mms.businesswire.com/media/20190716005621/en/733161/5/1.jpg',
    shopUrl: 'https://www.guess.eu/en-fr/StoreLocator',
    returnPolicyUrl: 'https://www.guess.eu/fr-fr/eu-needhelp-content.html#returns'
    },
    {
    brandname: 'HALSTON',
    categorie: 'Mode et Accessoires',
    popularity: '1',
    logoUrl: 'https://i.pinimg.com/280x280_RS/37/49/bc/3749bc0f946150940f3564f85e97c9b3.jpg',
    websiteUrl: 'https://halston.com/',
    newinUrl: 'https://halston.com/collections/halston-new-arrivals',
    coverImage: 'https://i.ytimg.com/vi/T5bjVtYZC_U/maxresdefault.jpg',
    shopUrl: 'https://halston.com/',
    returnPolicyUrl: 'https://halston.com/pages/returns'
    },
    {
    brandname: 'HELLY HANSEN',
    categorie: 'Sport',
    popularity: '2',
    logoUrl: 'https://www.pionniers-chamonix.com/mojolib/uploads/2019/01/Logo-Helly-Hansen-site.jpg',
    websiteUrl: 'https://www.hellyhansen.com/fr_fr/',
    newinUrl: 'https://www.hellyhansen.com/fr_fr/mens',
    coverImage: 'https://i.ytimg.com/vi/RUi3UVO0Nik/maxresdefault.jpg',
    shopUrl: 'https://www.hellyhansen.com/store-finder',
    returnPolicyUrl: 'https://www.hellyhansen.com/en_fr/returns'
    },
    {
    brandname: 'HERMÈS',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2019/11/Herm%C3%A8s-Logo-1.jpg',
    websiteUrl: 'https://www.hermes.com/',
    newinUrl: 'https://www.hermes.com/fr/fr/category/femme/pret-a-porter/pre-collection-automne-hiver/#||Cat%C3%A9gorie',
    coverImage: 'https://assets.hermes.cn/is/image/hermesedito/P_169_Institutional_Campaign_Women_silk_EN_cover?wid=1200',
    shopUrl: 'https://www.hermes.com/fr/fr/recherche-boutique/',
    returnPolicyUrl: 'https://www.hermes.com/fr/fr/faq/achat-en-ligne-fr/#retour-et-%C3%A9changes'
    },
    {
    brandname: 'HERSCHEL',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://i.pinimg.com/originals/08/b0/f0/08b0f01cb320415d27a017b4e8fa14e7.jpg',
    websiteUrl: 'https://herschelsupply.fr/',
    newinUrl: 'https://herschelsupply.fr/shop/collections/backpacks',
    coverImage: 'https://cdn.herschelsupply.com/uploads/2015/10/F15_Marketing_Select-06_web.jpg',
    shopUrl: 'https://herschelsupply.fr/store-locator',
    returnPolicyUrl: 'https://herschelsupply.fr/returns'
    },
    {
    brandname: 'HOLUBAR',
    categorie: 'Mode et Accessoires',
    popularity: '0',
    logoUrl: 'https://www.fashionsauce.com/img/brands/holubar-stockists.jpg',
    websiteUrl: 'https://www.holubar.com/en/',
    newinUrl: 'https://www.holubar.com/it/new-arrivals/?RwGal=true&nodi_ID=230',
    coverImage: 'https://classic-kontor.com/media/image/60/e0/9c/IMG_0271.jpg',
    shopUrl: 'https://www.holubar.com/en/stores.php',
    returnPolicyUrl: 'https://www.holubar.com/it/servizio_clienti/sc_resi_rimborsi.php'
    },
    {
    brandname: 'HYPSOE',
    categorie: 'Maison',
    popularity: '0',
    logoUrl: 'https://cabana29.online/wp-content/uploads/2019/06/hypsoe-logo.jpg',
    websiteUrl: 'https://www.hypsoe.fr/',
    newinUrl: 'https://www.hypsoe.fr/bougies-parfumees.html',
    coverImage: 'https://i.pinimg.com/originals/88/7c/9f/887c9fde47ac1c6a97b5b620cd8506ca.jpg',
    shopUrl: 'https://www.hypsoe.fr/',
    returnPolicyUrl: 'https://www.hypsoe.fr/cgv.html'
    },
    {
    brandname: 'IIYAMA',
    categorie: 'Technologie',
    popularity: '0',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/iiyama-1.svg',
    websiteUrl: 'https://iiyama.com/',
    newinUrl: 'https://iiyama.com/fr_fr/produits/#/filter',
    coverImage: 'https://cdn2.expertreviews.co.uk/sites/expertreviews/files/2018/03/iiyama_prolite_xb2779qqs_review.jpg',
    shopUrl: 'https://iiyama.com/fr_fr/ou-acheter/#trouver-un-revendeur-local',
    returnPolicyUrl: ''
    },
    {
    brandname: 'ILIA',
    categorie: 'Beauté et Soins',
    popularity: '2',
    logoUrl: 'https://i.vimeocdn.com/portrait/10206339_640x640',
    websiteUrl: 'https://iliabeauty.com/',
    newinUrl: 'https://iliabeauty.com/',
    coverImage: 'https://www.freshlab.be/pub/media/catalog/category/Hayley_Mascara_1_1296x.jpeg',
    shopUrl: 'https://iliabeauty.com/pages/find-a-store',
    returnPolicyUrl: 'https://iliabeauty.com/pages/return-policy'
    },
    {
    brandname: 'IRO',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtlf7c0Lx71fjtio3FCx4qxkDFoKJDrHxWBQ&usqp=CAU',
    websiteUrl: 'https://www.iroparis.com/fr',
    newinUrl: 'https://www.iroparis.com/fr/c/women/hiver-20/',
    coverImage: 'https://i.pinimg.com/originals/03/07/1b/03071b7631188fda43e0e24a01b8d78e.jpg',
    shopUrl: 'https://www.iroparis.com/fr/stores',
    returnPolicyUrl: 'https://www.iroparis.com/fr/assistance/shipping-returns.html'
    },
    {
    brandname: 'ISABEL MARANT',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://ladresse-boutique.com/pub/media/ves/brand/cache/i/s/isabelmarant-logo_500x455.jpg',
    websiteUrl: 'https://www.isabelmarant.com/fr',
    newinUrl: 'https://www.isabelmarant.com/fr/lookbooks/isabel-marant/automne-2020/',
    coverImage: 'https://media.lesechos.com/api/v1/images/view/5d19fe798fe56f7ae919f1cc/1280x720/0601485135616-web-tete.jpg',
    shopUrl: 'https://www.isabelmarant.com/fr/boutiques/',
    returnPolicyUrl: 'https://www.isabelmarant.com/system/selfservice.controller?CMD=BROWSE_TOPIC&CONFIGURATION=2009&COUNTRY=fr&LANGUAGE=fr&PARTITION_ID=1&TOPIC_ID=1023&USERTYPE=1&secureFlag=false'
    },
    {
    brandname: 'JACADI',
    categorie: 'Enfants',
    popularity: '2',
    logoUrl: 'https://kirchberg-shopping.lu/media/sys_master/root/h14/h67/8952887509022/Jacadi-kirchberg062020.png',
    websiteUrl: 'https://www.jacadi.fr/',
    newinUrl: 'https://www.jacadi.fr/nouvelle-collection',
    coverImage: 'https://mediaslide-europe.storage.googleapis.com/boutchou/pictures/1296/1801/large-1473175976-87b4da8785cf598e94c41da898587a1f.jpg',
    shopUrl: 'https://www.jacadi.fr/store-finder',
    returnPolicyUrl: 'https://www.jacadi.fr/conditions-generales-de-vente#articl10'
    },
    {
    brandname: 'JACQUEMUS',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/jrd6qhbmrnpoqp7u1dsg',
    websiteUrl: 'https://www.jacquemus.com/fr/',
    newinUrl: 'https://www.jacquemus.com/fr/categorie-produit/femme/nouveautes',
    coverImage: 'https://dazedimg-dazedgroup.netdna-ssl.com/1200/0-660-1926-1284/azure/dazed-prod/1180/4/1184558.jpg',
    shopUrl: 'https://www.jacquemus.com/fr/company/retailers',
    returnPolicyUrl: 'https://www.jacquemus.com/fr/service-client/returns-and-exchanges'
    },
    {
    brandname: 'JIMMY CHOO',
    categorie: 'Beauté et Soins',
    popularity: '3',
    logoUrl: 'https://passion-stickers.com/4423-large_default/stickers-jimmychoo.jpg',
    websiteUrl: 'https://row.jimmychoo.com/',
    newinUrl: 'https://row.jimmychoo.com/fr_FR/femme/nouveaut%C3%A9s/',
    coverImage: 'https://i.ytimg.com/vi/Y8WUmDerdvE/maxresdefault.jpg',
    shopUrl: 'https://row.jimmychoo.com/fr_FR/store-locator',
    returnPolicyUrl: 'https://row.jimmychoo.com/fr_FR/service-client%C3%A8le/delivery-returns.html'
    },
    {
    brandname: 'JONAK',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://pbs.twimg.com/profile_images/793096613443010560/jnYeE13q_400x400.jpg',
    websiteUrl: 'https://www.jonak.fr/',
    newinUrl: 'https://www.jonak.fr/collection/chaussures/nouveautes.html',
    coverImage: 'https://i.pinimg.com/originals/a3/13/a1/a313a113d363af7aea864ffa3d5738d0.jpg',
    shopUrl: 'https://www.jonak.fr/nos-boutiques.php',
    returnPolicyUrl: 'https://www.jonak.fr/procedure-retour.php'
    },
    {
    brandname: 'JORDAN',
    categorie: 'Sport',
    popularity: '3',
    logoUrl: 'https://www.nicekicks.com/files/2020/06/air-jordan-jumpman-logo.jpg',
    websiteUrl: 'https://www.nike.com/fr/jordan',
    newinUrl: 'https://www.nike.com/fr/w/jordan-37eef',
    coverImage: 'https://www.dior.com/couture/var/dior/storage/images/horizon/mens-fashion/air-dior/cover-air-dior-registration/20380120-29-eng-GB/cover-air-dior-registration4_1440_1200.jpg',
    shopUrl: 'https://www.nike.com/fr/retail?page=1&storesPerPage=15',
    returnPolicyUrl: 'https://www.nike.com/fr/help/a/conditions-de-retour-ue'
    },
    {
    brandname: 'JULIETTE HAS A GUN',
    categorie: 'Beauté et Soins',
    popularity: '2',
    logoUrl: 'data:image/png;base64,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',
    websiteUrl: 'https://www.juliettehasagun.com/',
    newinUrl: 'https://www.juliettehasagun.com/fr/27-nouveautes',
    coverImage: 'https://thejournalmag.com/wp-content/uploads/2019/11/ADP_Julietter-Has-A-Gun_19.11.19_%C2%A9Esteban-La-Tessa-26.jpg',
    shopUrl: 'https://www.juliettehasagun.com/fr/magasins',
    returnPolicyUrl: 'https://www.juliettehasagun.com/fr/content/7-conditions-generales-de-vente'
    },
    {
    brandname: 'K-WAY',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://lirp-cdn.multiscreensite.com/47c8ae12/dms3rep/multi/opt/asset%2023-600x600-448w.jpeg',
    websiteUrl: 'https://www.k-way.fr/',
    newinUrl: 'https://www.k-way.fr/361-nouvelle-collection-ah20',
    coverImage: 'https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/vivre/mode/k-way-le-vent-en-poupe-1503221/24583559-1-fre-FR/K-way-le-vent-en-poupe.jpg',
    shopUrl: 'https://www.k-way.fr/nos-boutiques',
    returnPolicyUrl: 'https://www.k-way.fr/content/23-livraisons-et-retours'
    },
    {
    brandname: 'KANGOL',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBXcIIOsw1dkoNEp-3aVMi8EAAakeosf4CoA&usqp=CAU',
    websiteUrl: 'https://www.kangol.com/',
    newinUrl: 'https://www.kangol.com/collections/new-arrivals',
    coverImage: 'https://www.b-reel.com/static/58e2da561b4d42b7ac72163c06eb05f4/c1679/53dd96a7-6299-4838-a450-1f30b570f011_H%2526M%2Bx%2BKangol_Still%2B1.jpg',
    shopUrl: 'https://www.kangol.com/stores',
    returnPolicyUrl: 'https://www.kangol.com/returns/'
    },
    {
    brandname: 'KARL LAGERFELD',
    popularity: '3',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.mybeauty.it/img/m/10809-large_default.jpg',
    websiteUrl: 'https://www.karl.com/fr',
    newinUrl: 'https://www.karl.com/fr/femme/nouveautes',
    coverImage: 'https://photos.prnewswire.com/prnfull/20160830/402760',
    shopUrl: 'https://www.karl.com/experience/fr/store-locator/',
    returnPolicyUrl: 'https://www.karl.com/system/selfservice.controller?CMD=BROWSE_TOPIC&CONFIGURATION=1610&COUNTRY=fr&LANGUAGE=fr&PARTITION_ID=1&TOPIC_ID=1023&USERTYPE=1&secureFlag=false'
    },
    {
    brandname: 'KATE SPADE NEW YORK',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0mPMogPNTraYR0c5Y6krJw07x9-YvT94CpQ&usqp=CAU',
    websiteUrl: 'https://www.katespade.com/',
    newinUrl: 'https://eu.katespade.com/en-fr/new-arrivals/',
    coverImage: 'https://wwd.com/wp-content/uploads/2019/04/kate-spade-s19-ad-01-1.jpg',
    shopUrl: 'https://eu.katespade.com/en-fr/stores/',
    returnPolicyUrl: 'https://eu.katespade.com/en-fr/customer-care/return-rules-restrictions.html'
    },
    {
    brandname: 'KENZO',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://pingpong.fr/wp-content/uploads/2011/05/logo-KENZO.jpg',
    websiteUrl: 'https://m.kenzo.com/eu/fr/accueil',
    newinUrl: 'https://www.kenzo.com/eu/fr/femmes',
    coverImage: 'https://imgix.bustle.com/uploads/image/2020/8/28/40ec4c54-543f-4fcf-acbb-ac6a4c7225ac-06_677-f1-00384-kenzo-sport-by-tim-elkaim.jpg',
    shopUrl: 'https://www.kenzo.com/eu/fr/recherche-magasin',
    returnPolicyUrl: 'https://www.kenzo.com/eu/fr/returns'
    },
    {
    brandname: 'KICKERS',
    categorie: 'Mode et Accessoires',
    popularity: '1',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlCMrGZnyNC-CF2CWD-ceypsmcRgBWKFlCWg&usqp=CAU',
    websiteUrl: 'https://www.kickers.com/fr/',
    newinUrl: 'https://www.kickers.com/fr/s/638/nouvelle-collection',
    coverImage: 'https://payload.cargocollective.com/1/11/354222/8835775/Kickers_Luca_Patrone_01_1340_c.jpg',
    shopUrl: 'https://www.kickers.com/fr/content/46-les-boutiques-kickers',
    returnPolicyUrl: 'https://www.kickers.com/fr/content/21-faq'
    },
    {
    brandname: 'KIKO+ & GG',
    categorie: 'Enfants',
    popularity: '1',
    logoUrl: 'https://powwowkids.com/wp-content/uploads/2019/09/powwowkids-logo-thumbnail-marques-partenaires-kiko-and-gg.jpg',
    websiteUrl: 'https://www.kikoandgg.com/',
    newinUrl: 'https://www.kikoandgg.com/collections/all-products',
    coverImage: 'https://i.pinimg.com/originals/9e/82/ec/9e82eccd7fc3f0889d1d09ed6f976fc1.jpg',
    shopUrl: 'https://www.kikoandgg.com/',
    returnPolicyUrl: 'https://www.kikoandgg.com/pages/returns-exchanges'
    },
    {
    brandname: 'KIPLING',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://pbs.twimg.com/profile_images/1013684116510904320/eXCAlEZj.jpg',
    websiteUrl: 'https://www.kipling.com/fr-fr/',
    newinUrl: 'https://www.kipling.com/fr-fr/nouveautes-c10525/',
    coverImage: 'https://fashionunited.uk/images/201911/Kipling-Debut-4.jpg',
    shopUrl: 'https://www.kipling.com/fr-fr/selectedstores/',
    returnPolicyUrl: 'https://www.kipling.com/fr-fr/returns/'
    },
    {
    brandname: 'KUJTEN',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://payload.cargocollective.com/1/4/128060/7169741/Kujten-web-2.jpg',
    websiteUrl: 'https://www.kujten.com/fr/',
    newinUrl: 'https://www.kujten.com/eshop/collections/toutes-nos-selections/nouveautes.html',
    coverImage: 'https://media.lexception.com/img/products/kujten/94925-kujten-melah-01.jpg',
    shopUrl: 'https://www.kujten.com/nos-boutiques.php',
    returnPolicyUrl: 'https://www.kujten.com/faq.php'
    },
    {   
    brandname: 'KYPRIS',
    categorie: 'Beauté et Soins',
    popularity: '1',
    logoUrl: 'https://cdn.shopify.com/s/files/1/0075/8562/files/kypris-logo-feat.jpg?v=1579648721',
    websiteUrl: 'https://kyprisbeauty.com/',
    newinUrl: 'https://kyprisbeauty.com/collections/shop-all',
    coverImage: 'https://pbs.twimg.com/media/Du4O7M7XQAA3QuP.jpg',
    shopUrl: 'https://kyprisbeauty.com/',
    returnPolicyUrl: 'https://kyprisbeauty.com/pages/kypris-return-policy/'
    },
    {
    brandname: 'L\'OCCITANE EN PROVENCE',
    categorie: 'Beauté et Soins',
    popularity: '3',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2018/01/lOccitane-logo-1.jpg',
    websiteUrl: 'https://fr.loccitane.com/',
    newinUrl: 'https://fr.loccitane.com/nouveaut%C3%A9s-cosm%C3%A9tique-et-produits-naturels-loccitane-france,74,1,26285,0.htm#maxp=120&nbproducts=15',
    coverImage: 'https://www.luberoncotesud.com/image/66496-normal.jpg',
    shopUrl: 'https://fr.loccitane.com/trouvez-la-boutique-la-plus-proche,74,1,22917,222916.htm?country=France',
    returnPolicyUrl:'https://fr.loccitane.com/aide-et-contact,74,1,36012,363929.htm?eptsec=26'
    },
    {
    brandname: 'LA BOITE DU FROMAGER',
    categorie: 'Vin et Gastronomie',
    popularity: '0',
    logoUrl: 'https://touteslesbox.fr/wp-content/uploads/2014/03/laboitedufromager-logo.png',
    websiteUrl: 'https://www.laboitedufromager.com/',
    newinUrl: 'https://www.laboitedufromager.com/categorie-fromage/fromage/',
    coverImage: 'https://www.les-bons-plans-bordeaux.com/wp-content/uploads/2017/11/les-bons-plans-bordeaux-la-boite-du-fromager-fromages-livres-directement-chez-vous-01.jpg',
    shopUrl: 'https://www.laboitedufromager.com/',
    returnPolicyUrl:'https://www.laboitedufromager.com/conditions-generales-de-vente/'
    },
    {
    brandname: 'LA COQUETA',
    categorie: 'Enfants',
    popularity: '2',
    logoUrl: 'https://pbs.twimg.com/profile_images/1196719147977248771/vcj5oiyJ_400x400.jpg',
    websiteUrl: 'https://www.lacoquetakids.com/',
    newinUrl: 'https://www.lacoquetakids.com/shop-by/editors-pick/new-collection',
    coverImage: 'https://thisisthemarket.com/wp-content/uploads/2019/09/la-coqueta-featured.jpg',
    shopUrl: 'https://www.lacoquetakids.com/flagship-store',
    returnPolicyUrl:'https://www.lacoquetakids.com/delivery-returns'
    },
    {
    brandname: 'LA PANOPLIE',
    categorie: 'Mode et Accessoires',
    popularity: '0',
    logoUrl: 'https://pbs.twimg.com/profile_images/489083250451574785/BmBABm0j.jpeg',
    websiteUrl: 'http://la-panoplie.com/',
    newinUrl: 'https://la-panoplie.com/EN/page/n2.html',
    coverImage: 'https://media.lexception.com/img/products/la-panoplie/11241172948-08GR-la-panoplie-sweattouchsuede-01.jpg',
    shopUrl: 'https://la-panoplie.com/en/page/point_of_sales.html',
    returnPolicyUrl:'https://la-panoplie.com/en/page/politique_de_retour.html'
    },
    {
    brandname: 'LABORATORIO OLFATTIVO',
    categorie: 'Beauté et Soins',
    popularity: '0',
    logoUrl: 'https://d353r0i7qv3gvw.cloudfront.net/40/5525740/stage-mobile/5699962.jpg',
    websiteUrl: 'https://www.laboratorioolfattivo.com/fr/',
    newinUrl: 'https://www.laboratorioolfattivo.com/fr/product-categories/masters-collection-fr/',
    coverImage: 'https://www.switch-magazine.net/wp-content/uploads/2019/10/feature.jpg',
    shopUrl: 'https://www.laboratorioolfattivo.com/store-locator/',
    returnPolicyUrl:'https://www.laboratorioolfattivo.com/fr/conditions-de-vente-et-dexpedition/'
    },
    {
    brandname: 'LACOSTE',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://www.presenceleadership.net/wp-content/uploads/2017/12/logo-lacoste-c.jpg',
    websiteUrl: 'https://www.lacoste.com/fr/',
    newinUrl: 'https://www.lacoste.com/fr/collection-unisexe/',
    coverImage: 'https://payload.cargocollective.com/1/8/286347/12485728/Lacoste_02_1600_c.jpg',
    shopUrl: 'https://www.lacoste.com/fr/stores',
    returnPolicyUrl:'https://www.lacoste.com/fr/FAQ.html'
    },
    {
    brandname: 'LANCASTER',
    popularity:'2',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://barretmaroquinerie.fr/site/wp-content/uploads/2017/01/logo-lancaster.jpg',
    websiteUrl: 'https://fr.lancaster.com/',
    newinUrl: 'https://fr.lancaster.com/nouveautes.html',
    coverImage: 'https://i.pinimg.com/originals/42/31/3d/42313d13a27808418bbf77717a09635f.jpg',
    shopUrl: 'https://fr.lancaster.com/our-shops',
    returnPolicyUrl:'https://fr.lancaster.com/livraisons-et-retours'
    },
    {
    brandname: 'LANCEL',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://barretmaroquinerie.fr/site/wp-content/uploads/2018/12/LOGO-LANCEL.png',
    websiteUrl: 'https://www.lancel.com/fr_fr/',
    newinUrl: 'https://www.lancel.com/fr_fr/femme/nouveautes.html?___store=fr_fr',
    coverImage: 'https://i.pinimg.com/originals/3f/33/6a/3f336ae5907d42b7151c0564e75a9a06.jpg',
    shopUrl: 'https://www.lancel.com/fr_fr/storelocator',
    returnPolicyUrl:'https://www.lancel.com/fr_fr/faq#5-retour'
    },
    {
    brandname: 'LANCÔME',
    categorie: 'Beauté et Soins',
    popularity: '3',
    logoUrl: 'https://www.brandslex.de/img/logos/xl/l/logo-lancome-01.png',
    websiteUrl: 'https://www.lancome.fr/',
    newinUrl: 'https://www.lancome.fr/nouveautes/',
    coverImage: 'https://i.ytimg.com/vi/BVw2VWVfE-0/maxresdefault.jpg',
    shopUrl: 'https://www.lancome.fr/landing-pages/storelocator-page/',
    returnPolicyUrl:'https://www.lancome.fr/customer-service/customer-service/conditions-generales-de-vente/customer-service-terms-sale.html#SecTitle7'
    },
    {
    brandname: 'LANVIN',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://i.pinimg.com/originals/a1/42/91/a1429172d99d9142a59f8f4f09ff0706.jpg',
    websiteUrl: 'https://www.lanvin.com/fr/',
    newinUrl: 'https://www.lanvin.com/fr/femme/nouveautes.html',
    coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW9VbEyLgFFjIVX02JYbDJx_6NkDT8LjMV-A&usqp=CAU',
    shopUrl: 'https://www.lanvin.com/fr/store-locator',
    returnPolicyUrl:'https://www.lanvin.com/fr/customer-care-return-refund'
    },
    {
    brandname: 'LE PETIT BALLON',
    categorie: 'Vin et Gastronomie',
    popularity: '1',
    logoUrl: 'https://touteslesbox.fr/wp-content/uploads/2012/09/logo_le_petit_ballon_ttb-130x130@2x.jpg',
    websiteUrl: 'https://www.lepetitballon.com/',
    newinUrl: 'https://www.lepetitballon.com/vins/',
    coverImage: 'https://www.inrap.fr/dossiers/userdata/c_bloc_album/1/1195/1600_1195_vignette_DSC-5446.jpg',
    shopUrl: 'https://www.lepetitballon.com/',
    returnPolicyUrl:'https://faq.lepetitballon.com/hc/fr/sections/360002498033-LIVRAISON'
    },
    {
    brandname: 'LE TANNEUR',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://barretmaroquinerie.fr/site/wp-content/uploads/2017/01/logo-letanneur.jpg',
    websiteUrl: 'https://www.letanneur.com/',
    newinUrl: 'https://www.letanneur.com/collections/nouveautes-femme',
    coverImage: 'https://i.ytimg.com/vi/2D2Fv2sbXUA/maxresdefault.jpg',
    shopUrl: 'https://www.letanneur.com/apps/store-locator/',
    returnPolicyUrl:'https://www.letanneur.com/pages/retours'
    },
    {
    brandname: 'LEGO',
    categorie: 'Jeux et Gadgets',
    popularity: '3',
    logoUrl: 'https://grupoformax.com/wp-content/uploads/2020/07/Lego-Logo.jpg',
    websiteUrl: 'https://www.lego.com/fr-fr',
    newinUrl: 'https://www.lego.com/fr-fr/categories/new-sets-and-products',
    coverImage: 'https://i0.wp.com/www.adobomagazine.com/wp-content/uploads/2019/09/Lego-Hero-Image.jpg?fit=1440%2C757&ssl=1',
    shopUrl: 'https://www.lego.com/fr-fr/stores',
    returnPolicyUrl:'https://www.lego.com/fr-fr/service/help/shopping/retours'
    },
    {
    brandname: 'LEICA',
    categorie: 'Technologie',
    popularity: '3',
    logoUrl: 'https://www.brandslex.de/img/logos/xl/l/logo-leica-02.png',
    websiteUrl: 'https://fr.leica-camera.com/',
    newinUrl: 'https://fr.leica-camera.com/Photographie/Aper%C3%A7u-bo%C3%AEtier',
    coverImage: 'https://i.pinimg.com/originals/bf/4c/c7/bf4cc7ba7b67bded82b40eae26bec919.jpg',
    shopUrl: 'https://fr.leica-camera.com/Stores-Revendeurs/Leica-Stores-dans-le-monde',
    returnPolicyUrl:''
    },
    {
    brandname: 'LEVI\'S',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROUpt8jv9HHaZc4sXhUHGYTaYCaaDrx7kG4g&usqp=CAU',
    websiteUrl: 'https://www.levi.com/',
    newinUrl: 'https://www.levi.com/FR/fr_FR/curated-by-unlabeled/c/levi_collections_unlabeled_curated',
    coverImage: 'https://media1.popsugar-assets.com/files/thumbor/MD7Q7Wh_FNy-EINkk5Eiivb2leU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/04/27/777/n/1922564/5fe6b86a69316f1a_19_1018_Levis_501_Hailey_Jaden_2018/i/hailey-bieber-jaden-smith-levis-campaign-spring-2020.jpg',
    shopUrl: 'https://www.levi.com/FR/fr_FR/store-finder/store-directory',
    returnPolicyUrl:'https://levihelp.levi.com/hc/fr-fr/categories/360004011774'
    },
    {
    brandname: 'LIPAULT',
    categorie: 'Maison',
    popularity:'2',
    logoUrl: 'https://barretmaroquinerie.fr/site/wp-content/uploads/2017/01/logo-lipault.jpg',
    websiteUrl: 'https://www.lipault.fr/fr/home/',
    newinUrl: 'https://www.lipault.fr/fr/nouveautes/',
    coverImage: 'https://www.lipault.com.hk/on/demandware.static/-/Library-Sites-LipaultSharedLibrary/default/dwd80f82c9/slides/lipa_homecover-slide_mylipaultmoment/images/bgr_mylipaultmoment.jpg',
    shopUrl: 'https://www.lipault.fr/fr/lipault-store/',
    returnPolicyUrl:'https://www.lipault.fr/fr/conditions-d%E2%80%99utilisation-et-de-vente/terms.html#returns'
    },
    {
    brandname: 'LIU JO',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0013/7111/brand.gif?itok=0ApIyzC6',
    websiteUrl: 'https://www.liujo.com/fr/',
    newinUrl: 'https://www.liujo.com/fr/femme/new-arrivals',
    coverImage: 'https://www.gotceleb.com/wp-content/uploads/photos/kendall-jenner/liu-jo-campaign-2020-photoshoot/Kendall-Jenner---Liu-Jo-Campaign-2020-Photoshoot-22.jpg',
    shopUrl: 'https://www.liujo.com/fr/storelocator/',
    returnPolicyUrl:'https://www.liujo.com/fr/customer-care/retours-et-remboursements'
    },
    {
    brandname: 'LONGCHAMP',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://www.cegid.com/uploads/2018/11/longchamp_LOGO.png',
    websiteUrl: 'https://www.longchamp.com/fr/fr',
    newinUrl: 'https://www.longchamp.com/fr/fr',
    coverImage: 'https://lesfacons.com/wp-content/uploads/2020/02/LONGCHAMP-SPRING-2020-AD-CAMPAIGN-FEATURING-KENDALL-JENNER.jpg',
    shopUrl: 'https://www.longchamp.com/fr/fr/boutiques?showMap=true',
    returnPolicyUrl:'https://www.longchamp.com/fr/fr/la-vente-en-ligne/retours-et-echanges/'
    },
    {
    brandname: 'LOU.YETU',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGpxkLo6BdUQg/company-logo_200_200/0?e=2159024400&v=beta&t=8p5G9qU2CpSuOC9PtPeSbN624TMNbzgUEF1HHpHLcoM',
    websiteUrl: 'https://louyetu.fr/fr',
    newinUrl: 'https://louyetu.fr/fr/shop/concepts/les-accumulations.html',
    coverImage: 'https://i.pinimg.com/originals/ba/d1/de/bad1deca7aba82bb8414a224b27c28e6.jpg',
    shopUrl: 'https://louyetu.fr/fr/journal/boutiques/',
    returnPolicyUrl:'https://louyetu.fr/fr/journal/cgv/'
    },
    {
    brandname: 'LOUBOUTIN',
    categorie: 'Mode et Accessoires',
    popularity: '3',
    logoUrl: 'https://passion-stickers.com/2540-home_default/stickers-christian-louboutin.jpg',
    websiteUrl: 'http://eu.christianlouboutin.com/fr_fr/',
    newinUrl: 'https://eu.christianlouboutin.com/fr_fr/femme/nouveautes/',
    coverImage: 'https://assets.vogue.in/photos/5ce4671bb8031186bb8fbc17/master/pass/Louboutin-featured.jpg',
    shopUrl: 'https://eu.christianlouboutin.com/fr_fr/storelocator',
    returnPolicyUrl:'https://eu.christianlouboutin.com/fr_fr/rma/order/search/'
    },
    {
    brandname: 'LOUIS VUITTON',
    categorie: 'Mode et Accessoires',
    poupularity: '3',
    logoUrl: 'https://journalduluxe.fr/wp-content/uploads/2018/08/Louis-Vuitton-Logo-3.jpg',
    websiteUrl: 'https://fr.louisvuitton.com/',
    newinUrl: 'https://fr.louisvuitton.com/fra-fr/nouveautes/femme/dernieres-nouveautes/_/N-1ns9qn3',
    coverImage: 'https://r.lvmh-static.com/uploads/2020/07/news-cover-10-1584x872.jpg',
    shopUrl: 'https://fr.louisvuitton.com/fra-fr/magasins',
    returnPolicyUrl:'https://fr.louisvuitton.com/fra-fr/service-impact'
    },
    {
    brandname: 'LOVE MOSCHINO',
    categorie: 'Mode et Accessoires',
    popularity: '2',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTswOBkM7JDR6TMTT9E8p0wsFA6eOoBgDAVQ&usqp=CAU',
    websiteUrl: 'https://www.moschino.com/fr_fr/love-moschino.html',
    newinUrl: 'https://www.moschino.com/fr_fr/love-moschino/femme/pret-a-porter.html',
    coverImage: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1500&h=785&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2019%2F07%2F17.48.52.1587003_v1_qc_srgb-1.jpg',
    shopUrl: 'https://www.moschino.com/fr_fr/storelocator/',
    returnPolicyUrl:'https://www.moschino.com/fr_fr/returns-and-refunds'
    },
    {
    brandname: 'MAISON LEJABY',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://p.ventesprivees-fr.com/maison-lejaby.png',
    websiteUrl: 'https://www.maisonlejaby.com/',
    newinUrl: '',
    coverImage: '',
    shopUrl: '',
    returnPolicyUrl:''
    },
    {
    brandname: 'MAJE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.palbin.com/users/31359/images/27576e3e4dc4721cee518fe834b4e5fa--maje-logo-google-1547724437.jpg',
    websiteUrl: 'https://fr.maje.com/',
    newinUrl: '',
    coverImage: '',
    shopUrl: '',
    returnPolicyUrl:''
    },
    {
    brandname: 'MAKE UP FOREVER',
    categorie: 'Beauté et Soins',
    logoUrl: '',
    websiteUrl: 'https://www.makeupforever.com/fr/fr',
    newinUrl: '',
    coverImage: '',
    shopUrl: '',
    returnPolicyUrl:''
    },
    {
    brandname: 'MANFIELD',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://p.ventesprivees-fr.com/manfield.png',
    websiteUrl: 'https://www.manfield.fr/',
    newinUrl: '',
    coverImage: '',
    shopUrl: '',
    returnPolicyUrl:''
    },
    {
    brandname: 'MARC JACOBS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2019/11/Marc-Jacobs.jpg',
    websiteUrl: 'https://www.marcjacobs.com/',
    newinUrl: '',
    coverImage: '',
    shopUrl: '',
    returnPolicyUrl:''
    },
    {
    brandname: 'MARSHALL',
    categorie: 'Maison',
    logoUrl: 'https://cdn2.bigcommerce.com/server1500/ac84d/products/837/images/1788/Marshall_Amplification_-_Logo__49156.1324795724.380.380.jpg?c=2',
    websiteUrl: 'http://www.marshallamps.fr/',
    newinUrl: '',
    coverImage: '',
    shopUrl: '',
    returnPolicyUrl:''
    },
    {
    brandname: 'MELLOW YELLOW',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://le133cannes.com/wp-content/uploads/2017/02/mellow-yellow-logo.png',
    websiteUrl: 'https://mellowyellow.com/'
    },
    {
    brandname: 'MERI MERI',
    categorie: 'Maison',
    logoUrl: 'https://cdn.shopify.com/s/files/1/1404/9714/collections/AAEAAQAAAAAAAAlCAAAAJGY4Yzg4OTIxLWUzYzctNDFlMC1iYTNhLWM3YmE3Yjg0YmU5MA_1200x630.png?v=1495127582',
    websiteUrl: 'https://merimeri.com/'
    },
    {
    brandname: 'MICHAEL KORS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2019/04/Michael-Kors-logo-1.jpg',
    websiteUrl: 'https://www.michaelkors.fr/'
    },
    {
    brandname: 'MIU MIU',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i.pinimg.com/originals/b9/e2/08/b9e20804c67acf5c3e50db91f7d62ac0.jpg',
    websiteUrl: 'https://www.miumiu.com/fr/fr.html'
    },
    {
    brandname: 'MIZUNO',
    categorie: 'Sport',
    logoUrl: 'https://www.groupement-eurogolf.com/uploads/brands/images/mizuno-630x630.png',
    websiteUrl: 'https://emea.mizuno.com/eu/fr-fr/home/'
    },
    {
    brandname: 'MONCLER',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i.pinimg.com/originals/02/3a/4b/023a4b43dee70bfdbdedc5e983883cae.jpg',
    websiteUrl: 'https://www.moncler.com/'
    },
    {
    brandname: 'MONTBLANC',
    categorie: 'Maison',
    logoUrl: 'https://i.pinimg.com/originals/4e/5f/fe/4e5ffef0dfba17637143d206c8e87f6d.jpg',
    websiteUrl: 'https://www.montblanc.com/fr-fr/home.html'
    },
    {
    brandname: 'MULBERRY',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.jacksoninteriors.co.uk/wp-content/uploads/2018/11/Screen-Shot-2018-11-23-at-10.49.38.png',
    websiteUrl: 'https://www.mulberry.com/fr/'
    },
    {
    brandname: 'MVMT',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.shopify.com/s/files/1/1288/3045/files/MVMT_Logo-01.jpg?895739141999749972',
    websiteUrl: 'https://www.mvmtwatches.com/'
    },
    {
    brandname: 'NAPAPIJRI',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.groupevuillermet.fr/wp-content/uploads/2014/09/logo-Napapijri-Chambery.jpg',
    websiteUrl: 'https://www.napapijri.fr/'
    },
    {
    brandname: 'NARS COSMETICS',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://www.dealninja.com/wp-content/uploads/2017/11/nars-logo.png',
    websiteUrl: 'https://www.narscosmetics.fr/fr'
    },
    {
    brandname: 'NAT ET NIN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.brandarex.fr/public/images/brands/1076@2x.png',
    websiteUrl: 'https://www.nat-nin.fr/fr/'
    },
    {
    brandname: 'NESPRESSO',
    categorie: 'Maison',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2018/06/Logo-Nespresso-1.jpg',
    websiteUrl: 'https://www.nespresso.com/fr/fr/'
    },
    {
    brandname: 'NEW BALANCE',
    categorie: 'Sport',
    logoUrl: 'https://media.cdnws.com/_i/69106/302/1800/5/lofo-nb.gif',
    websiteUrl: 'https://www.newbalance.fr/'
    },
    {
    brandname: 'NIKE',
    categorie: 'Sport',
    logoUrl: 'https://i.pinimg.com/originals/c8/06/c3/c806c3221ebfbfac514a472e988abb75.jpg',
    websiteUrl: 'https://www.nike.com/fr/   '
    },
    {
    brandname: 'NIKON',
    categorie: 'Technologie',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/fr/thumb/d/d3/Nikon_logo.svg/1024px-Nikon_logo.svg.png',
    websiteUrl: 'https://store.nikon.fr/'
    },
    {
    brandname: 'NINE WEST',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0014/9268/brand.gif?itok=dWaeAvKF',
    websiteUrl: 'https://ninewest.com/'
    },
    {
    brandname: 'NINTENDO',
    categorie: 'Jeux et Gadgets',
    logoUrl: 'https://mlpnk72yciwc.i.optimole.com/cqhiHLc-q96KEeDo/w:auto/h:auto/q:90/https://bleedingcool.com/wp-content/uploads/2019/07/nintendo-logo-large-red-white.jpg',
    websiteUrl: 'https://www.nintendo.fr/'
    },
    {
    brandname: 'NOBODINOZ',
    categorie: 'Enfants',
    logoUrl: 'https://www.berceaumagique.com/images/marques/logo/nobodinoz.jpg',
    websiteUrl: 'https://www.nobodinoz.com/fr'
    },
    {
    brandname: 'NUXE',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://pbs.twimg.com/profile_images/989496105326039040/gJ2ZFFXg_400x400.jpg',
    websiteUrl: 'https://fr.nuxe.com/',
    },
    {
    brandname: 'OBEY',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2019/04/Logo-Obey-1.jpg',
    websiteUrl: 'https://obeyclothing.com/'
    },
    {
    brandname: 'OMEGA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i.pinimg.com/originals/e8/95/90/e89590f53bbc359fb43dbb2c6e2e8deb.png',
    websiteUrl: 'https://www.omegawatches.com/fr/'
    },
    {
    brandname: 'OPI',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://i.pinimg.com/originals/7d/41/9e/7d419e3bc0fe3abe2d9c2ab1a54d9c3a.png',
    websiteUrl: 'http://boutique.opi-france.com/'
    },
    {
    brandname: 'P.F. CANDLE CO.',
    categorie: 'Maison',
    logoUrl: 'https://www.dealexpert.net/wp-content/uploads/2020/06/pfcandlecocom-1.jpg',
    websiteUrl: 'https://pfcandleco.eu/'
    },
    {
    brandname: 'PACO RABANNE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYX3tRqDezWkOzQclcmoN8nWdBXuVSvyl0Iw&usqp=CAU',
    websiteUrl: 'https://www.pacorabanne.com/'
    },
    {
    brandname: 'PANDORA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2018/06/Logo-Pandora-1.jpg',
    websiteUrl: 'https://fr.pandora.net/fr/'
    },
    {
    brandname: 'PATAGONIA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn11.bigcommerce.com/s-sq9zkarfah/products/73175/images/152332/Patagonia-Mountain-Decal-Sticker__53711.1510987342.500.750.jpg?c=2',
    websiteUrl: 'https://eu.patagonia.com/'
    },
    {
    brandname: 'PAUL & JOE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://media.glassdoor.com/sqll/1134715/paul-and-joe-squarelogo-1456487241636.png',
    websiteUrl: 'https://paulandjoe.com/        '
    },
    {
    brandname: 'PAUL SMITH',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://media.glassdoor.com/sqll/281358/paul-smith-squarelogo-1425036863090.png',
    websiteUrl: 'https://www.paulsmith.com/'
    },
    {
    brandname: 'PD PAOLA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://joyeriaminguez.com/img/marcas/5256.jpg',
    websiteUrl: 'https://www.pdpaola.com/fr'
    },
    {
    brandname: 'PHILIPP PLEIN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://fimgs.net/mdimg/dizajneri/o.3827.jpg',
    websiteUrl: 'https://www.pleinkids.com/fr/home/'
    },
    {
    brandname: 'PIERRE HERMÉ',
    categorie: 'Vin et Gastronomie',
    logoUrl: 'https://www.catchonco.com/wp-content/uploads/2020/05/Pierre-Herme.jpg',
    websiteUrl: 'https://www.pierreherme.com/'
    },
    {
    brandname: 'PRADA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://passion-stickers.com/2234-large_default/stickers-prada.jpg',
    websiteUrl: 'https://www.prada.com/fr/fr.html'
    },
    {
    brandname: 'RALPH LAUREN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0023/8425/brand.gif',
    websiteUrl: 'https://www.ralphlauren.fr/'
    },
    {
    brandname: 'RAY BAN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://lensvision.imgix.net/out/pictures/generated/product/3/665_665_75/ray-ban-sonnenbrillen-logo-weiss.jpg',
    websiteUrl: 'https://www.ray-ban.com/france'
    },
    {
    brandname: 'REDSKINS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.radins.com/uploads/merchant-logo/code-promo-redskins.',
    websiteUrl: 'https://www.redskins.fr/'
    },
    {
    brandname: 'REEBOK',
    categorie: 'Sport',
    logoUrl: 'https://preview.thenewsmarket.com/Previews/RBOK/VideoAssets/320x320/RBOK_48649_551153.jpg',
    websiteUrl: 'https://www.reebok.fr/'
    },
    {
    brandname: 'REPETTO',
    categorie: 'Sport',
    logoUrl: 'https://lh3.googleusercontent.com/proxy/MwMj1ZZ4yEwu4nGhrsQM2gI-BaImQLagq9hdlCHgL3R87KiDqDSaS-gHxZamoPy2um1CdfREtzNYNEAhPk8_MOeUrQXXoIkXHJBlLnewH8p3XUz_HGTtykjC3Xc',
    websiteUrl: 'https://www.repetto.fr/'
    },
    {
    brandname: 'RITUALS',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://www.commeuncamion.com/content/uploads/2019/06/logo-rituals-jpg.png',
    websiteUrl: 'https://www.rituals.com/'
    },
    {
    brandname: 'ROSSIGNOL',
    categorie: 'Sport',
    logoUrl: 'https://i.pinimg.com/originals/3a/04/3c/3a043ceb0b50bccb98c275638168c6e2.jpg',
    websiteUrl: 'https://www.rossignol.com/fr/'
    },
    {
    brandname: 'S.T. DUPONT',
    categorie: 'Maison',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgRzNVvIBxbc0Hi20tH7R5uvHB_D6ZjQTZnA&usqp=CAU',
    websiteUrl: 'https://www.st-dupont.com/fr'
    },
    {
    brandname: 'SAINT LAURENT',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn0.dontpayfull.com/media/logos/size/300x300/ysl.com.jpg?v=20190621130906542039',
    websiteUrl: 'https://www.ysl.com/fr'
    },
    {
    brandname: 'SAMSONITE',
    categorie: 'Maison',
    logoUrl: 'data:image/png;base64,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',
    websiteUrl: 'https://www.samsonite.fr/'
    },
    {
    brandname: 'SANDRO',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://ad19f3f32c8ffcbb36a3-900e03d2c940cd7044aba7e8955d765a.ssl.cf2.rackcdn.com/logos/260/66779_sq.jpg',
    websiteUrl: 'https://fr.sandro-paris.com/'
    },
    {
    brandname: 'SCHOTT',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT23OiaJGNPKEbj4FSzDDbF_RRX3xi5i1XjMw&usqp=CAU',
    websiteUrl: 'https://www.schott-store.com/'
    },
    {
    brandname: 'SEAFOLLY',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.brandarex.fr/public/images/brands/2394@2x.png',
    websiteUrl: 'https://www.seafolly.com/'
    },
    {
    brandname: 'SESSUN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i.pinimg.com/236x/8e/ed/4e/8eed4ebef8e99799f8a3f0d6e6c6d93a.jpg',
    websiteUrl: 'https://fr.sessun.com/'
    },
    {
    brandname: 'SÉZANE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://media.glassdoor.com/sqll/2386904/s%C3%A9zane-squarelogo-1545662083837.png',
    websiteUrl: 'https://www.sezane.com/'
    },
    {
    brandname: 'SISLEY',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://media.glassdoor.com/sqll/846022/sisley-squarelogo-1408371226026.png',
    websiteUrl: 'https://www.sisley-paris.com/'
    },
    {
    brandname: 'SOLUDOS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.logolynx.com/images/logolynx/s_54/541623695c3cee82d6a480acaa5c7670.jpeg',
    websiteUrl: 'https://europe.soludos.com/'
    },
    {
    brandname: 'STEAMONE',
    categorie: 'Maison',
    logoUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAFVBMVEX///8AAADh296TkpI6OjoNMZDlBAiU5gD8AAAClElEQVR4nO3Y3ZKrIBBFYenmnPd/5In8NghOUkGTqVrfzSQTJGylEbNtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf4qoqsSX9dWCLpf0tIB4F+j+xqe/79HYo/ML+npfHs1jPNuahOJc0+eHheE8ppSPw1mQUOLVewgZl4zyHeU87+ORBQlDwFzVX3AVpRmO3xOG0x//J93CM3h/aOhrj7F77dqOu7qM1Hm0n/AtrTr7GCVVqM8DaZakrVSw5A80d2hGrql/26QeumJVeyHhJiImoVkvpBlVnni5qVPbUNt5mQLL5NA7InaVUhOmFUhzRG2XJBO4WTn7Qg7vpWkSyzN1fX3EuJaWeVUGqPnaSRqWs0uSxveSg2qah+HENOUVrqk2TWpxat/6ErnatEloyim+zAVlBy35+Bg9nKpBQreVSOGFr9NmzQbjN2LLPn+lCRT/Z8YSUtR6s4XqpwlrE3uZ7ddcSkJ17bPOJmwKzI781YRyaGLdtXuVONtyQn+WcG80STisw+9ImCbfJKF7OuFoLf1own7gZpZ6MfpZOk3YVVYId0woTd+fStguAd1KM01o9mnpMLe1CQ8T+Vp2UqUFJO6y6kBHd4t5wnZfGm+EXUJzt3DX3y20fIeU0+3zFmZ+xz9JuJnaSvdKmV1mf8flDJswszvzufxd/MDnAdtd22nC4/Nhl7B05W64hFuzakp9f7rzPk94fMbvE5qubvmZo2xpzNSqV2309DS/W7i2y3RoTZhLMDe4727fPo02T8CDhuF3tPLRsLWo6VMGTW57Agbwef+e9eqqoP+fdPX9goR/P6E87Vs6BgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwKf8AOEpECvo/S7kAAAAAElFTkSuQmCC',
    websiteUrl: 'https://steam-one.com/fr/'
    },
    {
    brandname: 'STONE ISLAND',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://res.cloudinary.com/streethub/image/upload/v1572455899/manufacturer/5c7a321b11250e0003b0705b/jnrinxsgx7hulynrizfr.jpg',
    websiteUrl: 'https://www.stoneisland.com/us'
    },
    {
    brandname: 'TARTINE ET CHOCOLAT',
    categorie: 'Enfants',
    logoUrl: 'https://www.lejournaldesventes.fr/logos/tartine-et-chocolat.png',
    websiteUrl: 'http://tartine-et-chocolat.com/'
    },
    {
    brandname: 'TED BAKER',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.commeuncamion.com/content/uploads/2010/04/logo-ted-baker-2019.png',
    websiteUrl: 'https://www.tedbaker.com/fr'
    },
    {
    brandname: 'THE KOOPLES',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.welcometothejungle.co/uploads/organization/logo/5121/151395/the-kooples.png',
    websiteUrl: 'https://www.thekooples.com/fr_fr'
    },
    {
    brandname: 'THE NORTH FACE',
    categorie: 'Sport',
    logoUrl: 'https://www.vitrinesannecy.fr/wp-content/uploads/2019/01/TNF-logo-google-1200x1200.jpg',
    websiteUrl: 'https://www.thenorthface.fr/'
    },
    {
    brandname: 'TIFFANY & CO',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.talkwalker.com/Pictures/Brands/small/csm-tiffany-co-68dcb10b6d..png',
    websiteUrl: 'https://www.international.tiffany.com/'
    },
    {
    brandname: 'TIMBERLAND',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.sokid.fr/media/catalog/category/_0005_timberland.jpg.jpg',
    websiteUrl: 'https://www.timberland.fr/homepage.html'
    },
    {
    brandname: 'TISSOT',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www2.wempe.com/-/media/wempe/01_uhren/02_auswahl/baselworld-2018/logo-schwarz/logo_tissot_black.png?mh=600&w=450&mw=450&h=600&crop=1&la=en&hash=5AD002F5D258BEE09B7E223BD30299BECBA87F09',
    websiteUrl: 'https://www.tissotwatches.com/'
    },
    {
    brandname: 'TOD\'S',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://www.lejournaldesventes.fr/logos/tods.png',
    websiteUrl: 'https://www.tods.com/'
    },
    {
    brandname: 'TOM FORD',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i.pinimg.com/originals/4f/88/34/4f8834b46ec7291c03d0e28f1cf333b9.jpg',
    websiteUrl: 'https://www.tomford.com/'
    },
    {
    brandname: 'TOMMY HILFIGER',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAFUCfh6X1HXOsprlrl58NUmaFnOg39Z33xw&usqp=CAU',
    websiteUrl: 'https://fr.tommy.com/'
    },
    {
    brandname: 'UGG',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2019/11/UGG.jpg',
    websiteUrl: 'https://www.ugg.com/eu/fr/fr/'
    },
    {
    brandname: 'UNDER ARMOUR',
    categorie: 'Sport',
    logoUrl: 'https://www.footkorner.com/media/amshopby/big302.jpg',
    websiteUrl: 'https://www.underarmour.fr/fr-fr/'
    },
    {
    brandname: 'URBAN DECAY',
    categorie: 'Beauté et Soins',
    logoUrl: 'https://i.pinimg.com/originals/6d/de/3d/6dde3db970d5eb1e9c3d7713a298dfb0.jpg',
    websiteUrl: 'https://www.urbandecay.fr/'
    },
    {
    brandname: 'VALENTINO',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://lh3.googleusercontent.com/proxy/-Ierk3OUESJnhCOoIlT-cNt1tMZwi7Nok0qd5NLgGhbpGnV6sClIWOVV6aB31CUUoYVpW2u6rne1wNxXFDtshZjhb1IDue1dxOAuZ0F6pbWYJYdQkJTIblB8t0ApBP2r1QlmxGjb',
    websiteUrl: 'https://www.valentino.com/'
    },
    {
    brandname: 'VANS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://m.media-amazon.com/images/I/313XxSn5RdL._AC_SS350_.jpg',
    websiteUrl: 'https://www.vans.fr/'
    },
    {
    brandname: 'VEJA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i1.wp.com/www.incognitobilbao.es/wp-content/uploads/2018/10/veja-logo.jpg?fit=400%2C395',
    websiteUrl: 'http://www.veja-store.com/'
    },
    {
    brandname: 'VERSACE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2017/04/Versace-logo-1.jpg',
    websiteUrl: 'https://www.versace.com/fr/fr-fr/home/'
    },
    {
    brandname: 'VICTORIA SECRET',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://cdn.1min30.com/wp-content/uploads/2019/01/Victoria-Secret-Logo-1.jpg',
    websiteUrl: 'https://victoriassecret.com/'
    },
    {
    brandname: 'VILEBREQUIN',
    categorie: 'Mode et Accessoires',
    logoUrl: 'data:image/png;base64,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',
    websiteUrl: 'https://www.vilebrequin.com/eu/fr/home'
    },
    {
    brandname: 'VILLEROY & BOCH',
    categorie: 'Maison',
    logoUrl: 'https://s3-eu-west-1.amazonaws.com/lovethecdn2/categories/villeroy-boch-logo.jpg',
    websiteUrl: 'https://www.villeroy-boch.fr/shop/'
    },
    {
    brandname: 'WAEKURA',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://i.pinimg.com/280x280_RS/92/26/5f/92265f80ccdfd5da95867bc822d0e3e7.jpg',
    websiteUrl: 'https://www.waekura.com/'
    },
    {
    brandname: 'WITHINGS',
    categorie: 'Technologie',
    logoUrl: 'https://bespaardeals.nl/wp-content/themes/template_basic_Spot/timthumb.php?src=https://bespaardeals.nl/wp-content/uploads/2020/04/kortingscode-Withings.jpg&h=200&w=200&zc=1;q=100',
    websiteUrl: 'https://www.withings.com/fr/fr/store'
    },
    {
    brandname: 'XIAOMI',
    categorie: 'Technologie',
    logoUrl: 'https://kingaccessoires.com/wp-content/uploads/2018/12/langfr-280px-Xiaomi_logo.svg_.png',
    websiteUrl: 'https://www.mi.com/fr/index.html'
    },
    {
    brandname: 'YAY PARIS',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIL7xZahoN34AMdtf98wdoGFLYGFKEpm2N_w&usqp=CAU',
    websiteUrl: 'https://yay.paris/'
    },
    {
    brandname: 'YSÉ',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://kingaccessoires.com/wp-content/uploads/2018/12/langfr-280px-Xiaomi_logo.svg_.png',
    websiteUrl: 'https://www.yse-paris.com/fr/'
    },
    {
    brandname: 'ZADIG & VOLTAIRE',
    categorie: 'Mode et Accessoires',
    logoUrl: 'https://passion-stickers.com/2541-home_default/stickers-zadig-voltaire.jpg',
    websiteUrl: 'www.zadig-et-voltaire.com'
    }                                                                      
]

const p1 = Brand.create(datas);
p1.then(brands => console.log(`${brands.length} brands created!`))

// tableau des countries
var datas = [
  {
    country : 'France',
    language: 'French',
    flagurl: 'https://images-na.ssl-images-amazon.com/images/I/3177XLVjriL._AC_SX425_.jpg',
  },
  {
    country : 'Spain',
    language: 'Spanish',
    flagurl: 'https://images-na.ssl-images-amazon.com/images/I/210uaqEmyZL._AC_.jpg',
  }
]

const p2 = Country.create(datas);
p2.then(countries => console.log(`${countries.length} countries created!`))
Promise.all([p1, p2])
  .then(() => mongoose.disconnect())
  .catch(err => console.error(err))
;

// // importer toutes les marques dans la bdd
// Brand.create(brands).then(brands => {
//     console.log(`OK, ${brands.length} have been created.`);
  
//     mongoose.connection.close();
// }).catch(err => {
//     console.log('oops',err)
// });

// // importer toutes les countries dans la bdd
// Country.create(countries).then(countries => {
//   console.log(`OK, ${countries.length} have been created.`);

//   mongoose.connection.close();
// }).catch(err => {
//   console.log('oops',err)
// });







// apres avoir ecrit le code : node bin/seeds.js pour injecter ds mongodb