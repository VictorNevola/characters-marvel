export default function scrollTo(to: number) {
  window.scrollTo({
    top: to,
    behavior: "smooth",
  });
}
