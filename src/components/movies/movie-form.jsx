import { useState } from "react";

function MovieForm() {
  const [data, setData] = useState({
    title: "",
    genre: "",
    imageUrl: "",
    description: "",
    errors: {}, // Añadido para manejar errores
  });

  const genres = [
    "",
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Sci-Fi",
    "Romance",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    let errorMsg;
    if (value.length < 2) {
      errorMsg = "Debe tener al menos 2 caracteres";
    } else {
      errorMsg = undefined;
    }

    setData({
      ...data,
      [name]: value,
      errors: { ...data.errors, [name]: errorMsg },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Movie created!");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 500 }}>
      <pre
        className="mb-3 bg-light p-2 border rounded"
        style={{ fontSize: "0.9rem" }}
      >
        {JSON.stringify(data, null, 2)}
      </pre>
      <h2 className="mb-4" style={{ fontFamily: "monospace" }}>
        MovieForm
      </h2>
      <form
        onSubmit={handleSubmit}
        className="border rounded p-4 bg-white shadow-sm"
      >
        <div className="mb-3">
          <label
            className="form-label"
            style={{ fontFamily: "monospace", fontSize: "1.5rem" }}
          >
            title
          </label>
          <input
            type="text"
            className={`form-control${data.errors.title ? " is-invalid" : ""}`}
            name="title"
            value={data.title}
            onChange={handleChange}
            autoComplete="off"
          />
          {data.errors.title && (
            <div className="invalid-feedback">{data.errors.title}</div>
          )}
        </div>
        <div className="mb-3">
          <label
            className="form-label"
            style={{ fontFamily: "monospace", fontSize: "1.5rem" }}
          >
            genre
          </label>
          <select
            className={`form-select${data.errors.genre ? " is-invalid" : ""}`}
            name="genre"
            value={data.genre}
            onChange={handleChange}
          >
            {genres.map((g, idx) => (
              <option key={idx} value={g}>
                {g ? g : "Select genre"}
              </option>
            ))}
          </select>
          {data.errors.genre && (
            <div className="invalid-feedback">{data.errors.genre}</div>
          )}
        </div>
        <div className="mb-3">
          <label
            className="form-label"
            style={{ fontFamily: "monospace", fontSize: "1.5rem" }}
          >
            imageUrl
          </label>
          <input
            type="text"
            className={`form-control${
              data.errors.imageUrl ? " is-invalid" : ""
            }`}
            name="imageUrl"
            value={data.imageUrl}
            onChange={handleChange}
            autoComplete="off"
          />
          {data.errors.imageUrl && (
            <div className="invalid-feedback">{data.errors.imageUrl}</div>
          )}
        </div>
        <div className="mb-4">
          <label
            className="form-label"
            style={{ fontFamily: "monospace", fontSize: "1.5rem" }}
          >
            desc
          </label>
          <textarea
            className={`form-control${
              data.errors.description ? " is-invalid" : ""
            }`}
            name="description"
            rows={4}
            value={data.description}
            onChange={handleChange}
          />
          {data.errors.description && (
            <div className="invalid-feedback">{data.errors.description}</div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          style={{ fontFamily: "monospace", fontSize: "2rem" }}
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default MovieForm;
