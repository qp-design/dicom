import xhrFactory from "libs/http/config";

// 获取报告
export const checkAi = xhrFactory({
  url: "/diag_doctor/check_ai/385",
  method: "GET",
});


// 上传截图
export const picture = xhrFactory({
  url: "/diag_doctor/check/picture",
  method: "POST",
  contextType: 'application/octet-stream'
});
