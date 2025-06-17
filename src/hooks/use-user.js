import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { profile } from "../services/auth-api";

export function useUser() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    profile()
      .then((user) => {
        setUser(user);
        setLoading(false);
      })
      .catch((err) => {
        if (err.status === 401) {
          navigate("/login");
          setLoading(false);
        }
      });
  }, [navigate]);

  return {
    user,
    loading,
  };
}
