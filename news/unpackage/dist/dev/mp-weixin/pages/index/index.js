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
      // 已替换为 posts.json
      url: "https://raw.githubusercontent.com/Nyla11/school-data/main/posts.json",
      method: "GET",
      success: (res) => {
        this.news = res.data.posts;
        common_vendor.index.hideLoading();
      }
    });
  },
  methods: {
    openinfo(e) {
      let id = e.currentTarget.dataset.newsid;
      common_vendor.index.navigateTo({
        url: "../info/info?newsid=" + id
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.news, (item, index, i0) => {
      return {
        a: item.img,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.created_at),
        d: index,
        e: common_vendor.o((...args) => $options.openinfo && $options.openinfo(...args), index),
        f: item.post_id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
