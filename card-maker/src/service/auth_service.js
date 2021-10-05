// AUTH 관련된 일을 하는 클래스
import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    // console.log(authProvider);
    return firebaseApp.auth().signInWithPopup(authProvider)
  }

  logout() {
    firebase.auth().signOut();
  }

  onAuthChanged(onUserChanged) {
    firebase.auth().onAuthStateChanged(user => {
      onUserChanged(user);
    })
  }

}

export default AuthService;

// compact : 소형의, 압축한
// onAuthChanged 이해해서 유용하게 쓰기 ( func 전달 )