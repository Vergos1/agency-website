export const overflowHiddenModal = (open: boolean) => {
  document.body.style.overflow = open === true ? 'visible' : 'hidden';
};
