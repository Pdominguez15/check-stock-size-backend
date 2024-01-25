const isPullAndBearUrl = (url) => {
  const regexPullAndBear = new RegExp(/https:\/\/www.pullandbear.com\//);

  return regexPullAndBear.test(url);
};

export default isPullAndBearUrl;
