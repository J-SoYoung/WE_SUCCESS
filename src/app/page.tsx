import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Link href="/home" className=" border p-10">
        둘러보기
      </Link>
      <Link href="/auth/login" className="border p-10">로그인</Link>
      <Link href="/auth/signup" className="border p-10">회원가입</Link>
    </main>
  );
}
