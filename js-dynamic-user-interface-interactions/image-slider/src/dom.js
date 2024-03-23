export function setFrameWidth(element, frameWidth) {
  element.style.width = `${frameWidth}px`;
}

function highLightNavDot(goalPosition) {
  const navDots = document.querySelectorAll(".nav-dot");
  navDots.forEach((navDot) => {
    navDot.classList.remove("highlighted");
  });

  const navDot = navDots[Number(goalPosition)];
  navDot.classList.add("highlighted");
}

export function addNavDots(navDotsContainer, slidesCount, moveSlides) {
  for (let count = 0; count < slidesCount; count += 1) {
    const navDot = document.createElement("div");
    navDot.classList.add("nav-dot");
    navDot.id = `${count}`;

    navDot.addEventListener("click", (e) => {
      const goalPosition = e.target.id;
      moveSlides.toPosition(goalPosition);

      highLightNavDot(Number(e.target.id));

      e.target.classList.add("highlighted");
    });

    navDotsContainer.appendChild(navDot);
  }

  highLightNavDot(0);
}

export function slideTransitions(slidesContainer, slideElements, frameWidth) {
  let currentPosition = 0;
  const positions = [0];

  for (let count = 1; count < slideElements.length; count += 1) {
    positions.push(Number(positions.slice(-1)) - Number(frameWidth));
  }

  const toBeginning = () => {
    slidesContainer.style.transform = `translateX(0px)`;
  };

  const toEnd = () => {
    const distance = Number(positions.slice(-1));
    slidesContainer.style.transform = `translateX(${distance}px)`;
  };

  const left = (times) => {
    const currentX = positions[currentPosition];
    const distance = currentX + times * frameWidth;

    if (currentPosition - 1 < 0) {
      toEnd();
      currentPosition = positions.length - 1;
    } else {
      slidesContainer.style.transform = `translateX(${distance}px)`;
      currentPosition -= 1;
    }

    highLightNavDot(Number(currentPosition));
  };

  const right = (times) => {
    const currentX = positions[currentPosition];
    const distance = currentX - times * frameWidth;

    if (currentPosition + 1 > positions.length - 1) {
      toBeginning();
      currentPosition = 0;
    } else {
      slidesContainer.style.transform = `translateX(${distance}px)`;
      currentPosition += 1;
    }

    highLightNavDot(Number(currentPosition));
  };

  const toPosition = (goalPosition) => {
    const distance = positions[goalPosition];
    currentPosition = goalPosition;

    slidesContainer.style.transform = `translateX(${distance}px)`;
  };

  return { left, right, toPosition };
}
