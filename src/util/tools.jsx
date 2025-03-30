const scrollClick = (sectionId) => {
  console.log(sectionId);
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
export default scrollClick;
