"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "",
      strings: ""
    };
  },
  onLoad(e) {
    const id = e.newsid;
    common_vendor.index.request({
      // 这里也改成 posts.json
      url: "https://raw.githubusercontent.com/Nyla11/school-data/main/posts.json",
      method: "GET",
      success: (res) => {
        let list = res.data.posts;
        let art = list.find((v) => v.post_id == id);
        this.title = art.title;
        this.strings = art.content;
      }
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title),
    b: $data.strings
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/info/info.js.map
