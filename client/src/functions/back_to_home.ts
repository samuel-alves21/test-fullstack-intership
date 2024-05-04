export const backToHome = (setLoader: (value: boolean) => void) => {
  setLoader(true)
  window.location.href = '/'
}