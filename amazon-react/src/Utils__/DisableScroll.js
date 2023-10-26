const disableScroll = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
  };
  export const disableScrolling = (display) => {
    if (display) {
      window.addEventListener('scroll', disableScroll);
    } else {
      window.removeEventListener('scroll', disableScroll);
    }
    return () => {
      window.removeEventListener('scroll', disableScroll);
    };
  };