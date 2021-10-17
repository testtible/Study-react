import firebaseApp from './firebase';

class CardRepository {
  saveCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, id) {
    firebaseApp.database().ref(`${userId}/cards/${id}`).remove();
  }

  syncCards(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`${userId}/cards`);
    ref.on('value', snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    })
    return () => ref.off();
  }
}

export default CardRepository;