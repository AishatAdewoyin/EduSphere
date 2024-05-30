// pages/api/profile.js
import { auth, db } from '../../helpers/firebase';
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
} from 'firebase/firestore';
// import { getAuth } from 'firebase-admin/auth';
import initFirebaseAdmin from '../../helpers/initFirebaseAdmin'; // Ensure to initialize Firebase Admin SDK

initFirebaseAdmin();

export default async function handler(req, res) {
  try {
    const { userId } = auth.currentUser?.uid;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const profileQuery = query(
      collection(db, 'profiles'),
      where('userId', '==', userId),
      orderBy('timestamp', 'desc'),
      limit(1)
    );

    const querySnapshot = await getDocs(profileQuery);

    if (querySnapshot.empty) {
      return res.status(404).json({ error: 'No profile data found' });
    }

    const profileData = querySnapshot.docs[0].data();
    return res.status(200).json(profileData);
  } catch (error) {
    console.error('Error fetching profile data:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
