import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore/lite';
import { config } from '@src/config'
import { setError, setData } from '@src/utils/util.conector';
const app = initializeApp(config.firebase);
const db = getFirestore(app);


export const conectorServices = (collectionName) => {
    const useCollection = collection(db, collectionName);
    return {
        getAll: async () => {
            try {
                const itemsSnapshot = await getDocs(useCollection);
                return itemsSnapshot.docs.map(setData);
            } catch (error) {
                return setError(error)
            };
        },
        find: async (field, value, op = '==') => {
            const filter = query(useCollection, where(field, op, value));
            const itemsSnapshot = await getDocs(filter);
            return itemsSnapshot.docs.map(setData);
        },
        getById: async (id) => {
            try {
                const docRef = doc(db, collectionName, id)
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) return setData(docSnap);
                return { error: true, message: 'item not found' }
            } catch (error) {
                return setError(error)
            };
        },
        create: async (data) => {
            try {
                // aqui va la logica de crear
            } catch (error) {
                return setError(error)
            };
        },
        update: async (id, data) => {
            try {
                //aqui va la logica de actualizar
            } catch (error) {
                return setError(error)
            };
        },
        detele: async (id) => {
            try {
                //aqui va la logica de eliminar
            } catch (error) {
                return setError(error)
            };
        }
    }
}
