// AUTH 관련된 일을 하는 클래스
import { firebaseAuth, githubProvider, googleProvider } from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    // console.log(authProvider);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  logout() {
    firebaseAuth.signOut();
  }

  onAuthChanged(onUserChanged) {
    firebaseAuth.onAuthStateChanged(user => {
      onUserChanged(user);
    })
  }

  getProvider(providerName) {
    switch(providerName) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error(`not supported provider:${providerName}`);
    } 
  }
}

export default AuthService;

// compact : 소형의, 압축한
// onAuthChanged 이해해서 유용하게 쓰기 ( func 전달 )