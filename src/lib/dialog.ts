/** Fecha um <dialog> com a animação de saída (data-closing), respeitando prefers-reduced-motion. */
export function closeDialog(el: HTMLDialogElement) {
  if (!el.open || el.dataset.closing) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return el.close();
  el.dataset.closing = "true";
  window.setTimeout(() => {
    el.close();
    delete el.dataset.closing;
  }, 180);
}
