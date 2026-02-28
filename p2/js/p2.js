function upDate(previewPic) {
  console.log("upDate triggered:", previewPic.alt);

  const imageDiv = document.getElementById("image");
  imageDiv.textContent = previewPic.alt;
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function undo() {
  console.log("undo triggered");

  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.textContent = "Hover over or focus on an image below to display here.";
}

function addTabFocus() {
  console.log("addTabFocus triggered");

  const previews = document.querySelectorAll(".preview");

  for (let i = 0; i < previews.length; i++) {
    previews[i].setAttribute("tabindex", "0");

    previews[i].addEventListener("mouseover", function () {
      upDate(this);
    });

    previews[i].addEventListener("mouseleave", function () {
      undo();
    });

    previews[i].addEventListener("focus", function () {
      upDate(this);
    });

    previews[i].addEventListener("blur", function () {
      undo();
    });
  }
}

window.addEventListener("load", addTabFocus);