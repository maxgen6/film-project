import firebase from 'utils/firebase';

export const login = (value) => {
  return firebase.auth().signInWithEmailAndPassword(value.email, value.password);
};

export const register = (value) => {
  return firebase.auth().createUserWithEmailAndPassword(value.email, value.password);
};
