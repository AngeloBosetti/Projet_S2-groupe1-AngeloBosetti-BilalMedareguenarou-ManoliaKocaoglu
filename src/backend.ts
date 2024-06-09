import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

export async function Alluser(){
    try {
        const recordAll = await pb.collection('users').getFullList
        return recordAll;
    } catch (e) {
        return e; 
    }
}
export async function Adduser(event: Object) {
   try {
       const record = await pb.collection('users').create(event);
       return record;
   } catch (error) {
       return error;
   }
}


export async function fetchMessages() {
  const records = await pb.collection('messages').getFullList()
  return records.map((record) => ({
    id: record.id,
    content: record.content,
    created: record.created
  }))
}
// Copier ici les fonctions developpées en R214 | Système d'information
