import request from "@/utils/request";

export function getAnalystList(data = {}) {
  return request({
    url: "/promote/backstage/analyst/getAllAnalyst",
    method: "post",
    data
  });
}
export function addAnalyst(data = {}) {
  return request({
    url: "/promote/backstage/analyst/addAnalyst",
    method: "post",
    data
  });
}
export function delAnalyst(data = []) {
  return request({
    url: "/promote/backstage/analyst/delAnalyst",
    method: "post",
    data: {
      idList: data
    }
  });
}
export function getAnalystPage(data = {}) {
  return request({
    url: "/promote/backstage/analyst/getAnalystPage",
    method: "post",
    data
  });
}
export function updateAnalyst(data = {}) {
  return request({
    url: "/promote/backstage/analyst/updateAnalyst",
    method: "post",
    data
  });
}
