import request from "@/utils/request";

export function getBannerList(data = {}) {
  return request({
    url: "/promote/backstage/banner/getAllBanner",
    method: "post",
    data
  });
}
