const scrollClick = (selector: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  const element = document.querySelector(`#${selector}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

export default scrollClick;
