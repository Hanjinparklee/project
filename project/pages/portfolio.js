import React from "react";
import Layout from "../component/Layout";
import Styles from "../styles/portfolio.module.css";
import Link from "next/link";

export default function ad() {
  return (
    <div className={Styles.main}>
      <Layout>
        <div class="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-20 ">
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full flex justify-center">
                <div class="relative">
                  <img
                    src="images/bonono.jpg"
                    class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                  />
                </div>
              </div>
              <div class="w-full text-center mt-20"></div>
            </div>
            <div class="text-center mt-2">
              <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
                정보보안학과 3학년 손진빈입니다.
              </h3>
              <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase"></div>
            </div>
            <div class="mt-6 py-6 border-t border-slate-200 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="w-full px-4 h-64">
                  <p class="font-light leading-relaxed text-slate-600 mb-4">
                    중부대학교에 재학중이며 현재 프론트쪽에 관심을 가지며
                    공부중인 손진빈입니다.
                    <br />
                    주로 팀원들과 같이 프로젝트를 계획하거나 학교 수업
                    내용위주로 <br />
                    지식을 쌓아가며 실력을 키워가고 있습니다.
                    <br />
                    언제나 노력하여 완숙한 개발자가 되는 그 날 까지 계속
                    발전하겠습니다.
                  </p>
                  <div className={Styles.down}>
                    <div className={Styles.downtext}>
                      <Link href="https://github.com/withsjb/wapaap">
                        <div className={Styles.gitimgbox}>
                          <img className="img" src="images/gitimg.jpg"></img>
                        </div>
                      </Link>
                      <p>github</p>
                    </div>
                    <div className={Styles.downtext}>
                      <div className={Styles.gitimgbox}>
                        <img className="img" src="images/call.jpg"></img>
                      </div>
                      <p>010-5671-0882</p>
                    </div>
                    <div className={Styles.downtext}>
                      <div className={Styles.gitimgbox}>
                        <img className="img" src="images/mail.jpg"></img>
                      </div>
                      <p>withsjb1@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-10/12 h-full mt-44 bg-green-50  mx-auto rounded-xl">
          <div class="text-2xl font-bold relative inset-1/4 top-44">
            자기소개
          </div>
          <p class="text-2xl font-bold relative inset-1/4 top-44">
            information
          </p>
          <div className={Styles.downtitle}>저는 이런 사람입니다</div>
          <div className={Styles.downtop}>
            <div class="relative  md:max-w-2xl mt-6 min-w-0 break-words bg-white w-96 h-40 mb-6 shadow-lg rounded-xl mt-20 inset-y-2">
              <p class="max-w-md mx-auto text-2xl font-bold opacity-70 text-center">
                책임감
              </p>
              <p>
                아무리 어렵고 힘든 작업이라도 한번 맡은 작업은 끝까지
                할려고합니다.
              </p>
            </div>

            <div class="relative  md:max-w-2xl mt-6 min-w-0 break-words bg-white w-96 h-40 mb-6 shadow-lg rounded-xl mt-20 float-right bottom-64">
              <p class="max-w-md mx-auto text-2xl font-bold opacity-70 text-center">
                성실함
              </p>
              <p>
                자기가 할 일을 미루지 않으며 언제나 맡은 일에 최선을 다합니다.
              </p>
            </div>
          </div>
          <div className={Styles.downdown}>
            <div class="relative  md:max-w-2xl mt-6 min-w-0 break-words bg-white w-96 h-40 mb-6 shadow-lg rounded-xl mt-20 inset-y-2">
              <p class="max-w-md mx-auto text-2xl font-bold opacity-70 text-center">
                도전
              </p>
              <p>
                처음 하는 작업이나 어려워 보이는 작업도 실패를 두려워하지 않고
                도전해보려고 합니다.
              </p>
            </div>
            <div class="relative  md:max-w-2xl mt-6 min-w-0 break-words bg-white w-96 h-40 mb-6 shadow-lg rounded-xl mt-20 float-right bottom-64">
              <p class="max-w-md mx-auto text-2xl font-bold opacity-70 text-center">
                반성
              </p>
              <p>
                실패를 경험으로 삼아 다음에는 어떻게 해야 성공할 수 있을지
                자아성찰을 합니다.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
