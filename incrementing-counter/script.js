const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = "0";
  const followCount = +counter.getAttribute("data-target");

  const updateCount = () => {
    const incrementCountBy = followCount / 250;
    const currentFollow = +counter.innerHTML;

    if (currentFollow < followCount) {
      setTimeout(() => {
        counter.innerHTML = Math.ceil(incrementCountBy + currentFollow);
        updateCount();
      }, 1);
    } else {
      counter.innerHTML = followCount;
    }
  };

  updateCount();
});
