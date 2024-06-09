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


// export async function fetchMessages() {
//   const records = await pb.collection('messages').getFullList()
//   return records.map((record) => ({
//     id: record.id,
//     content: record.content,
//     created: record.created
//   }))
// }
// Copier ici les fonctions developpées en R214 | Système d'information


// export async function fetchUserMessages(senderId: string, receiverId: string) {
//     try {
//       const records = await pb.collection('messages').getFullList();
//       const userMessages = records.filter((record) => record.senderId === senderId && record.receiverId === receiverId);
//       return userMessages.map((message) => ({
//         id: message.id,
//         content: message.content,
//         created: message.created
//       }));
//     } catch (error) {
//       return error;
//     }
//   }


export async function fetchUserMessages(senderEmail: string, receiverEmail: string) {
    try {
      // Get the sender and receiver IDs from the users collection
      const users = await pb.collection('users').getFullList();
      const sender = users.find(user => user.email === senderEmail);
      const receiver = users.find(user => user.email === receiverEmail);
  
      if (!sender || !receiver) {
        throw new Error('Sender or receiver not found');
      }
  
      const senderId = sender.id;
      const receiverId = receiver.id;
  
      // Fetch the messages
      const records = await pb.collection('messages').getFullList();
      const userMessages = records.filter((record) => record.from === senderId && record.to === receiverId);
      return userMessages.map((message) => ({
        id: message.id,
        content: message.content,
        created: message.created,
        readAt: message.readAt
      }));
    } catch (error) {
      return error;
    }
  } 