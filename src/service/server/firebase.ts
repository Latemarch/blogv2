import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  projectID: process.env.FIREBASE_PROJECT_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();
const dbRef = ref(getDatabase(app));

export const getItems = async (
  category: string
): Promise<Array<IPost | IProject>> => {
  const snapshot = await get(child(dbRef, `nextjs/${category}`));
  if (snapshot.exists()) {
    const data: any[] = Object.values(snapshot.val());
    return data.sort((a, b) => b.createdAt - a.createdAt);
  }
  return [];
};

export const getItem = async (
  id: string | undefined,
  category: string
): Promise<IPost | IProject> => {
  const snapshot = await get(child(dbRef, `nextjs/${category}/${id}`));
  return snapshot.val();
};
