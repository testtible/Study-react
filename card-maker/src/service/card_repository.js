import { firebaseDatabase } from './firebase';

class CardRepository {
  saveCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, id) {
    firebaseDatabase.ref(`${userId}/cards/${id}`).remove();
  }

  syncCards(userId, onUpdate) {
    const ref = firebaseDatabase.ref(`${userId}/cards`);
    ref.on('value', snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    })
    return () => ref.off();
  }
}

export default CardRepository;