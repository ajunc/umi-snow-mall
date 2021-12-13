let Router = require('koa-router');
const { Route } = require('umi');

let router = new Router();

router.get('/api/getRecommend', (ctx, next) => {
  ctx.body = `{"list":{"data":[{"id":"0","title":"暮光之城系列","img":"//img10.360buyimg.com/mobilecms/11833/105e2f6e-5b46-4c9d-8996-bf1542b77a95.jpg","price":"250.13","count":3,"checked":false},{"id":"1","title":"暮光之城","img":"//img10.360buyimg.com/n2/s240x240_18031/0361a6aa-25c7-44e0-9df5-1c95721d1efb.jpg!q70.jpg","price":"411.97","count":6,"checked":true},{"id":"2","title":"星空","img":"//img13.360buyimg.com/n2/s240x240_jfs/t5611/18/1571055949/451665/bc9056da/59277e64N576fe52b.jpg!q70.jpg","price":"150.05","count":8,"checked":false},{"id":"3","title":"暮色","img":"//img14.360buyimg.com/n2/s240x240_14276/2039d349-67e3-4683-9fd7-59a39fa7feac.jpg!q70.jpg","price":"879.81","count":1,"checked":true},{"id":"4","title":"茨威格精选","img":"//img10.360buyimg.com/n2/s240x240_jfs/t1/22996/23/4815/146046/5c358508E28b04284/e34a5fb08595dda0.png","price":"971.51","count":3,"checked":false},{"id":"5","title":"向左走向右走","img":"//img11.360buyimg.com/n2/s240x240_jfs/t1/79882/3/5059/48381/5d32c735E46bc85da/b54b6d4d7975126d.jpg!q70.jpg","price":"315.83","count":10,"checked":true},{"id":"6","title":"群山回唱","img":"//img13.360buyimg.com/n2/s240x240_jfs/t2311/175/1769886898/247454/75c03727/56712bd0Nfabcc664.jpg!q70.jpg","price":"297.29","count":9,"checked":false},{"id":"7","title":"追风筝的人","img":"//img11.360buyimg.com/n2/s240x240_jfs/t21010/207/701929964/289291/bfd00b3b/5b15fe0eN0c18f4a3.jpg!q70.jpg","price":"400.43","count":6,"checked":true},{"id":"8","title":"灿烂千阳","img":"//img14.360buyimg.com/mobilecms/s316x316_jfs/t17245/75/557876508/270398/ac71e992/5a9668d7N5381995d.jpg!q70.dpg.webp","price":"230.84","count":8,"checked":false},{"id":"9","title":"假如给我三天光明","img":"//img12.360buyimg.com/mobilecms/s316x316_jfs/t14026/170/261433633/270836/b11743b/5a06e009N81a66656.jpg!q70.dpg.webp","price":"885.17","count":7,"checked":true},{"id":"10","title":"东方快车谋杀案（精装纪念新版）","img":"//img13.360buyimg.com/mobilecms/s316x316_jfs/t1/31472/20/14504/444048/5cbe81c3E015c6fb3/88cc78fff3d17920.jpg!q70.dpg.webp","price":"643.40","count":1,"checked":false},{"id":"11","title":"无人生还","img":"//img10.360buyimg.com/mobilecms/s316x316_jfs/t1/38482/4/1869/508076/5cbeb91aEce50269e/ae4334f521c29394.jpg!q70.dpg.webp","price":"146.32","count":4,"checked":true},{"id":"12","title":"悬崖山庄","img":"//img10.360buyimg.com/mobilecms/s316x316_g12/M00/0D/1D/rBEQYVGtqhwIAAAAAAxjj9VECQkAACuKAK3q8wADGOn079.jpg!q70.dpg.webp","price":"589.49","count":6,"checked":false},{"id":"13","title":"阳光下的罪恶","img":"//img14.360buyimg.com/mobilecms/s316x316_jfs/t163/362/2406322808/863708/173dc2db/53d0b3e7Nf0bd84b1.jpg!q70.dpg.webp","price":"744.63","count":9,"checked":true},{"id":"14","title":"蓝色列车之谜","img":"//img12.360buyimg.com/mobilecms/s316x316_jfs/t2935/339/1454420274/145737/2039f430/57830bb7N2d837fb7.jpg!q70.dpg.webp","price":"955.62","count":5,"checked":false},{"id":"15","title":"满天星","img":"//img10.360buyimg.com/mobilecms/s455x455_jfs/t1/20655/31/3115/418302/5c249229E57f9c94c/87ca0c2b6af0dd4a.jpg!q70.dpg.webp","price":"484.14","count":6,"checked":true},{"id":"16","title":"太阳镜","img":"//img13.360buyimg.com/mobilecms/s360x360_jfs/t1/109239/38/9717/483555/5e76d532E15960a01/b3be3efcb3a4c8a1.jpg!q70.dpg.webp","price":"660.96","count":3,"checked":false},{"id":"17","title":"创维冰箱","img":"//img10.360buyimg.com/n2/s240x240_jfs/t1/102296/38/18008/246689/5e8d20bbE3585069f/7e4e35e0cc039320.jpg!q70.jpg","price":"12.48","count":4,"checked":true},{"id":"18","title":"海尔冰箱（Haier） BCD-258WDPM","img":"//img12.360buyimg.com/n2/s240x240_jfs/t1/101668/29/17325/58569/5e86e76dE7b477bf6/60cd7676164cb749.jpg!q70.jpg","price":"631.84","count":7,"checked":false},{"id":"19","title":"美的冰箱(Midea)226升 三门冰箱家用小型抗菌保鲜风冷无霜冷藏冷冻电子控温节能省电","img":"//img13.360buyimg.com/n2/s240x240_jfs/t1/110575/5/10495/124509/5e7dd2aeEda64e4ba/0416b4d65304bc4e.jpg!q70.jpg","price":"73.33","count":5,"checked":true},{"id":"20","title":"新款丝绒连帽宽松运动服","img":"https://tva1.sinaimg.cn/large/00831rSTly1gdnkfezhk0j30a40f40u2.jpg","price":"471.59","count":4,"checked":false},{"id":"21","title":"丝绒连衣裙高腰鱼尾裙荷叶边中长款长袖气质","img":"https://tva1.sinaimg.cn/large/00831rSTly1gdnkejssyxj30a20fgq3d.jpg","price":"931.45","count":2,"checked":true},{"id":"22","title":"新款vava明星同款棒球丝绒刺绣宽松夹克","img":"https://tva1.sinaimg.cn/large/00831rSTly1gdnkc8w2zrj30aa0fgjt7.jpg","price":"343.91","count":8,"checked":false},{"id":"23","title":"【新色上市】CHANEL 香奈儿可可小姐炫光唇膏口红#152#126#106#70","img":"https://tva1.sinaimg.cn/large/00831rSTly1gdnkcwbx17j306u06qglr.jpg","price":"969.16","count":3,"checked":true},{"id":"24","title":"女款玫瑰金色PU长款钱夹43102","img":"https://tva1.sinaimg.cn/large/00831rSTly1gdnkdnay5zj309c088mxa.jpg","price":"446.13","count":6,"checked":false},{"id":"25","title":"华为手机","img":"//img10.360buyimg.com/n2/s240x240_jfs/t1/50018/39/8127/229510/5d5b5043E66769ff0/8907776f7bd66d57.jpg!q70.jpg","price":"896.78","count":2,"checked":true},{"id":"26","title":"华为手机-13","img":"https://tva1.sinaimg.cn/large/00831rSTly1gdegmiois8j30hm0eo79w.jpg","price":"328.07","count":4,"checked":false},{"id":"27","title":"老报纸","img":"//img11.360buyimg.com/n2/s370x370_jfs/t1/50238/3/3329/373862/5d118888Ebc20ea79/52977f9388dc1867.jpg!q70.jpg","price":"324.32","count":1,"checked":true},{"id":"28","title":"女装","img":"https://tva1.sinaimg.cn/large/00831rSTly1gdnkwaug8dj30ae0fawfe.jpg","price":"370.21","count":5,"checked":false},{"id":"29","title":"马普尔小姐探案全集","img":"//img14.360buyimg.com/mobilecms/s316x316_jfs/t1/75302/21/14502/173631/5dbf9bb0E79a9a3ab/26b8aa20577daf11.jpg!q70.dpg.webp","price":"42.50","count":5,"checked":true},{"id":"30","title":"ABC谋杀案","img":"//img13.360buyimg.com/n2/s240x240_g13/M04/00/1B/rBEhVFHjRiQIAAAAAA1kQ5-Tu6gAABD6gGSNuYADWRb512.jpg!q70.jpg","price":"893.57","count":2,"checked":false},{"id":"31","title":"罗杰疑案","img":"//img13.360buyimg.com/n2/s240x240_g10/M00/0D/0B/rBEQWFFL1vcIAAAAAAuNNu-ercwAACnBAOkS8QAC41O159.jpg!q70.jpg","price":"874.62","count":3,"checked":true},{"id":"32","title":"Never Let Me Go","img":"//img12.360buyimg.com/mobilecms/s316x316_15302/a9303373-9bd6-4ea0-a284-1fc44f889c45.jpg!q70.dpg.webp","price":"213.23","count":5,"checked":false},{"id":"33","title":"三国演义 这是四大名著之一 打打杀杀的 还可以吧 有时间可以看看 虽然打架杀人挺不好看的 字数够了吧","img":"//img10.360buyimg.com/n2/s240x240_jfs/t1/54594/9/2803/246916/5d0a1635E98b4dc52/095f4cc72141902f.jpg!q70.jpg","price":"921.73","count":3,"checked":true},{"id":"34","title":"老人与海","img":"//img10.360buyimg.com/n2/s240x240_jfs/t1/83851/11/10334/500835/5d8057c8Eb0ec0a59/2d94e84aaeeeda27.jpg!q70.jpg","price":"984.70","count":4,"checked":false},{"id":"35","title":"月亮与六便士","img":"//img20.360buyimg.com/mobilecms/s316x316_jfs/t1/80024/25/13916/269599/5db6568cE097e42be/1dbcfb491f70b963.jpg!q70.dpg.webp","price":"710.83","count":3,"checked":true},{"id":"36","title":"女装","img":"https://tva1.sinaimg.cn/large/00831rSTly1gdnkzoz2rwj309a0fi44m.jpg","price":"50.87","count":8,"checked":false},{"id":"37","title":"女装","img":"https://tva1.sinaimg.cn/large/00831rSTly1gdegl69kmoj30gi0fqq9x.jpg","price":"407.42","count":4,"checked":true}]}}`;
});

router.get('/api/getUserDetail', (ctx, next) => {
  ctx.body = `{"status":1,"id":"001","name":"莎士比亚","icon":"https://tva1.sinaimg.cn/large/00831rSTly1gdm7eok2oij301s01sgli.jpg","email":"shakespeare@kkb.com","signature":"hello world","title":"买买买","tags":[{"key":"0","label":"买"},{"key":"1","label":"再买"},{"key":"2","label":"接着买~"}],"country":"China","address":"开课吧总部","phone":"0110-20204123"}`;
});

router.get('/api/getOList', (ctx, next) => {
  ctx.body = `{"list":{"data":[{"id":"0","title":"茨威格精选","img":"//img10.360buyimg.com/n2/s240x240_jfs/t1/22996/23/4815/146046/5c358508E28b04284/e34a5fb08595dda0.png","price":1587,"count":3},{"id":"1","title":"女装","img":"https://tva1.sinaimg.cn/large/00831rSTly1gdegl69kmoj30gi0fqq9x.jpg","price":1300,"count":2},{"id":"2","title":"东方快车谋杀案（精装纪念新版）","img":"//img13.360buyimg.com/mobilecms/s316x316_jfs/t1/31472/20/14504/444048/5cbe81c3E015c6fb3/88cc78fff3d17920.jpg!q70.dpg.webp","price":882,"count":3},{"id":"3","title":"群山回唱","img":"//img13.360buyimg.com/n2/s240x240_jfs/t2311/175/1769886898/247454/75c03727/56712bd0Nfabcc664.jpg!q70.jpg","price":1096,"count":2},{"id":"4","title":"无人生还","img":"//img10.360buyimg.com/mobilecms/s316x316_jfs/t1/38482/4/1869/508076/5cbeb91aEce50269e/ae4334f521c29394.jpg!q70.dpg.webp","price":5112,"count":3},{"id":"5","title":"无人生还","img":"//img10.360buyimg.com/mobilecms/s316x316_jfs/t1/38482/4/1869/508076/5cbeb91aEce50269e/ae4334f521c29394.jpg!q70.dpg.webp","price":1446,"count":2},{"id":"6","title":"追风筝的人","img":"//img11.360buyimg.com/n2/s240x240_jfs/t21010/207/701929964/289291/bfd00b3b/5b15fe0eN0c18f4a3.jpg!q70.jpg","price":5002,"count":1},{"id":"7","title":"罗杰疑案","img":"//img13.360buyimg.com/n2/s240x240_g10/M00/0D/0B/rBEQWFFL1vcIAAAAAAuNNu-ercwAACnBAOkS8QAC41O159.jpg!q70.jpg","price":7921,"count":2},{"id":"8","title":"新款vava明星同款棒球丝绒刺绣宽松夹克","img":"https://tva1.sinaimg.cn/large/00831rSTly1gdnkc8w2zrj30aa0fgjt7.jpg","price":7887,"count":2},{"id":"9","title":"华为手机-13","img":"https://tva1.sinaimg.cn/large/00831rSTly1gdegmiois8j30hm0eo79w.jpg","price":4539,"count":2},{"id":"10","title":"海尔冰箱（Haier） BCD-258WDPM","img":"//img12.360buyimg.com/n2/s240x240_jfs/t1/101668/29/17325/58569/5e86e76dE7b477bf6/60cd7676164cb749.jpg!q70.jpg","price":9634,"count":3}]}}`;
});

router.get('/api/getCart', (ctx, next) => {
  ctx.body = `{"list":{"data":[{"id":"0","title":"满天星","img":"//img10.360buyimg.com/mobilecms/s455x455_jfs/t1/20655/31/3115/418302/5c249229E57f9c94c/87ca0c2b6af0dd4a.jpg!q70.dpg.webp","price":"600.05","count":2,"checked":false},{"id":"1","title":"东方快车谋杀案（精装纪念新版）","img":"//img13.360buyimg.com/mobilecms/s316x316_jfs/t1/31472/20/14504/444048/5cbe81c3E015c6fb3/88cc78fff3d17920.jpg!q70.dpg.webp","price":"2.07","count":5,"checked":true},{"id":"2","title":"华为手机-13","img":"https://tva1.sinaimg.cn/large/00831rSTly1gdegmiois8j30hm0eo79w.jpg","price":"692.58","count":6,"checked":false},{"id":"3","title":"老报纸","img":"//img11.360buyimg.com/n2/s370x370_jfs/t1/50238/3/3329/373862/5d118888Ebc20ea79/52977f9388dc1867.jpg!q70.jpg","price":"586.24","count":6,"checked":true},{"id":"4","title":"暮光之城","img":"//img10.360buyimg.com/n2/s240x240_18031/0361a6aa-25c7-44e0-9df5-1c95721d1efb.jpg!q70.jpg","price":"138.51","count":6,"checked":false}]}}`;
});

let a = router;
module.exports = {
  router,
};
