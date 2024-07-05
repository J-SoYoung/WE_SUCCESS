import Link from "next/link";
import React from "react";

const DiaryHome = () => {
  return (
    <div>
      <h1>DiaryHome</h1>
      <div>
        <Link href="/diary/post">다이어리작성</Link>
      </div>
      <div>
        <Link href="/diary/detail">상세페이지</Link>
      </div>
    </div>
  );
};

export default DiaryHome;
