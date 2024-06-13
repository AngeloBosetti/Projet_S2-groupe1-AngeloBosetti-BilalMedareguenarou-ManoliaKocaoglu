import PocketBase from 'pocketbase';
import { type TypedPocketBase } from './pocketbase-types.js';



export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

export async function Alluser(){
        const recordAll = await pb.collection('users').getFullList
        return recordAll;
}



export async function AllDossVac() {
  const AllDV = await pb.collection('dossier_vac').getFullList()
  return AllDV
}

export async function Adduser(event: Object) {

       const AddU = await pb.collection('users').create(event);
       return AddU
}
export async function AddMessages(event: Object) {
    const AddM = await pb.collection('messages').create(event)
    return AddM

}

export async function AllFriends() {
      const AllF = await pb.collection('users').getFullList({
        filter: `id='${pb.authStore.model!.id}'`,
        expand: 'friends'
      });
      return AllF;
}

export async function AllMessages() {
  try {
    const AllM = await pb.collection('messages').getFullList()
    return AllM
  } catch (error) {
    return error
  }
}

export async function UpdtUser(userI: Object , id: string) {
    const UpdtU = await pb.collection('users').update(id, userI)
    return UpdtU
}


