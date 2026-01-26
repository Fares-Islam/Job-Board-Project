export default function PostJob() {
  const form = document.getElementsByClassName(`jobpostingform`)[0] as HTMLFormElement;
  const formEntries = Object.fromEntries(new FormData(form).entries());

  if (!localStorage.getItem(`jobCount`)) localStorage.setItem(`jobCount`, `0`);
  else localStorage.setItem(`jobCount`, `${parseInt(localStorage.getItem(`jobCount`) ?? `0`) + 1}`);

  localStorage.setItem(`job${parseInt(localStorage.getItem(`jobCount`) ?? `0`)}`, JSON.stringify({ formEntries }));
  form.reset();
}