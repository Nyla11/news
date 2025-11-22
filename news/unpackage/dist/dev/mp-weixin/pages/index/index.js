"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      news: []
    };
  },
  onLoad() {
    common_vendor.index.showLoading({ title: "加载中..." });
    common_vendor.index.request({
      url: "https://raw.githubusercontent.com/Nyla11/school-data/main/posts.json",
      success: (res) => {
        this.news = res.data.posts;
      },
      complete: () => common_vendor.index.hideLoading()
    });
  },
  methods: {
    openinfo(item) {
      common_vendor.index.navigateTo({
        url: "/pages/info/info?data=" + encodeURIComponent(JSON.stringify(item))
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.news, (item, k0, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.created_at),
        d: item.post_id,
        e: common_vendor.o(($event) => $options.openinfo(item), item.post_id)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
