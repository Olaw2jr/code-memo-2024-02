//Next画像最適化
import React from "react";

const MyImage = () => {
  return (
    <img
      src="/image.jpg"
      alt="My Image"
      width={500}
      height={500}
    />
  );
};

export default MyImage;
/*img要素のsrc属性に画像ファイルのパスを指定。Nextはこの画像ファイルを自動的に最適化し、
最適化された画像をクライアントに送信する。*/