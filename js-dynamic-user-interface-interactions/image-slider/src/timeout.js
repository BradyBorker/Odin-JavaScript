export default function runner(moveSlides) {
  moveSlides.right(1);

  setTimeout(() => {
    runner(moveSlides);
  }, "5000");
}

export function resetTimeOut(timeOut) {
  clearTimeout(timeOut);
}
