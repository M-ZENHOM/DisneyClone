import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { getUserData, resetUser } from "../RTK/slices/userSlice";

const userAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, photo } = useSelector((state) => state.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      } else {
        dispatch(resetUser());
        navigate("/");
      }
    });
  }, []);

  const AuthHandler = () => {
    !name
      ? signInWithPopup(auth, provider)
          .then((result) => {
            setUser(result.user);
            navigate("/home");
          })
          .catch((error) => {
            alert(error.message);
          })
      : signOut(auth)
          .then(() => {
            dispatch(resetUser());
            navigate("/");
          })
          .catch((error) => {
            alert(error.message);
          });
  };

  const setUser = (user) => {
    dispatch(
      getUserData({
        name: user.displayName,
        photo: user.photoURL,
        email: user.email,
      })
    );
  };
  return {
    AuthHandler,
    name,
    photo,
  };
};

export default userAuth;
