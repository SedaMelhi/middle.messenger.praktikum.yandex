import * as Pages from '../pages';

const pages = {
  login: Pages.LoginPage,
  // signup: [Pages.SignUpPage],
  // chats: [Pages.Chats],
  // dialog: [Pages.Dialog],
  // settings: [Pages.Settings],
  // newpassword: [Pages.NewPassword],
  // error: [Pages.Error],
};

export function navigate(page: string) {
  const app = document.getElementById('app');
  //@ts-ignore
  const Component = pages[page];
  const component = new Component();
  app?.append(component.getContent()!);
}

// document.addEventListener('DOMContentLoaded', () => navigate('login'));

// document.addEventListener('click', (e) => {
//   //@ts-ignore
//   const page = e.target.getAttribute('page');
//   if (page) {
//     navigate(page);

//     e.preventDefault();
//     e.stopImmediatePropagation();
//   }
// });
