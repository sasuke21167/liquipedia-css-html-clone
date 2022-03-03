const dropToggle = document.querySelectorAll("#drop-toggle");
const brandMenu = document.querySelector(".brand-menu");
const navItem = document.querySelector(".brand-desktop");
const trending = document.querySelector(".nav-drop-trending");
const tournament = document.querySelector(".nav-drop-tournament");
const contribute = document.querySelector(".nav-drop-contribute");
const shareDrop = document.querySelector(".share-drop");
const menuDrop = document.querySelector(".menu-drop");

const arrayShow = [
  navItem,
  brandMenu,
  trending,
  tournament,
  contribute,
  shareDrop,
  menuDrop,
];

const show = (a) => {
  arrayShow[a].classList.add("show");
  Object.keys(arrayShow).forEach(function (item) {
    if (item != a) {
      arrayShow[item].classList.remove("show");
    }
  });
};

const showTwo = (i) => {
  let a = 1 + +i;
  arrayShow[i].classList.add("show");
  arrayShow[a].classList.add("show");
  Object.keys(arrayShow).forEach(function (item) {
    if ((item != a) & (item != i)) {
      arrayShow[item].classList.remove("show");
    }
  });
};

const toggleElement = (i) => {
  let a = 1 + +i;
  if (i == 0) {
    if (arrayShow[i].classList.contains("show")) {
      arrayShow[i].classList.remove("show");
      arrayShow[a].classList.remove("show");
    } else {
      showTwo(i);
    }
  } else {
    if (arrayShow[a].classList.contains("show")) {
      arrayShow[a].classList.remove("show");
    } else {
      show(a);
    }
  }
};

//add event

Object.keys(dropToggle).forEach(function (i) {
  dropToggle[i].addEventListener("click", function () {
    toggleElement(i);
  });
});

function hideOnClickOutside(element1, element2) {
  const outsideClickListener = (event) => {
    if (!element1.contains(event.target) && !element2.contains(event.target)) {
      // or use: event.target.closest(selector) === null
      if (element1 == dropToggle[0]) {
        arrayShow[0].classList.remove("show");
      }
      element2.classList.remove("show");
      removeClickListener();
    }
  };

  const removeClickListener = () => {
    document.removeEventListener("click", outsideClickListener);
  };

  document.addEventListener("click", outsideClickListener);
}

for (let j = 0; j < dropToggle.length; j++) {
  dropToggle[j].addEventListener("click", function () {
    let a = j + 1;
    hideOnClickOutside(dropToggle[j], arrayShow[a]);
  });
}
