importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"d4337ff16292cea2988829d88bb2a15b","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"51392554bd6f04d452c6c2bf019e8812","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"26aef13e3e494cd0c0e092cbb9bf3bfa","url":"contributors.html"},{"revision":"2007874b8e4b1ed7ab3caaddc3891726","url":"feedback.html"},{"revision":"54e49beeed3ac745f1ca1bd20f835d2e","url":"images/but.png"},{"revision":"f78a5e803a8bc50e3ff482a610b45c31","url":"images/but1.png"},{"revision":"85b5364dcc899084ceb624a23183e25c","url":"images/but2.png"},{"revision":"33030b1a39a2a707b764a365a09ea06b","url":"images/exp5_1.png"},{"revision":"8d756b73d40c24880e048e3966dd2f9a","url":"images/exp5_2.png"},{"revision":"e7cb8c31e6b33b81df9b9b4c388e6fe5","url":"images/exp5_3.png"},{"revision":"1e7f54f3febc115e015ad6ed51bddcfc","url":"images/fig-1.png"},{"revision":"f97030e08506d1a05f337f319a7a7e3a","url":"images/fig-10.png"},{"revision":"4b91338481b5cc2c677ed736336a3ca4","url":"images/fig-11.png"},{"revision":"48de21f47837bb84e4d73d0265fa4b3c","url":"images/fig-12.png"},{"revision":"d1570dd2f2bac61769ab8abec3024c4a","url":"images/fig-13.png"},{"revision":"828530deaa0ffc1741e729527cf7fe4b","url":"images/fig-14.png"},{"revision":"9dae7c306cbe3c4c3a2ed6797946537c","url":"images/fig-15.png"},{"revision":"e8430d9a2730c4d34ca5f178a6e8eee8","url":"images/fig-16.png"},{"revision":"a219f05e5b1c19872e0f226837ca0807","url":"images/fig-2.png"},{"revision":"4ad5de32c0c6440f9d1d1b13f86a7a04","url":"images/fig-3.png"},{"revision":"b3db90c97b3d267c9af4c3026d2ceba9","url":"images/fig-4.png"},{"revision":"4d7111fef0fae735875ad3502a02746e","url":"images/fig-5.png"},{"revision":"5ce1b0dda9d2e60d72b96db8b60e6f0c","url":"images/fig-6.png"},{"revision":"5ee23c1d4b930d0d086ded0f394be0f2","url":"images/fig-7.png"},{"revision":"3233b84478ba2f3a63f1fdde07000fdb","url":"images/fig-8.png"},{"revision":"45cc198033bcf48a6357877b42431887","url":"images/fig-9.png"},{"revision":"a8212287993dd481046b40ea9554af4b","url":"images/help.jpg"},{"revision":"f2f1e415d681eb68a9d2c3598b1b80ec","url":"images/iitkgp.png"},{"revision":"c65e54722c3db018be41e1c69071c61e","url":"images/logo.jpg"},{"revision":"773fc61ae98ddc621638773d5a70a871","url":"images/pic-1.png"},{"revision":"8854b178989c0245555c648b5617d0ec","url":"index.html"},{"revision":"ddc3f0a50e21cd9dde09fed20dd243a7","url":"performance-report.html"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"f5f81aec3bb7c559af61df08b5f25666","url":"posttest.html"},{"revision":"1b2ee8c22ec6f674b2077a083de59f64","url":"posttest.json"},{"revision":"c2b5e45dfd3c44d635782faf7ffcbf74","url":"pretest.html"},{"revision":"4cf37f18f6d2f3fbb38f92e64d835bb9","url":"pretest.json"},{"revision":"f1361c930db785a2f4d876025395b0cb","url":"procedure.html"},{"revision":"e43c244c6de104178e8b4d31f037a1f1","url":"references.html"},{"revision":"8daae7ae767c8ec334831f912430102c","url":"simulation.html"},{"revision":"5d9379586b3b0e24cd0b426896bb6cb1","url":"simulation/css/adi.css"},{"revision":"f16490e0a840f15fe3cda21fd6f51565","url":"simulation/css/adik.css"},{"revision":"f8f2e2eb9a0dc54dc40d2a1510eb6ba5","url":"simulation/css/bootstrap.min.css"},{"revision":"d960ba258a7371af992d59ca90998786","url":"simulation/css/joint.css"},{"revision":"6fd5a6e8197041971d02cf62d06f4b14","url":"simulation/css/jquery-ui.css"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"2ae2330d291878876824f41815b25160","url":"simulation/images/FuWa.png"},{"revision":"8931dd0bc569d7e7b10ed6c1509c3d50","url":"simulation/images/HaWa.png"},{"revision":"2d646db9485baccb85a7c47d00c27480","url":"simulation/images/iitkgp.png"},{"revision":"0b83d9b2c322182c437e582d7883996d","url":"simulation/images/vlabs.jpg"},{"revision":"bf9fa711f3378420485fbfe861eb0296","url":"simulation/images/vlabs.png"},{"revision":"5378a5f084e3ac2f9becc850c9991a3d","url":"simulation/index.html"},{"revision":"dab6472c0b5c53781f8aeb73e345a1e8","url":"simulation/js/adi.js"},{"revision":"b474f0b4d20a286b76bc3a5247597b7f","url":"simulation/js/adidspex5s.js"},{"revision":"265149304f8de6c5d5425a20d59b8a04","url":"simulation/js/adidspex5s1.js"},{"revision":"4e82afac290c1cda0fe563522fcb19f3","url":"simulation/js/adidspex5s2.js"},{"revision":"378b2dd1e7aab87af69c8ea6ca9d4d8e","url":"simulation/js/adik.js"},{"revision":"222432686a333255fd0f9b8fa4d4e713","url":"simulation/js/backbone.js"},{"revision":"094448a3d4eb86a8f0f82406e4fbd38b","url":"simulation/js/basic.js"},{"revision":"77cbad27852866cec1e32648eaafd22d","url":"simulation/js/bootstrap.min.js"},{"revision":"c88eae88638e3bda1ef6b84dffc3ac32","url":"simulation/js/d3.v5.js"},{"revision":"2aa2a638e10f58c2656f28c55f1e258e","url":"simulation/js/dsp.js"},{"revision":"5d10d544b9ab9efb7eb47557d682ed9f","url":"simulation/js/fonts/adidspex5s1.js"},{"revision":"f404be7b65a78c400376c2f38d9c5d42","url":"simulation/js/fonts/tex.js"},{"revision":"55ef252ef5172af738f8764fbfae8aa6","url":"simulation/js/joint.js"},{"revision":"ab5284de5e3d221e53647fd348e5644b","url":"simulation/js/jquery-ui.js"},{"revision":"23c7c5d2d1317508e807a6c7f777d6ed","url":"simulation/js/jquery.js"},{"revision":"dc5e7f18c8d36ac1d3d4753a87c98d0a","url":"simulation/js/jquery.min.js"},{"revision":"cac376515e879d9864e293ca3202b606","url":"simulation/js/knob.js"},{"revision":"cf4357240ba8acad4878b0494f8cfb6b","url":"simulation/js/leaderline.min.js"},{"revision":"c87b4981943241bf77dfb7a1f53f6323","url":"simulation/js/links.js"},{"revision":"bbb588cc4360df5d317ebff5f5c1ac9c","url":"simulation/js/lodash.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"1bc5ac9a19fa41053771a08d8129f895","url":"simulation/js/p1.js"},{"revision":"e49171bc71b37f6f07f1f3b7fb8845ba","url":"simulation/js/plain-draggable.js"},{"revision":"b9f305114cd500cf450bedb6ddd8baed","url":"simulation/js/popper.min.js"},{"revision":"98314247892d6ca0ef312bc7373beb44","url":"simulation/js/tex-chtml-full.js"},{"revision":"745b55a56005593ada4bde5603a645de","url":"simulation/js/ui.el.js"},{"revision":"39f1b300485193c085761af6db9b2635","url":"simulation/js/ui.js"},{"revision":"e826660fcf9b7fad16c2191101ed18a9","url":"simulation/p1.html"},{"revision":"e2b53063f76fb1a279c11e0d37a70f42","url":"simulation/p2.html"},{"revision":"541d01c5c2a090306a3c29c3e8bf4466","url":"simulation/p3.html"},{"revision":"04c73f8b43d0363e62d38b9e47cc5372","url":"theory.html"},{"revision":"c171857ba4c48cd119624353175ae640","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );