import fetchImplement from "libs/http/index";
import qs from "qs";
import { defaultPath } from "libs/http/config/originPath";

const xhrFactory = ({
  url = "",
  method = "GET",
  contextType = "application/json",
  responseType = "json",
}) =>
  function fn(params?: BodyInit, signal?: AbortSignal) {
    let appendPath = "";
    const config: RequestInit = {
      signal,
      method,
      headers: {
        'Authorization': 'Bearer 1uzx87tBBcQbP',
        "Content-Type": contextType,
      },
    };

    if (method === "GET") {
      appendPath += `?${qs.stringify(params)}`;
    } else if (contextType === "application/x-www-form-urlencoded") {
      config.body = qs.stringify(params);
    } else if (contextType === "application/application"){
      config.body = JSON.stringify(params);
    } else {
      config.body = params;
    }

    return fetchImplement(defaultPath + url + appendPath, config, responseType);
  };

export default xhrFactory;
