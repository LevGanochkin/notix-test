/** In real project React Router (or any other router lib) will be preferable.
 * This realisation is ONLY for following the test task rules */
export const urlParams = {
  get: (param: string): string => {
    return new URLSearchParams(window.location.search).get(param) || '';
  },
  set: (param: string, value: string): void => {
    const searchParams = new URLSearchParams(window.location.search);
    value ? searchParams.set(param, value) : searchParams.delete(param);
    window.history.pushState({}, '', `?${searchParams}`);
  },
};
