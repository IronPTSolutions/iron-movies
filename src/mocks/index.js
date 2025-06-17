import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

let login = false;

const credentials = {
  username: "julio",
  password: "oiluj",
};

const worker = setupWorker(
  http.post("http://ironhackmockapilogin.com/login", async (data) => {
    const body = await data.request.json();

    if (
      body.username === credentials.username &&
      body.password === credentials.password
    ) {
      login = true;

      return HttpResponse.json({
        username: "julio",
        email: "julio@example.com",
        avatar: "avatar url",
      });
    }

    return HttpResponse.json(
      {
        message: "invalid credentials",
      },
      { status: 401 }
    );
  }),
  http.get("http://ironhackmockapilogin.com/profile", () => {
    return HttpResponse.json(
      {
        username: "julio",
        email: "julio@example.com",
        avatar: "avatar url",
      },
      { status: login ? 200 : 401 }
    );
  })
);

export default worker;
