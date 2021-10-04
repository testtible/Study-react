// AUTH 관련된 일을 하는 클래스
import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    // console.log(authProvider);
    return firebaseApp.auth().signInWithPopup(authProvider)
  }
}

export default AuthService;


// compact : 소형의, 압축한