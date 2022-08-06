export const scrollToElement = (element) => {
  const el = document.querySelector(element);
  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
