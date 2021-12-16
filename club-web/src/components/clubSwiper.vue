<template>
  <div class="box">
    <el-carousel height="400px">
      <el-carousel-item
        class="swiper-item"
        v-for="(item, index) in images"
        :key="index"
      >
        <img class="swiper-img" :src="item.src" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.2008php.com%2F2012_Website_appreciate%2F2012-04-26%2F20120426151726.jpg&refer=http%3A%2F%2Fwww.2008php.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639845158&t=092ceb276e9eb5010bbe54e69cfbf499",
        },
        {
          src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fuploadfile.bizhizu.cn%2Fup%2Fc8%2F92%2F89%2Fc89289227cff852f74e2f49e6db2e863.jpg.source.jpg&refer=http%3A%2F%2Fuploadfile.bizhizu.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640994771&t=6d74a7282dee3b1baa23dd34da95be40",
        },
        {
          src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.dkj1997.com%2Fcontent%2Fuploadfile%2F201605%2F18e21463760747.jpg&refer=http%3A%2F%2Fwww.dkj1997.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639845339&t=1ccba6ecbc5d310e296941ababc575c2",
        },
        {
          src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201305%2F12%2F20130512180733_xsL8i.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639845448&t=84c651c203d65a64ec12284e5e9cf4ba",
        },
        {
          src: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.wenlvpai.com%2Fueditor%2Fphp%2Fupload%2Fimage%2F20181217%2F1545015660710900.png&refer=http%3A%2F%2Fwww.wenlvpai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639859892&t=c5b329a1cec64661a23c96e00cf19c91",
        },
      ],
    };
  },
};
</script>

<style scoped>
.swiper-img {
  /* height: 100%; */
  width: 100%;
  border-radius: 10px;
}
.swiper-item {
  border-radius: 10px;
}
</style>