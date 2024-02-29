export const actions = {
      nuxtServerInit({ commit }: any, { route, redirect }: any) {
      if (route.path === '/') {
      redirect('/home');
    }
  },
};