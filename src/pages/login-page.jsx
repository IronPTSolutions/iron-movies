import { PageLayout } from "../components/layouts";
import { useState } from "react";
import { login } from "../services/auth-api";
import { useNavigate } from "react-router";
import { useTime } from "../hooks/use-time";

export default function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [form, setForm] = useState({ username: "", password: "" });

  const time = useTime();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(null);

    login(form.username, form.password)
      .then((data) => {
        navigate("/");
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <PageLayout>
      <div className="container mt-5" style={{ maxWidth: 400 }}>
        <h3 className="mb-4">Login. {time}</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <form
          onSubmit={handleSubmit}
          className="border rounded p-4 bg-white shadow-sm"
        >
          <div className="mb-3">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              autoComplete="username"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ fontSize: "1.2rem" }}
          >
            Login
          </button>
        </form>
      </div>
    </PageLayout>
  );
}
