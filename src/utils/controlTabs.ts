export function setElementsTabs(
  state: boolean,
  elements: NodeListOf<HTMLElement>
) {
  if (state) {
    elements!.forEach((a: HTMLElement) => a.setAttribute('tabindex', '0'));
  } else {
    elements!.forEach((a: HTMLElement) => {
      a.setAttribute('tabindex', '-1');
    });
  }
}
