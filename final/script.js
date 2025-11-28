/* ------------------------
   DOM 요소
------------------------- */
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalYear = document.getElementById("modal-year");
const modalDesc = document.getElementById("modal-desc");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

const rerollBtn = document.getElementById("reroll-btn");
const randomBtn = document.getElementById("random-btn");
const menuBtn = document.getElementById("menu-btn");
const dropdown = document.getElementById("dropdown");

let openedByRandom = false;


/* ------------------------
   등장인물 데이터
------------------------- */
const characters = {
  "드래곤볼": [
    { name: "손오공", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F49%2F60_715249_main_image_new_1438244439032.jpg" },
    { name: "부르마", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F50%2F60_715250_main_image_new_1438244428601.jpg" },
    { name: "크리링", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F52%2F60_715252_main_image_new_1438244404859.jpg" },
    { name: "무천도사", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F51%2F60_715251_main_image_new_1438244418486.jpg" },
    { name: "피라프", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F54%2F60_715254_main_image_new_1438244384460.jpg" }
  ],
  
    "가치아쿠타": [
     { name: "루도", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA4MTFfMjgz%2FMDAxNzU0ODgwOTUzNjE4.pVf5IZDbMQ_k0nKEfMtcwSbG7V0bludtFnzYzO05xyog.8tiOceVlntyPTSZLv0_umVkI0UIvynrvgdJqjuXEPIMg.JPEG%2F2025-07-14_%25BA%25D0%25B3%25EB%25C7%25D1_%25B7%25E7%25B5%25B5_15.jpg&type=sc960_832" },
     { name: "엔진", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAzMThfMTU4%2FMDAxNzQyMzA5MTYzNTY1.jyHl2eMrkia0br8V5Cns4NIqmMLcioaxtKvXHRa3zDAg.OAGfOeAS_Mt6iCUKGHW5HLWkSnoKETXtAu5RJbN-9gEg.JPEG%2F8.jpg&type=sc960_832" },
  ],

    "괴수 8호": [
    { name: "히비노 카프카", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MTFfNSAg%2FMDAxNzIzMzY2NzgxODcy.Jkzj798xVDY8OXfnj41-_EqWL-nUXZ_reEnZRMneyawg.fCiAmKM-ag9vaq3L-kS-_Ediz1-5FEgHYoD_p81qmp0g.JPEG%2F1723366780886.jpg&type=sc960_832" },
    { name: "이치카와 레노", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTEwMTJfMjQ0%2FMDAxNzYwMjQ1NzM2MTQy.1VesZPZwv9WLMNSBLlViCENeg279k_Ogf7YWRf_PYu8g.0-BwufjZyeg-95QbfCO85GL8cUxtTzRLsb6zth_bn6Ig.JPEG%2Foutput%25A3%25DF1522743860.jpg&type=sc960_832" },
    { name: "아시로 미나", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MjRfMTEw%2FMDAxNzQ1NTA2NzYwMjE4.3zzRa3QbmEUlWvvXslGLVmGulBlsq7FqWAb4LBp-Dq0g.VxDzuwlBxBNdzq_yF5ardsw2LITr6NQeawQzH2kqETAg.PNG%2FIMG_9281.PNG&type=sc960_832" },
    { name: "호시나 소우시로", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDExMjVfMjk1%2FMDAxNzMyNTEyNTM3NTQ0.I_MfuZyhmBKexUmQnKfd4WqnMXHQ83hxscfFIMZFO2Mg.k47r8TMw4SkNn94e64Gh6rFAp9lDifxfSZ347wUwe5Yg.PNG%2Fimage.png&type=sc960_832" },
    { name: "시노미야 키코루", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MTFfMjI3%2FMDAxNzIzMzY2ODE3NzEx.pTjhpaTmWX_SfNyPpm1VHVyC4BczUoWEYWn8g9WaYhgg.Mx2CFUcfRhtainMll66oqz4Vc9R9_q5VoqgVfLideLMg.JPEG%2F1723366817103.jpg&type=sc960_832" },
  ],
      "사카모토데이즈": [
    { name: "사카모토 타로", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA5MTZfMzQg%2FMDAxNzU3OTU0NDE5OTQ0.1YjKtOOOkQqpCnaZ_OJo4qQOvai3xzUnHvbx1JV5Af0g.YjXPPaEyRDbgK-pRxLEH7bGTsgSLq7-td0PdTcKxCeog.PNG%2F%25BD%25BA%25C5%25A9%25B8%25B0%25BC%25A6%252828088%2529.png&type=a340" },
    { name: "아사쿠라 신", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAxMjFfMTEg%2FMDAxNzM3NDQ2MzE4MjMz.32M0aygBEeJB7P8VAQH2oVIINqdA2xizLmyReKX9hx0g.F6SPLFxBx2RfAXYhUgbd31eWjK0wvICvhvgw8Be-8-gg.PNG%2F%25BB%25E7%25C4%25AB%25B8%25F0%25C5%25E4_%25B5%25A5%25C0%25CC%25C1%25EE___2%25C8%25AD_00_11.png&type=sc960_832" },
    { name: "루 샤오탕", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MDlfOSAg%2FMDAxNzQ0MjAwNTEwNjU1.D5q-K7TBxmSolrKhN0VswBZ5LrC6icJpJOgMFtyN0bkg.I7pYktDl-fXRzm4Ps1FhfWWJgWIRnfrw1GJhOoSyY3Ig.PNG%2Fimage.png&type=sc960_832" },
    { name: "사마모토 아오이", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMTFfNDYg%2FMDAxNzM5MjY0NjcyMzU1.NHE5vIJqpJJYTbsZbGM8iFVt7LtdX4P-pknEN-SOIY0g.1m0N-VRDSr0VYgf4ifCGwITL-3zJp0NxzMvWID_DnQAg.JPEG%2Foutput_1312910120.jpg&type=sc960_832" },
    { name: "슬러", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA2MTVfMjEy%2FMDAxNzQ5OTgzMjU3ODMz.zy8QEkuPqlqnEpLOpjaKVPdd75L9xanvBp0K9b_-6Scg.WV754EEbWrJHHscg6vVRVMYQ9Mtoans4v65FICSxyHEg.JPEG%2FIMG%25A3%25DF6339.jpg&type=sc960_832" },
  ],
      "나 혼자만 레벨업": [
    { name: "성진우", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMDRfMTIg%2FMDAxNjQxMjc4NDQ0MTAz.Z_gXZIDja4nqCGQYK1FCyBDKEUVvN_Ks9JUZePgCQ90g.r_Bk3tJRFrk6AWPb8G4XD5FukA04AECTrfU5t3HnbgMg.JPEG.yyun1230%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5.jpg&type=sc960_832" },
    { name: "차해인", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA3MjNfMTUz%2FMDAxNzUzMjM4MTg3MDQ0._rM_898vrW9GJW33Gk7z7Soojve3ZhVxluuJTxlkr7Yg.6WHn7pmQ_Itk8sBlV-_EIEt3QHUbXYIrWwyaG5sxjUEg.JPEG%2F%25C2%25F7%25C7%25D8%25C0%25CE.jpg&type=sc960_832" },
    { name: "성진아", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMDlfOTYg%2FMDAxNzM5MDk1ODkxMTgy.TYJLxOcX36CRVo-KXFLrttBn_Zu_Fyx1SGLu2o8Ggpcg.qTkq_8zJCEqm7q-FfTPKmBnsWpa7lc_DfL_gu5x3v3Ag.PNG%2Fimage.png&type=sc960_832" },
  ],
      "이세계 유유자적 농가": [
    { name: "마치오 히라쿠", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MDZfNjEg%2FMDAxNjgwNzQ3OTYyNzkw.C7T5Q07qRTQ6CrzOAoakni2JjC_yJ9AdfD8_QuBTXAkg.oV95SRtCvazPmy4ZZh-2JWq9wcEe6INDQd1LV7XGQa0g.JPEG.fprlwk%2F800_400isekai-nonbiri-nouka_1678430925.jpg&type=sc960_832" },
    { name: "루루시루", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MjVfMTQz%2FMDAxNzQ1NTgwMjk5MDQ4.5mPRg2NVqb7cQbvCHcTz48EdAyM6Mn3er21zlprB-qcg.Xsn32UOwSgKVhYPGIXwUiVlgsC1GAke-6GNJvOImfZkg.JPEG%2Fmaxresdefault.jpg&type=sc960_832" },
    { name: "티어", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjdfMjI0%2FMDAxNjkzMTEyMjc3MzM1.LDnB92PrLIgyDkhfmMnxaUCKkMPaFmKjfxdLx8k2SI4g.If-O0ZY8TdAjhEbkI3mBZKsP5gH68r7JSU6Y_ehQC5Eg.JPEG.darsyche%2FVideoCapture_20230720-002509.jpg&type=sc960_832" },
  ],
     "장송의 프리렌": [
    { name: "프리렌", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA5MjJfMjI4%2FMDAxNzI3MDAzMTg4ODE3.m1_LVT3b0_oeVy7Hc9emRbRjN51B8y4cpvCG7iYxZiog.Bt0e_xxnuR0mS7nruKH9o1uiWb8TxId4Jg8aejLdF14g.PNG%2Fscreencapture-coupangplay-play-78d407a7-7bb0-4db9-9a26-3a00b35f4bc1-episode-.png&type=sc960_832" },
    { name: "힘멜", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMDJfMjMy%2FMDAxNzA0MjAwNjk1NDUw.8w5WJQoH5_5hmaXIuQ1iM4oMZ6cgi6ESSL9u3_Y6wW4g.4XyU6QjuoSGi30XXEpQsFa8BoxzGPUhhXDq9saXtbygg.JPEG.kilaring%2FIMG_7085.jpg&type=sc960_832" },
    { name: "페른", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MTJfMjM1%2FMDAxNzEyODQ5NjY0OTY0.AiBnOhiQeMT44texcc58lCFrxebn2S-p-jPOrXuUFsIg.2MjQ0eptKOkUxUlakS3N_QIHFyWufezAKGjKm5g7nEMg.JPEG%2FScreenshot%25A3%25DF20240412%25A3%25AD003310%25A3%25DFSamsung_Internet.jpg&type=sc960_832" },
    { name: "슈타르크", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjlfMjA2%2FMDAxNzMwMTgwMzg3MTI1.q0r1Yjf0LYFQomgHTLJJoOZ0I2L35aaR2wQVMWv1ScAg.nZagkh9i9OoKRdfUb_tblLh81ClFTVwciBrvcbNMli0g.JPEG%2F%25C0%25E5%25BC%25DB%25C0%25C7%25C7%25C1%25B8%25AE%25B7%25BB_%252824%2529.JPG&type=sc960_832" },
  ],
     "체인소맨": [
    { name: "덴지", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTEwMDhfODMg%2FMDAxNzU5OTAzNzEyMDI2.A14pg5NlMi639MgNvBNmtewoCojLWrokiHEABUiDk6Eg.B4DWNhLRrfdkfg3RBiSwcq9YhAaU_TdXp5bkMpY-5PEg.JPEG%2F8%25C0%25A7.jpg&type=sc960_832" },
    { name: "마키마", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MDNfMTEw%2FMDAxNzIyNjkzNjc2OTI5.-kd-I55rFvDydCM69ZUatYe-PsFFJn8uXJZoAHrIXdwg.2pc_pVEffR2o1eFVBUxOBg_Zx5n5YNEm23v_S4vQWZQg.JPEG%2F48f584af08f12c4cbd7c80e950b9d67f.jpg&type=sc960_832" },
    { name: "아키", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMDVfMjk2%2FMDAxNjY3NjAyMDQxNzQ5.GYNWcyIpornF0zTl6gbkzM3k8800XhemZQydce4nGDIg.QJ3p_uyMLAFBgQt-Cabd8KeIsoWmt8762PzVCHKANKgg.PNG.mickeyhobby%2F1667602038_3801_65651.png&type=sc960_832" },
    { name: "파워", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMjhfMTU5%2FMDAxNjcyMjI1MzU0OTE5.yfSi3Oho2-N-aswUW7W-e-pRcG7k4xY6Dhi-Bgk3vWog.MFchMDYxZk0YlDom1w3wc4LgtJ-GJ_5IgNM1hxBqZFAg.PNG.elfin_day%2F%25C3%25BC%25C0%25CE%25BC%25D2%25B8%25C7_%25C8%25F7%25B8%25DE%25B3%25EB_%25BE%25C6%25C5%25B0_%25C6%25C4%25BF%25F6_%25B5%25A7%25C1%25F6_%25B8%25B6%25C5%25B0%25B8%25B6_%25C4%25DA%25BA%25A3%25B4%25CF_%252841%2529.png&type=sc960_832" },
  ],
     "블루록": [
    { name: "이사기", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMDhfMjI4%2FMDAxNjc4Mjc2ODk2NDg4.ZQBIqYEtGPV35zfXZe7Y3QpmgkyEi-pE8nF-Y-DxPMYg.d-KQ_iVoDq44CyPcfcZgRijIW04GVeYTAgCnI0Pz-A4g.JPEG.qm61633%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E51.jpg&type=sc960_832" },
    { name: "바치라", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTAyMDFfMjg0%2FMDAxNzM4NDE5MTQyOTAz.CJRI-WSVebNskRVtRcWAnGMu2K_uZ2DVrQB48rNGesUg.mO6iaQYTUFrq3by4Nl8Y3pFr8XlmUDOePOgAC3AL2psg.JPEG%2FIMG_3779.JPG&type=sc960_832" },
  ],
      "사이버펑크:엣지러너": [
    { name: "루시", img: "https://i.pinimg.com/736x/15/32/58/153258e920f5df9a7a0bbb5a5da08b63.jpg" },
    { name: "데이비드", img: "https://i.pinimg.com/736x/9d/e2/81/9de2812502e288f54edfdf7e985a90a4.jpg" },
  ],
     "아케인": [
    { name: "바이", img: "" },
    { name: "징크스", img: "" },
  ],
      "주술회전": [
    { name: "이타도리 유지", img: "" },
    { name: "호시구로 메구미", img: "" },
    { name: "고죠 사토루", img: "" },
    { name: "스쿠나", img: "" },
  ],
     "귀멸의 칼날": [
    { name: "카마도 탄지로", img: "" },
    { name: "카마도 네즈코", img: "" },
    { name: "아가츠마 젠이츠", img: "" },
    { name: "하시바라 이노스케", img: "" },
    { name: "키브츠지 무잔", img: "" },
  ],
     "나의 히어로 아카데미아": [
    { name: "미도리야 이즈쿠(데쿠)", img: "" },
    { name: "올마이트(야기토시노리)", img: "" },
    { name: "바쿠고 카츠키", img: "" },
    { name: "토도리키 쇼토", img: "" },
    { name: "우라아카 오챠코", img: "" },
  ],
     "아따맘마": [
    { name: "엄마", img: "" },
    { name: "아빠", img: "" },
    { name: "오아리", img: "" },
    { name: "오동동", img: "" },
  ],
       "원펀맨": [
    { name: "사이타마", img: "" },
    { name: "제노스", img: "" },
    { name: "타츠마키", img: "" },
  ],
     "기생수": [
    { name: "이즈미신이치", img: "" },
    { name: "미기", img: "" },
    { name: "타미야료코", img: "" },
    { name: "고토", img: "" },
  ],
       "일곱 개의 대죄": [
    { name: "엘리자베스 리오네스", img: "" },
    { name: "멜리오다스", img: "" },
    { name: "다이앤", img: "" },
    { name: "킹", img: "" },
    { name: "반", img: "" },
    { name: "고서", img: "" },
    { name: "멀린", img: "" },
    { name: "에스카노르", img: "" },
    { name: "호크", img: "" },
  ],
     "하이큐": [
    { name: "히나타 쇼요", img: "" },
    { name: "카게야마 토비오", img: "" },
    { name: "츠키시마 케이", img: "" },
    { name: "오이카와 토오루", img: "" },
  ],
       "도쿄구울": [
    { name: "카네키 켄", img: "" },
    { name: "카미시로 리제", img: "" },
    { name: "키리시마 토우카", img: "" },
  ],
     "러브다이브!": [
    { name: "사쿠라우치 로코", img: "" },
    { name: "코사카 호노카", img: "" },
    { name: "미나미 코토리", img: "" },
    { name: "소노다우미", img: "" },
    { name: "아야세 에리", img: "" },
    { name: "와타나베 치카", img: "" },
  ],
       "진격의 거인": [
    { name: "에렌 예거", img: "" },
    { name: "미카사 아커만", img: "" },
    { name: "아르민 알레르토", img: "" },
    { name: "리바이 아커만", img: "" },
  ],
     "안녕 자두야": [
    { name: "최자두", img: "" },
    { name: "엄마", img: "" },
    { name: "아빠", img: "" },
    { name: "미미", img: "" },
    { name: "애기", img: "" },
  ],
       "캐릭캐릭체인지": [
    { name: "아무", img: "" },
    { name: "토마", img: "" },
    { name: "세라", img: "" },
    { name: "루이", img: "" },
  ],
     "데스노트": [
    { name: "야가미 라이토", img: "" },
    { name: "L", img: "" },
    { name: "니아", img: "" },
  ],
       "개구리 중사 케로로": [
    { name: "케로로", img: "" },
    { name: "타마마", img: "" },
    { name: "기로로", img: "" },
    { name: "쿠루루", img: "" },
    { name: "도로로", img: "" },
    { name: "강우주", img: "" },
    { name: "강한별", img: "" },
    { name: "모아", img: "" },
  ],
     "슈가슈가룬": [
    { name: "쇼콜라 메이율", img: "" },
    { name: "바닐라 뮤", img: "" },
  ],
       "빛의 전사 프리큐어": [
    { name: "묵하람", img: "" },
    { name: "큐어블랙", img: "" },
    { name: "백시연", img: "" },
    { name: "큐어화이트", img: "" },
    { name: "메플", img: "" },
    { name: "미플", img: "" },
  ],
     "블리치": [
    { name: "쿠로사키 이치고", img: "" },
    { name: "아이젠 소스케", img: "" },
    { name: "쿠치키 루키아", img: "" },
  ],
       "강철의 연금술사": [
    { name: "에드워드 엘릭", img: "" },
    { name: "알폰스 엘릭", img: "" },
    { name: "윈리 록벨", img: "" },
  ],
     "학교괴담": [
    { name: "나해미", img: "" },
    { name: "나누리", img: "" },
    { name: "장영빈", img: "" },
    { name: "오경태", img: "" },
    { name: "마리아", img: "" },
  ],
       "유희왕": [
    { name: "유희", img: "" },
    { name: "어둠의 유희", img: "" },
    { name: "조이", img: "" },
    { name: "", img: "" },
  ],
     "이누야샤": [
    { name: "이누야샤", img: "" },
    { name: "유가영", img: "" },
    { name: "미륵", img: "" },
    { name: "산고", img: "" },
    { name: "셋쇼마루", img: "" },
    { name: "나락", img: "" },
  ],
       "헌터 X 헌터": [
    { name: "곤프릭스", img: "" },
    { name: "키르아 조르딕", img: "" },
    { name: "카이토", img: "" },
    { name: "레오리오", img: "" },
    { name: "크라피카", img: "" },
    { name: "히소카", img: "" },
  ],
     "디지몬 어드벤쳐": [
    { name: "최산해", img: "" },
    { name: "홍예지", img: "" },
    { name: "이재하", img: "" },
    { name: "리키", img: "" },
    { name: "신나리", img: "" },
  ],
       "": [
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
  ],
     "": [
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
  ],
       "": [
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
  ],
     "": [
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
    { name: "", img: "" },
  ],
};
  




/* ------------------------
   모달 열기
------------------------- */
document.querySelectorAll(".anime-card").forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");

    modalTitle.textContent = card.dataset.title;
    modalYear.textContent = `방영년도: ${card.dataset.year}`;
    modalDesc.textContent = card.dataset.desc;
    modalImg.src = img.src;

    /* --- 등장인물 표시 --- */
    const list = document.getElementById("character-list");
    list.innerHTML = "";

    const charData = characters[card.dataset.title];
    if (charData) {
      charData.forEach(ch => {
        const div = document.createElement("div");
        div.classList.add("character-card");
        div.innerHTML = `
          <img src="${ch.img}">
          <p class="character-name">${ch.name}</p>
        `;
        list.appendChild(div);
      });
    }

    enableDragScroll(list);

  

    // 랜덤으로 열렸을 때만 버튼 표시
    rerollBtn.style.display = openedByRandom ? "block" : "none";

    modal.style.display = "block";
  });
});


/* ------------------------
   모달 닫기
------------------------- */
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  openedByRandom = false;
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    openedByRandom = false;
  }
});


/* ------------------------
   "랜덤 추천" 버튼
------------------------- */
randomBtn.addEventListener("click", () => {
  const cards = [...document.querySelectorAll(".anime-card")];
  const randomCard = cards[Math.floor(Math.random() * cards.length)];

  openedByRandom = true;
  randomCard.click();

  dropdown.style.display = "none";
});


/* ------------------------
   "다시 뽑기" 버튼
------------------------- */
rerollBtn.addEventListener("click", () => {
  const cards = [...document.querySelectorAll(".anime-card")];
  const randomCard = cards[Math.floor(Math.random() * cards.length)];

  openedByRandom = true;
  randomCard.click();
});


/* ------------------------
   메뉴 열기 / 닫기
------------------------- */
menuBtn.addEventListener("click", () => {
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});


/* ------------------------
   등장인물 드래그 스크롤
------------------------- */
function enableDragScroll(list) {
  let isDown = false;
  let startX, scrollLeft;

  list.addEventListener("mousedown", e => {
    isDown = true;
    startX = e.pageX - list.offsetLeft;
    scrollLeft = list.scrollLeft;
  });

  list.addEventListener("mouseup", () => isDown = false);

  list.addEventListener("mousemove", e => {
    if (!isDown) return;
    const x = e.pageX - list.offsetLeft;
    list.scrollLeft = scrollLeft - (x - startX) * 1.3;
  });
}


/* ------------------------
   애니 목록 가로 드래그 슬라이드
------------------------- */
document.querySelectorAll(".anime-list").forEach(list => {
  enableAnimeSlide(list);
});

function enableAnimeSlide(container) {
  let isDown = false;
  let startX;
  let scrollLeft;
  let moved = false;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    moved = false;
    container.classList.add("dragging");
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX);

    if (Math.abs(walk) > 5) {
      moved = true;
      container.scrollLeft = scrollLeft - walk;
      container.style.pointerEvents = "none";
      e.preventDefault();
    }
  });

  function stopDrag() {
    if (isDown) {
      setTimeout(() => {
        container.style.pointerEvents = "";
      }, 30);
    }

    isDown = false;
    container.classList.remove("dragging");
  }

  container.addEventListener("mouseleave", stopDrag);
  container.addEventListener("mouseup", stopDrag);
  window.addEventListener("mouseup", stopDrag);

  container.addEventListener("click", (e) => {
    if (moved) {
      e.preventDefault();
      moved = false;
      return;
    }
  });
}


