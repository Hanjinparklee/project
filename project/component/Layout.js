import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Styles from "../styles/Layout.module.css";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - jinbinpoto" : "jinbinpoto"}</title>
        <meta name="description" content="Nextjs" />
      </Head>

      <nav>
        <div className={Styles.header}>
          <div>
            <a href="#">
              <img
                className={Styles.logoimg}
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
              />
              <span className={Styles.logo}>Flowbite</span>
            </a>
          </div>
          <Link href="/project" className={Styles.list}>
            프로젝트
          </Link>
          <Link href="/portfolio" className={Styles.list}>
            포트폴리오
          </Link>
          <Link href="/mainskile" className={Styles.list}>
            사용기술
          </Link>
          <Link href="/" className={Styles.list}>
            홈으로
          </Link>
        </div>
      </nav>

      <main className="">{children}</main>

      <footer className={Styles.footer}>
        <div class="py-3 uk-link-reset">
          <div class="flex flex-col items-center justify-between lg:flex-row max-w-6xl mx-auto lg:space-y-0 space-y-3">
            <div class="flex space-x-2 text-gray-700 uppercase">
              <Link href="/about">About</Link>
            </div>
            <p class="capitalize">
              Copyright &copy; 2022 Powered by Team FallGuys
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
