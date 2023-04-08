import Styles from "../styles/project.module.css";
import React from "react";
import Layout from "../component/Layout";

import Link from "next/link";

export default function ad() {
  return (
    <div className={Styles.main}>
      <Layout>
        <div class="px-2 md:px-6 my-3 w-full text-slate-700 dark:text-white flex flex-col items-center">
          <div class="max-w-xl text-left flex flex-col w-full items-center justify-center md:p-4 md:border border-slate-300 dark:border-slate-600 rounded-xl">
            <div class="w-full rounded-xl flex-col xl:flex-row bg-white dark:bg-slate-900 shadow-md">
              <div class="rounded-t-xl w-full h-64 shadow-sm bg-cover bg-[url('../public/images/timecorceimg.jpg')]"></div>

              <div class="w-full p-3 flex flex-col justify-between h-auto overflow-auto lg:h-auto">
                <h1 class="text-left text-sm md:text-lg font-bold leading-normal">
                  Timecorce
                </h1>
                <p class="text-sm">
                  3학년 1학기 캡스톤으로 진행한 프로젝트 기존 수강신청 사이트에
                  불편한점을 개선하는 목적으로 기존 ui의 개선이나 새로운
                  기능(별점및 강의평가기능과 호버기능을 이용한 간편정리등)들을
                  추가하였다. 이 작업으로 인해 팀원들과 작업을 할때 어떠한
                  불편함이 있고 또 어떤 장점이 있으며 어떻게 협업을 해야할지
                  알았고 이후 작업에도 큰 도움이 되었다.
                </p>

                <div class="flex mt-4">
                  <button class="transition-all duration-100 text-center p-2 rounded-md text-white w-1/2 bg-gradient-to-r from-blue-700 to-blue-500 hover:shadow-md hover:from-blue-800 hover:to-blue-600">
                    Go github
                  </button>
                  <div class="flex flex-col ml-4 w-1/2">
                    <h2 class="text-center text-xs mt-1 mb-2 text-blue-600 dark:text-blue-400 font-bold uppercase">
                      진행기간
                    </h2>

                    <span class="self-center text-xs text-blue-700 dark:text-blue-300 -mt-2">
                      2022/03/14~2022/06/23
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="px-2 md:px-6 my-3 w-full text-slate-700 dark:text-white flex flex-col items-center">
          <div class="max-w-xl text-left flex flex-col w-full items-center justify-center md:p-4 md:border border-slate-300 dark:border-slate-600 rounded-xl">
            <div class="w-full rounded-xl flex-col xl:flex-row bg-white dark:bg-slate-900 shadow-md">
              <div class="rounded-t-xl w-full h-64 shadow-sm bg-cover bg-[url('../public/images/jbu.jpg')]"></div>

              <div class="w-full p-3 flex flex-col justify-between h-auto overflow-auto lg:h-auto">
                <h1 class="text-left text-sm md:text-lg font-bold leading-normal">
                  JBU drive!
                </h1>
                <p class="text-sm">
                  3학년 1학기 암호프로그래밍때 진행한 팀 프로젝트로 기존에
                  사용하던 정보들을 따로 목록을 모와 저장하는 작업 아이디
                  비밀번호와 회원정보및 채팅기록을 암호화하여 보안을 강화하고
                  이용자들이 과정을 쉽게 이용하게 하기 위해 ui를 개발하였다. 이
                  프로젝트를 진행하면서 웹 프로젝트 진행시에 어떠한 암호기술이
                  들어가는지 알 수 있었고 또 어떻게 적용되어 관리자가 관리하게
                  되는지 알 수 있는 좋은 기회가 되었다.
                </p>

                <div class="flex mt-4">
                  <button class="transition-all duration-100 text-center p-2 rounded-md text-white w-64 bg-gradient-to-r from-blue-700 to-blue-500 hover:shadow-md hover:from-blue-800 hover:to-blue-600">
                    Go github
                  </button>
                  <div class="flex flex-col ml-4 w-1/2">
                    <h2 class="text-center text-xs mt-1 mb-2 text-blue-600 dark:text-blue-400 font-bold uppercase">
                      진행기간
                    </h2>

                    <span class="self-center text-xs text-blue-700 dark:text-blue-300 -mt-2">
                      2022/03/14~2022/06/23
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="px-2 md:px-6 my-3 w-full text-slate-700 dark:text-white flex flex-col items-center">
          <div class="max-w-xl text-left flex flex-col w-full items-center justify-center md:p-4 md:border border-slate-300 dark:border-slate-600 rounded-xl">
            <div class="w-full rounded-xl flex-col xl:flex-row bg-white dark:bg-slate-900 shadow-md">
              <div class="rounded-t-xl w-full h-64 shadow-sm bg-cover bg-[url('../public/images/festival.jpg')]"></div>

              <div class="w-full p-3 flex flex-col justify-between h-auto overflow-auto lg:h-auto">
                <h1 class="text-left text-sm md:text-lg font-bold leading-normal">
                  Let`s Festival
                </h1>
                <p class="text-sm">
                  3학년 2학기 웹프로그래밍 캡스톤으로 진행한 프로젝트로 앞선
                  1학기때 사용햇던 기술들과 이번에 새로 배운 Next Js 및 react
                  툴을 사용하여 진행하였다. 이번 프로젝트로 앞서 사용했던
                  작업들을 다시 복습할 수 있었으며 Tailwind Css 의 편리함과
                  react 툴의 기능들을 알아볼 수 있었던 좋은 기회였던것 같다.{" "}
                </p>

                <div class="flex mt-4">
                  <Link href="https://github.com/withsjb/Let-s_Festival-main/tree/master">
                    <button class="transition-all duration-100 text-center p-2 rounded-md text-white w-64 bg-gradient-to-r from-blue-700 to-blue-500 hover:shadow-md hover:from-blue-800 hover:to-blue-600">
                      Go github
                    </button>
                  </Link>

                  <div class="flex flex-col ml-4 w-1/2">
                    <h2 class="text-center text-xs mt-1 mb-2 text-blue-600 dark:text-blue-400 font-bold uppercase">
                      진행 기간
                    </h2>

                    <span class="self-center text-xs text-blue-700 dark:text-blue-300 -mt-2">
                      2022/08/23~2022/12/11
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
