gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger 기반 타임라인 애니메이션
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container", // 페이지 전체를 트리거로 설정
    start: "top top",      // 스크롤 시작 지점
    end: "bottom bottom",  // 스크롤 끝 지점
    scrub: true,           // 스크롤 동기화
    markers: true,         // 디버깅용 마커 표시
  },
});

// 1. 중간에 한 바퀴 회전
tl.to(".main-image", {
  rotate: 360, // 한 바퀴 회전
  duration: 3, // 애니메이션 구간 비율
});

// 2. 회전 후 확대
tl.to(".main-image", {
  scale: 4.5, // 이미지 확대 (1.5배)
  duration: 3, // 애니메이션 구간 비율
});
