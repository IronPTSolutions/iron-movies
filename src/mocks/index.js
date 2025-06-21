import { http, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';

const baseApiDomain = 'http://ironhackmockapilogin.com';

let users = self.localStorage.getItem('users') ? 
  JSON.parse(self.localStorage.getItem('users')) : [];

const handleUserRegister = http.post(`${baseApiDomain}/users`, async (data) => {
  const user = await data.request.json();
  const isAlreadyRegistered = users.some((registeredUser) => registeredUser.username === user.username);
  if (isAlreadyRegistered) {
    return HttpResponse.json(
      {
        message: 'Invalid user register',
        errors: {
          username: 'Username already registered'
        }
      },
      { status: 400 }
    );
  } else {
    user.id = self.crypto.randomUUID();
    user.favMovies = [];
    users.push(user);
    self.localStorage.setItem('users', JSON.stringify(users));
    return HttpResponse.json(user, { status: 201 });
  }
});

const handleUserLogin = http.post(`${baseApiDomain}/login`, async (data) => {
  const { username, password } = await data.request.json();
  const user = users.find((registeredUser) => 
    registeredUser.username === username && registeredUser.password === password
  )
  if (user) {
    return HttpResponse.json(user, { status: 201 });
  } else {
    return HttpResponse.json(
      {
        message: 'Unauthorized',
        errors: {
          password: 'Invalid username or password'
        }
      },
      { status: 401 }
    ); 
  }
});

const handleFavoriteMovie = http.post(`${baseApiDomain}/movies/:id/favorites`, async (data) => {
  const movie = await data.request.json();
  const currentUser = self.localStorage.getItem("currentUser") ?
    JSON.parse(self.localStorage.getItem('currentUser')) : undefined;
  
  if (!currentUser) {
    return HttpResponse.json(
      { message: 'Unauthorized, please login' },
      { status: 401 }
    );
  } else {
    const targetMovie = currentUser.favMovies
      .find((favMovie) => favMovie.id === movie.id)
    if (!targetMovie) {
      currentUser.favMovies.push(movie);
    } else {
      currentUser.favMovies = currentUser.favMovies
        .filter((favMovie) => favMovie.id !== movie.id);
    }

    self.localStorage.setItem("currentUser", JSON.stringify(currentUser));
    users = users.filter((user) => user.username !== currentUser.username);
    users.push(currentUser);
    self.localStorage.setItem("users", JSON.stringify(users));

    return HttpResponse.json(
      currentUser,
      { status: 201 }
    );
  }
});

const worker = setupWorker(
  handleUserLogin,
  http.get(`${baseApiDomain}/profile`, () => {
    return HttpResponse.json(
      {
        username: 'julio',
        email: 'julio@example.com',
        avatar: 'avatar url',
      },
      { status: login ? 200 : 401 }
    );
  }),
  handleUserLogin,
  handleUserRegister,
  handleFavoriteMovie
);

export default worker;
