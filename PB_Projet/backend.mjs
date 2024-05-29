//Angelo  bosetti MMI 1 C1 2024
import PocketBase from 'pocketbase'; 
const pb = new PocketBase('http://127.0.0.1:8090');


//
const Full = await pb.collection("maison").getFullList();
console.log(Full);

//Question 6
const ID= await pb.collection("maison").getFirstListItem('id="agplytzljkl5e61"');
//console.log(ID);

//Question 7
const croisant = await pb.collection("maison").getFullList({ sort: "+created" });
//console.log(croisant);

//Question 8
const Decroissant = await pb.collection("maison").getFullList({sort: '-created'});
//console.log(Decroissant);

//Question 9
const Fav = await pb.collection("maison").getList(1, 4,{filter: 'favori = true'});
//console.log(Fav);

//Question 10
const BigSurface = await pb.collection("maison").getList(1, 4,{filter: 'surface > 100'});
//console.log(BigSurface);

//Question 11
const SurfAndSdb = await pb.collection("maison").getList(1, 4,{filter: 'surface > 100 && nbSdb >= 2'});
//console.log(SurfAndSdb);

//Question 12
const SurfAndChb = await pb.collection("maison").getList(1, 4,{filter: 'surface > 100 && nbChambres >= 3'});
//console.log(SurfAndChb);

//Question 13
const SurfCroissant = await pb.collection("maison").getList(1, 4,{filter: 'surface > 100', sort: '+prix'});
//console.log(SurfCroissant);

//Question 14
const CroissantNom = await pb.collection("maison").getList(1, 4,{sort: '+nomMaison'});
//console.log(CroissantNom);

//Question 15
const Nom = await pb
  .collection("maison")
  .getList(1, 4, { filter: 'nomMaison = "maison Elon musck"' });
//console.log(Nom);


